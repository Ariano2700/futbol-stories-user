import type { UserI } from "../user/userInterface";
import type { ContentBlock } from "./contentInterfaces";
import type { TagsI } from "./tagsInterface";

export interface NewsI {
  id: string;
  title: string;
  author_id: string;
  content: ContentBlock[];
  tags: TagsI[];
  images: Omit<ImagesNewsI[], "id">;
  isPeruvian: boolean;
  isStory: boolean;
  principalTag: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewsWithAuthorI {
  id: string;
  title: string;
  author: UserI;
  content: ContentBlock[];
  tags: TagsI[];
  images: Omit<ImagesNewsI[], "id">;
  isPeruvian: boolean;
  isStory: boolean;
  principalTag: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImagesNewsI {
  url: string;
  fromOf: string;
  mainImage: boolean;
}
