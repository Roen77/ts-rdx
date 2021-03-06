import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
// import { createStandardAction } from "typesafe-actions/dist/deprecated/create-standard-action";
import { GithubProfile } from "../../api/github";

export const GET_USER_PROFILE = "github/GET_USER_PROFILE";
export const GET_USER_PROFILE_SUCCESS = "github/GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_ERROR = "github/GET_USER_PROFILE_ERROR";

// 로딩 중 액션 페이로드 string
export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR
)<string, GithubProfile, AxiosError>();
