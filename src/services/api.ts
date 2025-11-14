import { Main } from "../interfaces/main";
import { Leaderboard } from "../interfaces/leaderboard";

export async function getApiData<T extends Main | Leaderboard>(url: string): Promise<T | null> {

  try {
    const result = await fetch(url);
    if (!result.ok) throw new Error();

    const data = await result.json();
    if (!data) return null;
    if (data.success === false) return null;

    return data as T;

  } catch (error) {
    return null;
  }
}  
