enum SliderType {
  event = 'event',
  rocket = 'rocket'
}

type ImageType = string | null;

type TitleView = 'h1' | 'h2' | 'h3';

type CardSize = 's' | 'm';

type RecentData = {
	id: string;
	name: string;
	info: string | null;
	image: string | null;
};

type LaunchesState = {
	launchesData: Array<RecentData>;
	loadingTrigger: boolean;
	isLoading: boolean;
	isError: boolean;
	isEnd: boolean;
};

type EventsListState = {
	eventsListData: Array<RecentData>;
	isLoading: boolean;
	isError: boolean;
};

type RocketsListState = {
	rocketsListData: Array<RecentData>;
	isLoading: boolean;
	isError: boolean;
};

type SingleLaunchData = {
	id: string;
	name: string;
	image: string;
	type: string;
	orbit: string;
	location: string;
	launchComplex: string;
	rocketName: string;
	missionDescr: string;
	rocketFamily: string;
	rocketVariant: string;
	rocketDescr: string;
	eventCoordinates: { lat: number; lng: number };
	rocketId: string;
	date: string;
	vidURLs: string;
}

type RocketLength = {
  meters: number,
  feet: number
}

type RocketMass = {
  kg: number,
  lb: number
}

type SingleRocketData = {
	id: number;
	description: string;
	country: string;
	company: string;
	type: string;
	name: string;
	first_flight: string;
	active: boolean;
	stages: string;
	height: string;
	diameter: string;
	mass: string;
	legs_info: string;
	boosters: string;
	success_rate: string;
	cost_per_launch: string;
	engines_info: string;
	wikipedia: string;
	image: string;
};

type SingleEventData = {
  id: string;
  name: string;
  feature_image: string;
  mainDescr: string;
  date: string;
  video_url: string | null;
  rocketName: string;
  news_url: string;
  mission_type: string;
  location: string;
  eventImg: string;
  orbit: string;
}

type EventListPageProps = {
	staticEventsData: Array<RecentData>;
};

type EventPageProps = {
	singleEvent: SingleEventData;
}

type LaunchListPageProps = {
	staticLaunchesData: Array<RecentData>;
};

type LaunchPageProps = {
	singleLaunchData: SingleLaunchData;
}

type RocketListPageProps = {
	staticRocketData: Array<RecentData>;
};

type RocketPageProps = {
	singleRocketData: SingleRocketData;
}
