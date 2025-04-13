export type CommunityVideo = {
  // Основные данные
  id: number;
  title: string;
  description: string;
  url: string;
  video_id: string;
  views: number;
  comments: number;
  
  // Даты
  created_at: string;
  updated_at: string;
  
  // Изображения
  image: {
    preview: string;
    thumbnail: string;
    optimized: {
      preview: string;
      thumbnail: string;
    };
  };
  
  // Флаги
  is_announce: boolean;
  
  // Происхождение
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

// Пример использования:
// const video: CommunityVideo = {
//   id: 791,
//   title: "Куда делся \"Незначительный персонаж\" и что будет дальше?",
//   description: "Плейлист с канала Ditaro",
//   url: "https://www.youtube.com/watch?v=bDascwXsYeA",
//   video_id: "bDascwXsYeA",
//   views: 2394,
//   comments: 27,
//   created_at: "2025-04-07T09:30:43+00:00",
//   updated_at: "2025-04-11T13:00:03+00:00",
//   image: {
//     preview: "/path/to/preview.jpg",
//     thumbnail: "/path/to/thumbnail.jpg",
//     optimized: {
//       preview: "/path/to/preview.webp",
//       thumbnail: "/path/to/thumbnail.webp"
//     }
//   },
//   is_announce: false,
//   origin: {
//     id: "9a020b2f-cc01-40a6-b60e-4792eee6bce1",
//     title: "Ditaro",
//     description: "Youtube плейлист",
//     is_announce: false,
//     type: {
//       value: "youtube_playlist",
//       description: "Youtube плейлист"
//     },
//     url: "https://www.youtube.com/playlist?list=PLvvqzGZQ72jlK2X9mt2-ghk4jeyeSFlt_"
//   }
// };
