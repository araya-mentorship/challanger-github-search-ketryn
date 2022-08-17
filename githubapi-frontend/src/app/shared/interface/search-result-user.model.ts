import { User } from "./user.model";

export interface SearchResultUser {
  profile: import("c:/Users/ketryn.miranda/Documents/GitHub/desafio-githubapi-frontend/githubapi-frontend/src/app/shared/interface/user-result.model").UserResult[];
  total_count: number;
  incomplete_results: boolean,
  items: User[],
}