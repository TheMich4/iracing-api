import { API } from ".";
import { getData } from "../helpers";
import { Track, TrackAssets } from "../types";

export class TrackAPI extends API {
  /**
   *
   * *Image paths are relative to https://images-static.iracing.com/*
   *
   * @returns
   */
  getTrackAssets = async () =>
    await getData<TrackAssets>(this.fetchCookie, "data/track/assets");
  /**
   *
   * @returns
   */
  getTracks = async () =>
    await getData<Track[]>(this.fetchCookie, "data/track/get");
}
