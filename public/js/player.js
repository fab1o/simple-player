/**
 * @version 0.0.1
 * @desc Player
 */
export default class Player {
    constructor() {
        const video = document.querySelector('video');

        if (video) {
            this.video = video;
        } else {
            throw Error(`video element not in DOM`);
        }

        this.initEvents();
        this.initControls();
    }

    initEvents() {
        this.video.addEventListener(
            'volumechange',
            this.onVolumeChange.bind(this)
        );
    }

    initControls() {
        this.playButton = document.querySelector('#playButton');
        this.pauseButton = document.querySelector('#pauseButton');
        this.noVolumeButton = document.querySelector('#noVolume');
        this.volumeButton = document.querySelector('#volume');
        this.fastForwardButton = document.querySelector('#fastForward');
        this.rewindButton = document.querySelector('#rewind');
        this.enteredTime = document.querySelector('#enteredTime');
        this.duration = document.querySelector('#duration');

        if (!this.playButton) {
            console.error('Element with id="playButton" not in DOM');
        }

        if (!this.pauseButton) {
            console.error('Element with id="pauseButton" not in DOM');
        }

        if (!this.noVolumeButton) {
            console.error('Element with id="noVolume" not in DOM');
        }

        if (!this.volumeButton) {
            console.error('Element with id="volume" not in DOM');
        }

        if (!this.fastForwardButton) {
            console.error('Element with id="fastForward" not in DOM');
        }

        if (!this.rewindButton) {
            console.error('Element with id="rewind" not in DOM');
        }

        if (!this.enteredTime) {
            console.error('Element with id="enteredTime" not in DOM');
        }

        this.initControlsEvents();
    }

    initControlsEvents() {
        if (this.playButton) {
            this.playButton.addEventListener('click', this.play.bind(this));
        }
        if (this.pauseButton) {
            this.pauseButton.addEventListener('click', this.pause.bind(this));
        }

        if (this.noVolumeButton) {
            this.noVolumeButton.addEventListener('click', this.mute.bind(this));
        }
        if (this.volumeButton) {
            this.volumeButton.addEventListener('click', this.unMute.bind(this));
        }

        if (this.fastForwardButton) {
            this.fastForwardButton.addEventListener(
                'click',
                this.fastForward.bind(this)
            );
        }
        if (this.rewindButton) {
            this.rewindButton.addEventListener('click', this.rewind.bind(this));
        }

        if (this.enteredTime) {
            this.enteredTime.addEventListener(
                'keyup',
                this.onSeekTimeChanged.bind(this)
            );
        }
    }

    load(source) {
        this.video.src = source;
        this.video.load();
    }

    isVideoPlaying() {
        return !!(
            this.video.currentTime > 0 &&
            !this.video.paused &&
            !this.video.ended &&
            this.video.readyState > 2
        );
    }

    play() {
        if (this.video.src) {
            this.video.play();
        }
    }

    pause() {
        this.video.pause();
    }

    fastForward() {
        if (this.video.ended || !this.video.src) {
            return;
        }

        this.video.currentTime = Math.min(
            this.video.currentTime + 10,
            this.video.duration
        );
    }

    rewind() {
        if (this.video.ended || !this.video.src) {
            return;
        }

        this.video.currentTime = Math.max(this.video.currentTime - 10, 0);
    }

    mute() {
        this.video.muted = true;
    }

    unMute() {
        this.video.muted = false;
    }

    seek(newTime) {
        if (this.video.ended || !this.video.src) {
            return;
        }

        newTime = Math.min(newTime, this.video.duration);
        newTime = Math.max(newTime, 0);

        this.video.currentTime = newTime;
    }

    onSeekTimeChanged(event) {
        if (event.defaultPrevented) {
            return;
        }

        if (event.key === 'Enter') {
            event.preventDefault();

            const seekTime = Number(event.target.value);

            if (Number.isNaN(seekTime)) {
                throw Error(`Number not provided`);
            } else {
                this.seek(seekTime);
            }
        }
    }

    onVolumeChange(event) {
        if (event.target.muted) {
            if (this.noVolumeButton) {
                this.noVolumeButton.style.display = 'none';
            }
            if (this.volumeButton) {
                this.volumeButton.style.display = 'block';
            }
        } else {
            if (this.noVolumeButton) {
                this.noVolumeButton.style.display = 'block';
            }
            if (this.volumeButton) {
                this.volumeButton.style.display = 'none';
            }
        }
    }
}
