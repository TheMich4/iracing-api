import { getData } from "../../helpers";

const getTimeAttackSeasonResults = (seasonId: number) =>
	getData("data/time_attack/member_season_results", {
		ta_comp_season_id: seasonId,
	});

export { getTimeAttackSeasonResults };
