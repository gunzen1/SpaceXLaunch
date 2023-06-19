import { configureStore } from '@reduxjs/toolkit';

import launches from './launches/launches.slice';
import eventsList from './eventsList/eventsList.slice';
import rocketsList from './rocketsList/rocketsList.slice';
import singleEvent from './singleEvent/singleEvent.slice';
import singleLaunch from './singleLaunch/singleLaunch.slice';
import singleRocket from './singleRocket/singleRocket.slice';

export const store = configureStore({
	reducer: { launches, eventsList, rocketsList, singleLaunch, singleRocket, singleEvent },
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
