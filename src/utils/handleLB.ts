import { LeaderboardBody } from "../interfaces/leaderboard";
import { getApiData } from "../services/api";

export class BossLeaderboard {

    extractURL(url: string): string {
        return url.split("/").slice(0, -1).join("/");
    }

    async getSoloLeaderboard(body: LeaderboardBody) {

    }

    async getMultiplayerLeaderboard(body: LeaderboardBody) {

    }

}
