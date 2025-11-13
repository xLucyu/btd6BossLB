import { Body } from "./interfaces/main";
import { LeaderboardBody } from "./interfaces/leaderboard";

export async function getApiData(url: string): Promise<Body | LeaderboardBody> {
  
  const result = await fetch(url);
  const data = await result.json();
  return data;
}  
