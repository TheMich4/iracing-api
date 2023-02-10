import { getData } from "../helpers";

const getMemberData = async (customerIds: Array<number>) =>
	await getData("data/member/get", { cust_ids: customerIds });

export { getMemberData };
