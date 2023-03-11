import { AxiosInstance } from "axios";
import { GetTeamDataParams } from "./types.js";
import { getData } from "../../helpers.js";

export const getTeamData = async (
	axiosInstance: AxiosInstance,
	params: GetTeamDataParams,
) =>
	await getData(axiosInstance, "data/team/get", {
		team_id: params.teamId,
		include_licenses: params.includeLicenses,
	});
