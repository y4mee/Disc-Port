import React, { useEffect, useState } from "react";
import { Music, Gamepad2 } from "lucide-react";
import Socials from "./Socials";

// Enhanced Lanyard API handler with proper decoration support
const fetchLanyardData = async (userId = "1102123627438153738") => {
  try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
    const data = await response.json();

    if (data.success) {
      const user = data.data;

      const getAvatarUrl = (avatar, userId, size = 256) => {
        if (!avatar) {
          return `https://cdn.discordapp.com/embed/avatars/${
            (parseInt(user.discord_user.discriminator) || 0) % 5
          }.png`;
        }
        const format = avatar.startsWith("a_") ? "gif" : "webp";
        return `https://cdn.discordapp.com/avatars/${userId}/${avatar}.${format}?size=${size}`;
      };

      const getDecorationUrls = () => {
        const decoration = user.discord_user?.avatar_decoration_data;
        if (!decoration?.asset) return null;

        const baseUrl = "https://cdn.discordapp.com/avatar-decoration-presets";
        const isAnimated = decoration.asset.startsWith("a_");

        return {
          primary: `${baseUrl}/${decoration.asset}.${isAnimated ? "gif" : "webp"}`,
          fallback: `${baseUrl}/${decoration.asset}.png`,
          isAnimated: isAnimated,
        };
      };

      return {
        user: {
          id: user.discord_user.id,
          username: user.discord_user.username,
          display_name:
            user.discord_user.display_name ||
            user.discord_user.global_name ||
            user.discord_user.username,
          avatar_url: getAvatarUrl(user.discord_user.avatar, user.discord_user.id),
          decoration: getDecorationUrls(),
        },
        status: user.discord_status,
        activities: user.activities || [],
        spotify: user.spotify,
        listening_to_spotify: user.listening_to_spotify,
      };
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch Lanyard data:", error);
    return null;
  }
};

// Status indicator component
const StatusIndicator = ({ status }) => {
  const statusConfig = {
    online: { color: "bg-emerald-400", ring: "ring-emerald-400/40", shadow: "shadow-emerald-400/30" },
    idle: { color: "bg-amber-400", ring: "ring-amber-400/40", shadow: "shadow-amber-400/30" },
    dnd: { color: "bg-rose-400", ring: "ring-rose-400/40", shadow: "shadow-rose-400/30" },
    offline: { color: "bg-slate-500", ring: "ring-slate-500/30", shadow: "shadow-slate-500/20" },
  };

  const config = statusConfig[status] || statusConfig.offline;

  return (
    <div
      className={`absolute bottom-2 right-2 w-9 h-9 ${config.color} rounded-full border-4 border-white ring-2 ${config.ring} ${config.shadow} shadow-lg z-50`}
    >
      <div className={`absolute inset-0 ${config.color} rounded-full animate-ping opacity-40`}></div>
    </div>
  );
};

const Profile = ({ isDark }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [decorationLoaded, setDecorationLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchLanyardData();
      setData(result);
      setLoading(false);
      setTimeout(() => setShowContent(true), 300);
    };

    loadData();
    const interval = setInterval(loadData, 30000);
    return () => clearInterval(interval);
  }, []);

  const currentActivity = data?.activities?.[0];
  const isListening = data?.listening_to_spotify && data?.spotify;

  return (
    <>
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .avatar-enter {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .text-shimmer {
          background: linear-gradient(90deg, #000 0%, #666 50%, #000 100%);
          background-size: 200% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .slide-in {
          animation: slideInFromLeft 0.6s ease-out forwards;
        }
      `}</style>

      <div className="relative">
        <div
          className={`flex flex-col items-center gap-8 w-[500px] h-[800px] bg-white/40 outline-1 outline-white border-1 border-white rounded-[80px] ${
            isDark ? "bg-white/80" : ""
          }`}
        >
          {/* Avatar with decoration */}
          <div className={`relative group/avatar ${!loading ? "avatar-enter" : ""}`}>
            {/* Lavender glow on hover */}
            <div
              className="absolute -inset-8 rounded-full blur-xl opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(230,230,250,0.4) 0%, rgba(216,191,216,0.3) 50%, rgba(230,230,250,0.4) 100%)",
              }}
            ></div>

            <div className="relative mt-13">
              {/* Avatar image */}
              <div className="w-[223px] h-[223px] bg-black rounded-full overflow-hidden transition-all duration-500 group-hover/avatar:scale-110">
                {loading ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-white/20 border-t-purple-400 rounded-full animate-spin"></div>
                  </div>
                ) : data ? (
                  <>
                    <img
                      className="object-contain"
                      src={data.user.avatar_url}
                      alt="Profile"
                      onError={(e) => (e.target.src = "./mainpfp.png")}
                    />
                    {/* <div className="absolute top-4 left-4 w-5 h-5 bg-white/60 rounded-full blur-sm"></div>
                    <div className="absolute top-2 left-2 w-3 h-3 bg-white/80 rounded-full"></div> */}
                  </>
                ) : (
                  <img className="object-contain" src="./mainpfp.png" alt="Profile" />
                )}
              </div>

              {/* Avatar decoration overlay */}
              {data?.user.decoration && (
                <div className="absolute -inset-4 flex items-center justify-center pointer-events-none z-10">
                  <img
                    src={data.user.decoration.primary}
                    alt="Avatar Decoration"
                    className={`w-[255px] h-[255px] object-contain transition-all duration-700 ${
                      decorationLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    } group-hover/avatar:scale-110`}
                    style={{
                      imageRendering: data.user.decoration.isAnimated ? "auto" : "crisp-edges",
                    }}
                    onLoad={() => setDecorationLoaded(true)}
                    onError={(e) => {
                      if (e.target.src === data.user.decoration.primary) {
                        e.target.src = data.user.decoration.fallback;
                      } else {
                        e.target.style.display = "none";
                      }
                    }}
                  />
                </div>
              )}

              {data && <StatusIndicator status={data.status} />}

              {currentActivity && (
                <div className="absolute -top-3 -left-3 opacity-0 group-hover/avatar:opacity-100 transition-all duration-300 scale-75 group-hover/avatar:scale-100 z-40">
                  <div className="w-9 h-9 bg-indigo-500/80 backdrop-blur-sm rounded-full border-2 border-white/30 shadow-lg flex items-center justify-center">
                    <Gamepad2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}

              {isListening && (
                <div className="absolute -top-3 -right-3 opacity-0 group-hover/avatar:opacity-100 transition-all duration-300 scale-75 group-hover/avatar:scale-100 z-40">
                  <div className="w-9 h-9 bg-green-500/80 backdrop-blur-sm rounded-full border-2 border-white/30 shadow-lg flex items-center justify-center">
                    <Music className="w-5 h-5 text-white animate-pulse" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Text with shimmer */}
          <h1
            className={`text-black font-semibold text-[35px] ${
              showContent ? "text-shimmer" : "opacity-0"
            }`}
          >
            Hi, I'm Jatin!
          </h1>

          {/* Connections Button (no wiggle, no pulse) */}
          <div
            className={`flex items-center justify-center w-[260px] h-[40px] bg-white/50 outline-1 outline-white border-1 border-white rounded-[80px] ${
              showContent ? "slide-in" : "opacity-0"
            }`}
            style={{ animationDelay: showContent ? "0.2s" : "0s" }}
          >
            <h2 className="text-black font-semibold">Connections</h2>
          </div>

          <Socials />
        </div>
      </div>
    </>
  );
};

export default Profile;
