interface InputLaunchesData {
  id: string;
  name: string;
  net: string;
  rocket: LaunchesRocket;
}

interface LaunchesRocket {
  configuration: { image_url: ImageType };
}

export const transformLaunchesData = (
	data: Array<InputLaunchesData>
): Array<RecentData> => {
	const transformData = data.map((item: InputLaunchesData) => {
		const { id, name, net: info } = item;
		const { image_url: image } = item.rocket.configuration;

		return {
			name,
			image,
			id,
			info,
		};
	});

	return transformData;
};
