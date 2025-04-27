import { useEffect, useRef } from 'react';

interface TitleInfo {
  code: string;
  id: number;
  episode?: number;
  translation?: string;
}

interface KodikPlayerProps {
  titleInfo: TitleInfo;
}

export const KodikPlayer = ({ titleInfo }: KodikPlayerProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const generateKodikUrl = (info: TitleInfo) => {
    const baseUrl = 'https://kodik.info/serial';
    const { id, code, episode, translation } = info;
    
    let url = `${baseUrl}/${id}/${code}/720p`;
    
    if (episode) {
      url += `?episode=${episode}`;
    }
    
    if (translation) {
      url += `${episode ? '&' : '?'}translations=${translation}`;
    }
    
    return url;
  };

  useEffect(() => {
   
    return () => {
      if (iframeRef.current) {
        iframeRef.current.src = '';
      }
    };
  }, []);

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      <iframe
        ref={iframeRef}
        src={generateKodikUrl(titleInfo)}
        className="absolute top-0 left-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}; 