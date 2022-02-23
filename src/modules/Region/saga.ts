import { takeEvery } from "redux-saga/effects";
import { getRegion, getRegionArea } from "./api";
import { asyncGetRegion, asyncGetRegionArea } from "../Region/actions";
import { createSaga } from "../../lib/createSaga";

const getRegionSaga = createSaga(asyncGetRegion, getRegion);
const getRegionAreaSaga = createSaga(asyncGetRegionArea, getRegionArea);

export default [
  takeEvery(asyncGetRegion.request, getRegionSaga),
  takeEvery(asyncGetRegionArea.request, getRegionAreaSaga),
];
