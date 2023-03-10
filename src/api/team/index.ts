import { AxiosInstance } from "axios";
import { getData } from "../../helpers";

const getTeamData = async (
	axiosInstance: AxiosInstance,
	teamId: number,
	includeLicenses: boolean,
) =>
	await getData(axiosInstance, "data/team/get", {
		team_id: teamId,
		include_licenses: includeLicenses,
	});

export { getTeamData };
