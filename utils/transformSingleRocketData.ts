interface InputRocket {
	height: RocketLength;
	diameter: RocketLength;
	mass: RocketMass;
	flickr_images: Array<string>;
	name: string;
	type: string;
	active: boolean;
	stages: number;
	boosters: number;
	cost_per_launch: number;
	success_rate_pct: number;
	first_flight: string;
	landing_legs: {
		number: number,
		material: string
	};
	engines: {
		number: number,
		type: string
	};
	country: string;
	company: string;
	wikipedia: string;
	description: string;
	id: number;
}

export const transformSingleRocketData = (data: InputRocket): SingleRocketData => {
	const {
		flickr_images,
		name,
		type,
		active,
		engines,
		landing_legs,
		first_flight,
		country,
		company,
		wikipedia,
		description,
		id,
	} = data;

	const legs_info = `${landing_legs.number}, ${landing_legs.material}`;
	const height = data.height.meters.toString();
	const diameter = data.diameter.meters.toString();
	const engines_info = `${engines.number.toString()} типа ${engines.type}`; 
	const success_rate = data.success_rate_pct.toString();
	const stages = data.stages.toString();
	const image = flickr_images[0];
	const boosters = data.boosters.toString();
	const cost_per_launch = data.cost_per_launch.toString();
	const mass = data.mass.kg.toString();

	const singleRocketData = {
		height,
		diameter,
		mass,
		legs_info,
		image,
		name,
		type,
		active,
		stages,
		boosters,
		cost_per_launch,
		success_rate,
		engines_info,
		first_flight,
		country,
		company,
		wikipedia,
		description,
		id,
	};

	return singleRocketData;
};
