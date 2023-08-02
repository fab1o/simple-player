export const LOAD_VIDEO_EVENT = 'LOAD_VIDEO_EVENT';

export async function getAllVideos() {
    const request = await window.fetch('http://127.0.0.1:3000/data');

    const data = await request.json();

    return data.reduce((acc, curr) => acc.concat(curr.streams), []);
}

export function renderVideos(videos) {
    const streamsElem = document.getElementById('videos');

    const ul = document.createElement('ul');

    videos.forEach((video) => {
        console.log('Appending video: ', video.title);

        const li = document.createElement('li');
        const button = document.createElement('button');

        //button.setAttribute('data-url', video.url);
        button.setAttribute('class', 'load-test-button');
        button.appendChild(document.createTextNode('Load Test'));

        button.onclick = () =>
            button.dispatchEvent(
                new CustomEvent(LOAD_VIDEO_EVENT, {
                    bubbles: true,
                    detail: video.url,
                })
            );

        li.appendChild(document.createTextNode(video.title));
        li.appendChild(button);

        ul.appendChild(li);
    });

    streamsElem.appendChild(ul);
}
