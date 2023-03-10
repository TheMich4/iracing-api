import { getData } from "../../helpers";

const getTrackAssets = async () => await getData("data/track/assets");

const getTracks = async () => await getData("data/track/get");

export { getTrackAssets, getTracks };
