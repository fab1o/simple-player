import Player from './player.js';
import { getAllVideos, renderVideos, LOAD_VIDEO_EVENT } from './videoTests.js';

const player = new Player();

document.addEventListener('DOMContentLoaded', async () => {
    const videos = await getAllVideos();

    if (videos && videos[0]) {
        player.load(videos[0].url);
    }

    renderVideos(videos);
});

document.addEventListener(LOAD_VIDEO_EVENT, (e) => {
    player.load(e.detail);
});
