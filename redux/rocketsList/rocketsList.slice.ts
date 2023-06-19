import axios from 'axios';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ROCKET_API, transformRocketsListData } from '../../utils';

enum ActionRocketsTypes {
	SET_ROCKETS_LIST_DATA = 'SET_ROCKETS_LIST_DATA',
}

const initialState: RocketsListState = {
	rocketsListData: [],
	isLoading: false,
	isError: false,
};

export const FETCH_ROCKETS_LIST = createAsyncThunk(
	'rocketsList/FETCH_DATA',
	async () => {
		const { data } = await axios.get(ROCKET_API);
		const rocketsData = transformRocketsListData(data.results);
		return rocketsData;
	}
);

const rocketsListSlice = createSlice({
	name: 'rocketsList',
	initialState,
	reducers: {
		[ActionRocketsTypes.SET_ROCKETS_LIST_DATA]: (
			state,
			action: PayloadAction<Array<RecentData>>
		) => {
			state.rocketsListData = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(FETCH_ROCKETS_LIST.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
		});
		builder.addCase(FETCH_ROCKETS_LIST.fulfilled, (state, action) => {
			state.rocketsListData = action.payload;
			state.isLoading = false;
		});
		builder.addCase(FETCH_ROCKETS_LIST.rejected, (state) => {
			state.isError = true;
			state.isLoading = false;
		});
	},
});

const { reducer, actions } = rocketsListSlice;

export default reducer;
export const { SET_ROCKETS_LIST_DATA } = actions;