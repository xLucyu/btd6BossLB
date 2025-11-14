import { Scheduler } from "./services/scheduler";
import { getCurrentBossLB } from "./utils/getcurrentBossLB";
import { BossLeaderboard } from "./utils/handleLB";

const scheduler = new Scheduler();
const lbHandler = new BossLeaderboard();

scheduler.startScheduler(async () => {
    console.log("scheduler running");
}, 30);

async function main() {
    const currentBossLB = await getCurrentBossLB();
    
}

main();
