export type AllGenres = {
  id: number;
  name: string;
  names: string;

  image: {
    optimized: {
      preview: string;
      thumbnail: string;
    };
    preview: string;
    thumbnail: string;
  };
  total_releases: number;
};
