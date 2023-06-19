import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { EVENTS_API, transformEventsListData } from '../../utils';

enum ActionEventsTypes {
	SET_EVENTS_LIST_DATA = 'SET_EVENTS_LIST_DATA',
}

const initialState: EventsListState = {
	eventsListData: [],
	isLoading: false,
	isError: false,
};

export const FETCH_EVENTS_LIST = createAsyncThunk(
	'eventsList/FETCH_DATA',
	async () => {
		const { data } = await axios.get(
			`${EVENTS_API}/upcoming/?limit=12&offset=0`
		);
		const eventsData = transformEventsListData(data.results);
		return eventsData;
	}
);

const eventsListSlice = createSlice({
	name: 'eventsList',
	initialState,
	reducers: {
		[ActionEventsTypes.SET_EVENTS_LIST_DATA]: (
			state,
			action: PayloadAction<Array<RecentData>>
		) => {
			state.eventsListData = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(FETCH_EVENTS_LIST.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
		});
		builder.addCase(FETCH_EVENTS_LIST.fulfilled, (state, action) => {
			state.eventsListData = action.payload;
			state.isLoading = false;
		});
		builder.addCase(FETCH_EVENTS_LIST.rejected, (state) => {
			state.isError = true;
			state.isLoading = false;
		});
	},
});

const { reducer, actions } = eventsListSlice;

export default reducer;
export const { SET_EVENTS_LIST_DATA } = actions;