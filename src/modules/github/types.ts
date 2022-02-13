import { ActionType } from "typesafe-actions";
import { GithubProfile } from "../../api/github";
import * as actions from "./action";
export type GithubAction = ActionType<typeof actions>;

export type GithubState = {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: GithubProfile | null;
  };
};
