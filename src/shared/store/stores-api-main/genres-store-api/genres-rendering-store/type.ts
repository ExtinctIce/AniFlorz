export type Release = {
  id: number;
  name: {
    main: string;
    english: string;
    alternative: string;
  };
  poster: {
    src: string;
    thumbnail: string;
    optimized: {
      src: string;
      thumbnail: string;
    };
  };
  year: number;
  type: {
    value: string;
    description: string;
  };
};
