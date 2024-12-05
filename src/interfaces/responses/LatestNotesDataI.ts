import type { NewsI, NewsWithAuthorI } from "../news/newsInterface";

export interface DataI {
  stories: NewsI[];
  news: NewsI[];
}

export interface DataWithAuthorI {
  stories: NewsWithAuthorI[];
  news: NewsWithAuthorI[];
}
