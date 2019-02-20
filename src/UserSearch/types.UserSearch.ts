import { Gender } from "../GenderChoice/types.GenderChoice";
import { UserType } from "../User/types.User";

export interface UserSearchState {
  gender: Gender;
  users: UserType[];
}
