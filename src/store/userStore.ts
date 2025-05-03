// stores/userStore.ts
import { create } from "zustand";

interface User {
  id: string;
  username: string;
  // digər sahələr
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

import { useQuery } from "@tanstack/react-query";
import { getUserRepos } from "@services/userService";

export const useUserRepos = (username: string) => {
  return useQuery({
    queryKey: ["userRepos", username],
    queryFn: () => getUserRepos(username),
    enabled: !!username,
  });
};
