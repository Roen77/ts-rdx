import { GithubState } from "../github";
import { createReducerCreator } from "../reducer";
import * as IActions from "./actions";

import { AxiosError, AxiosResponse } from "axios";
import { GithubProfile } from "../../api/github";
import { asyncActionTypeCreator } from "../reducer";

export const asyncGetRegion = asyncActionTypeCreator<
  string,
  AxiosResponse<GithubProfile>,
  AxiosError
>("@REGION");
export const asyncGetRegionArea = asyncActionTypeCreator<
  string,
  AxiosResponse<GithubProfile>,
  AxiosError
>("@REGION_AREA");

const initialState: GithubState = {
  userProfile: {
    loading: false,
    data: null,
    error: null,
  },
};

const initialState2 = {
  data: {} as GithubState,
};

const regionReducer = createReducerCreator(
  IActions.asyncGetRegion,
  initialState
);

const regionAreaReducer = createReducerCreator(
  IActions.asyncGetRegionArea,
  initialState2
);

export default { regionReducer, regionAreaReducer };
