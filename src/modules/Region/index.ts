import reducer from "./reducer";
import * as actions from "./actions";
import saga from "./saga";

export interface IRegion {
  regionCode: number;
  regionName: string;
}

export interface IRegionArea {
  areaIdx: number;
  regionCode: number;
  areaCode: number;
  areaName: string;
}

export default {
  reducer,
  saga,
  actions,
};
