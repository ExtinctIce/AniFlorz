export type UserT = {
  login: string;
  nickname: string;
  email: string;
  avatar_original: string;
  avatar_thumbnail: string;
  vk_id: string;
  patreon_id: string;
};

export type UserRequestOptionsT = {
  session: string;
  filter?: string;
  remove?: string;
};

export type UserFavoritesRequestOptionsT = {
  session: string;
  filter?: string;
  remove?: string;
  include?: string;
  description_type?: string;
  playlist_type?: number;
  limit?: number;
  after?: number;
  page?: number;
  items_per_page?: number;
};

export type UserFAddDelRequestOptionsT = {
  session: string;
  title_id: string;
};
