import { AxiosInstance } from "axios";
import { getData } from "../../helpers.js";

export const getTeamData = async (
	axiosInstance: AxiosInstance,
	teamId: number,
	includeLicenses: boolean,
) =>
	await getData(axiosInstance, "data/team/get", {
		team_id: teamId,
		include_licenses: includeLicenses,
	});
