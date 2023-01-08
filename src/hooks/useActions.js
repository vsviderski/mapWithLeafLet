import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { coordinatesActions } from "redux/reducers/coordinatesReducer";
import { getPolylineAction } from "redux/reducers/polylineReducer";

const allActions = {
	...coordinatesActions,
	getPolylineAction,
};

export const useActions = () => {
	const dispatch = useDispatch();

	return bindActionCreators(allActions, dispatch);
};
