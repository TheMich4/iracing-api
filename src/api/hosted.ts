import { getData } from "../helpers";

const getHostedCombinedSessions = async (packageId: number) =>
	await getData("data/hosted/combined_sessions", { package_id: packageId });

const getHostedSessions = async () => await getData("data/hosted/sessions");

export { getHostedCombinedSessions, getHostedSessions };
