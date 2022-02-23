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
