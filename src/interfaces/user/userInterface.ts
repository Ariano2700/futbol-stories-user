export interface UserI {
  id: string;
  email: string;
  username: string;
  name: string;
  surname: string;
  photoProfile: string;
  description: string;
  profession: string;
  networks: NetworksI[];
  createdAt: Date;
  updatedAt: Date;
}

export interface NetworksI {
  network:
    | "twitter"
    | "instagram"
    | "facebook"
    | "linkedin"
    | "tiktok"
    | "other";
  url: string;
}
