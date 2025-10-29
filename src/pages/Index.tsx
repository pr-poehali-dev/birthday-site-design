import { useEffect, useState } from 'react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const leftVideos = [
    "https://cdn.coverr.co/videos/coverr-cinematic-view-of-a-man-walking-3787/1080p.mp4",
    "https://cdn.coverr.co/videos/coverr-a-person-walking-on-a-beach-6323/1080p.mp4",
    "https://cdn.coverr.co/videos/coverr-aerial-view-of-a-forest-5234/1080p.mp4",
    "https://cdn.coverr.co/videos/coverr-city-traffic-at-night-4782/1080p.mp4",
  ];

  const rightVideos = [
    "https://cdn.coverr.co/videos/coverr-aerial-view-of-a-city-at-night-4516/1080p.mp4",
    "https://cdn.coverr.co/videos/coverr-mountain-landscape-5621/1080p.mp4",
    "https://cdn.coverr.co/videos/coverr-ocean-waves-4123/1080p.mp4",
    "https://cdn.coverr.co/videos/coverr-sunset-sky-3456/1080p.mp4",
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 flex">
        <div className="relative w-1/3 h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/90 z-10 pointer-events-none" />
          <div className="flex flex-col gap-4 p-4">
            {leftVideos.map((videoSrc, index) => (
              <div key={index} className="relative aspect-[9/16] w-full overflow-hidden rounded-sm">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </div>
        </div>

        <div className={`relative w-1/3 h-full flex items-center justify-center z-20 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center px-8 space-y-8 animate-fade-in">
            <div className="space-y-2">
              <h1 className="font-cinzel text-7xl font-bold text-primary tracking-wider mb-4 animate-shimmer bg-gradient-to-r from-primary via-foreground to-primary bg-[length:200%_100%] bg-clip-text text-transparent">
                СТЕПАН
              </h1>
              <div className="w-32 h-px bg-primary mx-auto opacity-60" />
            </div>
            
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <p className="font-cormorant text-3xl text-foreground/90 leading-relaxed">
                С днём рождения!
              </p>
              
              <p className="font-cormorant text-xl text-foreground/70 leading-loose max-w-md mx-auto">
                Пусть этот год станет твоим лучшим приключением. 
                Желаем тебе невероятных моментов, настоящих друзей 
                и исполнения всех желаний.
              </p>
              
              <div className="pt-4">
                <p className="font-cinzel text-2xl text-primary tracking-widest">
                  ★ ★ ★
                </p>
              </div>
            </div>

            <div className="pt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
              <p className="font-cormorant text-lg text-foreground/50 italic">
                "Жизнь — это кино, а ты — главный герой"
              </p>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        <div className="relative w-1/3 h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/90 z-10 pointer-events-none" />
          <div className="flex flex-col gap-4 p-4">
            {rightVideos.map((videoSrc, index) => (
              <div key={index} className="relative aspect-[9/16] w-full overflow-hidden rounded-sm">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="absolute inset-0 pointer-events-none z-30 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="absolute inset-0 pointer-events-none z-40 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Index;
