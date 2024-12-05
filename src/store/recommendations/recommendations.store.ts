import type { NewsWithAuthorI } from "src/interfaces/news/newsInterface";
import { create } from "zustand";

interface RecommendationsStoreI {
  recommendations: NewsWithAuthorI[];
  prevStories: NewsWithAuthorI[];
  prevNews: NewsWithAuthorI[];
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
  setRecommendations: (data: NewsWithAuthorI[]) => void;
  setPrevStories: (data: NewsWithAuthorI[]) => void;
  setPrevNews: (data: NewsWithAuthorI[]) => void;
}

export const useRecommendationsStore = create<RecommendationsStoreI>((set) => ({
  recommendations: [],
  prevStories: [],
  prevNews: [],
  loading: true,
  setLoading: (isLoading) => set(() => ({ loading: isLoading })),
  setRecommendations: (data) => set(() => ({ recommendations: data })),
  setPrevStories: (data) => set(() => ({ prevStories: data })),
  setPrevNews: (data) => set(() => ({ prevNews: data })),
}));
