import allStreamers from "../streamerInfo.json";

export function getRandomStreamer() {
    const min = 0;
    const max = 5;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return allStreamers[rand]
}