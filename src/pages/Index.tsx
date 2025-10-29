import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const leftVideos = [
    "/videos-left/video1.mp4",
    "/videos-left/video2.mp4",
    "/videos-left/video3.mp4",
    "/videos-left/video4.mp4",
  ];

  const rightVideos = [
    "/videos-right/video1.mp4",
    "/videos-right/video2.mp4",
    "/videos-right/video3.mp4",
    "/videos-right/video4.mp4",
  ];

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
      <div className="absolute inset-0 flex">
        <div className="relative w-1/3 h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/80 z-10 pointer-events-none" />
          <div className="flex flex-col gap-6 p-6">
            {leftVideos.map((videoSrc, index) => (
              <div key={index} className="relative aspect-[9/16] w-full overflow-hidden rounded-lg shadow-2xl border border-white/5">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={(e) => {
                    const target = e.target as HTMLVideoElement;
                    target.style.display = 'none';
                  }}
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
              </div>
            ))}
          </div>
        </div>

        <div className={`relative w-1/3 h-full flex items-center justify-center z-20 transition-all duration-1500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="text-center px-12 space-y-12 max-w-xl">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <Icon name="Sparkles" className="text-primary w-12 h-12 mx-auto mb-4 animate-pulse" />
              </div>
              
              <h1 className="font-cinzel text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary animate-shimmer bg-[length:200%_100%] tracking-wider leading-tight">
                СТЕПАН
              </h1>
              
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/60" />
                <Icon name="Star" className="text-primary w-5 h-5" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/60" />
              </div>
            </div>
            
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="font-cormorant text-4xl font-semibold text-foreground leading-relaxed">
                С Днём Рождения!
              </p>
              
              <p className="font-cormorant text-2xl text-foreground/80 leading-loose font-light">
                Пусть этот год принесёт тебе незабываемые приключения, 
                искренние моменты и исполнение самых смелых мечтаний.
              </p>
              
              <div className="pt-6 space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Heart" className="text-primary w-6 h-6 animate-pulse" />
                  <Icon name="Heart" className="text-primary w-6 h-6 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <Icon name="Heart" className="text-primary w-6 h-6 animate-pulse" style={{ animationDelay: '0.6s' }} />
                </div>
              </div>
            </div>

            <div className="pt-8 animate-fade-in border-t border-white/10" style={{ animationDelay: '1.2s' }}>
              <p className="font-cormorant text-xl text-foreground/60 italic leading-relaxed">
                "Жизнь — это твоё кино,
                <br />
                а ты в нём — главный герой"
              </p>
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 animate-bounce" style={{ animationDelay: '2s' }}>
              <Icon name="ChevronDown" className="text-primary/40 w-8 h-8" />
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        </div>

        <div className="relative w-1/3 h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/80 z-10 pointer-events-none" />
          <div className="flex flex-col gap-6 p-6">
            {rightVideos.map((videoSrc, index) => (
              <div key={index} className="relative aspect-[9/16] w-full overflow-hidden rounded-lg shadow-2xl border border-white/5">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={(e) => {
                    const target = e.target as HTMLVideoElement;
                    target.style.display = 'none';
                  }}
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="absolute inset-0 pointer-events-none z-30 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="absolute inset-0 pointer-events-none z-40 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />

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
