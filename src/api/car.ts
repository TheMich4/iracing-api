import axios from "axios";
import { axiosInstance } from "../axios";

const getCars = async () => {
	const { data } = await axiosInstance.get("data/car/get");

	if (data.link) {
		const { data: carData } = await axios.get(data.link);

		if (carData && carData.length > 0) {
			return carData;
		}
	}

	return undefined;
};

export { getCars };
