import { User } from "./user.model";

export interface SearchResultUser {
  total_count: number;
  incomplete_results: boolean,
  items: User[],
}