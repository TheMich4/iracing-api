import { API } from "./api";
import { Track, TrackAssets } from "../types";

export class TrackAPI extends API {
  /**
   *
   * *Image paths are relative to https://images-static.iracing.com/*
   *
   * @returns
   */
  getTrackAssets = async () =>
    await this._getData<TrackAssets>("data/track/assets");
  /**
   *
   * @returns
   */
  getTracks = async () => await this._getData<Track[]>("data/track/get");
}
