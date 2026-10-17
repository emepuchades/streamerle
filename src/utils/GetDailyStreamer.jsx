import allStreamers from "../streamerInfo.json";

export function getDailyStreamer() {
    const today = new Date();
    const firstDay = Date.UTC(2022, 0, 1);
    const todayDay = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    const days = Math.floor((todayDay - firstDay) / (1000 * 60 * 60 * 24));
    return allStreamers[days % allStreamers.length]
}
