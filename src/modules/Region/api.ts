import axios from "axios";
import { GithubProfile } from "../../api/github";

// 지역 조회
export async function getRegion() {
  return axios.get<GithubProfile>(`https://api.github.com/users/Roen77`);
  // const response = await axios.get<GithubProfile>(
  //   `https://api.github.com/users/Roen77`
  // );
  // return response.data;
}
// 시군구 조회
export async function getRegionArea(regionCode: string) {
  return axios.get<GithubProfile>(`https://api.github.com/users/${regionCode}`);
  // return response.data;
  // const response = await axios.get<GithubProfile>(
  //   `https://api.github.com/users/${regionCode}`
  // );
  // return response.data;
}
