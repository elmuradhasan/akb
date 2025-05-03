import { create } from "zustand";
import { useQuery } from "@tanstack/react-query";
import { getUserRepos } from "@services/userService";
import { persist } from 'zustand/middleware';
interface User {
  id: string;
  username: string;
  // digər sahələr
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-storage", // localStorage açarı
    }
  )
);


export const useUserRepos = (username: string) => {
  return useQuery({
    queryKey: ["userRepos", username],
    queryFn: () => getUserRepos(username),
    enabled: !!username,
  });
};
