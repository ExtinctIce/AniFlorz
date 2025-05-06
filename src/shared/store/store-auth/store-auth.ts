import { makeAutoObservable } from "mobx";

interface UserData {
  id: number;
  login: string;
  email: string;
  nickname: string;
  avatar: {
    preview: string;
    thumbnail: string;
    optmized: {
      preview: string;
      thumbnail: string;
    };
  };
  torrents: {
    passkey: string;
    uploaded: number;
    downloaded: number;
  };
  is_banned: boolean;
  created_at: string;
  is_with_ads: boolean;
}

class StoreAuth {
  isAuth = false;
  userData: UserData | null = null;

  constructor() {
    const savedAuth = localStorage.getItem('isAuth') === 'true';
    const savedUserData = localStorage.getItem('user_data');
    
    this.isAuth = savedAuth;
    this.userData = savedUserData ? JSON.parse(savedUserData) : null;
    
    makeAutoObservable(this);
  }

  getIsAuth() {
    return this.isAuth;
  }

  setIsAuth(isAuth: boolean) {
    this.isAuth = isAuth;
    localStorage.setItem('isAuth', String(isAuth));
  }

  setUserData(data: UserData) {
    this.userData = data;
    localStorage.setItem('user_data', JSON.stringify(data));
  }

  getUserData() {
    return this.userData;
  }

  clearUserData() {
    this.userData = null;
    this.isAuth = false;
    localStorage.removeItem('user_data');
    localStorage.removeItem('isAuth');
    localStorage.removeItem('auth_token');
  }
}

export const storeAuth = new StoreAuth();
