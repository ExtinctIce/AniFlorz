export type FranchiseData = {
  id: string;
  name: string;
  name_english: string;
  rating?: number;
  last_year: number;
  first_year: number;
  total_releases: number;
  total_episodes: number;
  total_duration: string;
  total_duration_in_seconds: number;
  image: {
    preview: string;
    thumbnail: string;
    optimized: {
      preview: string;
      thumbnail: string;
    };
  };
};

// Пример использования:
// const franchise: FranchiseData = {
//   id: "116e17d2-e89f-4ffc-bfa4-b45ae4c41e92",
//   name: "Re: Жизнь в другом мире с нуля",
//   name_english: "Re: Zero kara Hajimeru Isekai Seikatsu",
//   rating: 8.45,
//   last_year: 2023,
//   first_year: 2010,
//   total_releases: 10,
//   total_episodes: 25,
//   total_duration: "2 дня 5 часов",
//   total_duration_in_seconds: 183600,
//   image: {
//     preview: "/path/to/preview.jpg",
//     thumbnail: "/path/to/thumbnail.jpg",
//     optimized: {
//       preview: "/path/to/preview.webp",
//       thumbnail: "/path/to/thumbnail.webp"
//     }
//   }
// };
