import { getData } from "../../helpers";

const getTeamData = async (teamId: number, includeLicenses: boolean) =>
	await getData("data/team/get", {
		team_id: teamId,
		include_licenses: includeLicenses,
	});

export { getTeamData };
