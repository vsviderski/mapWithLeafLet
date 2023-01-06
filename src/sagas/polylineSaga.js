import { getPolylineData } from 'api/HTTP.service';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getPolylineSuccess } from 'redux/reducers/polylineReducer';

function* getPolylineWorker(action) {
    const data = yield call(() => getPolylineData(action.payload))
    yield put(getPolylineSuccess(data))
}

function* polylineSaga() {
    yield takeEvery('polyline/getPolylineAction', getPolylineWorker)
}

export default polylineSaga;
