interface RocketsListInfo {
	id: string;
	name: string;
	flickr_images: Array<string>;
	first_flight: string;
}

export const transformRocketsListData = (
	data: Array<RocketsListInfo>
): Array<RecentData> => {
	const rocketsListData = data.map((item: RocketsListInfo) => {
		const { id, name } = item;
		const image = item.flickr_images[0];
		const info = item.first_flight;
		return { id, name, info, image };
	});

	return rocketsListData;
};
