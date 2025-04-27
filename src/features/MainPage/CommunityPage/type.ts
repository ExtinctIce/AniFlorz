export type CommunityVideo = {
  id: number;
  title: string;
  description: string;
  url: string;
  video_id: string;
  views: number;
  comments: number;
  
  created_at: string;
  updated_at: string;
  
  image: {
    preview: string;
    thumbnail: string;
    optimized: {
      preview: string;
      thumbnail: string;
    };
  };
  
  is_announce: boolean;
  

  origin: {
    id: string;
    title: string;
    description: string;
    is_announce: boolean;
    type: {
      value: string;
      description: string;
    };
    url: string;
  };
};


