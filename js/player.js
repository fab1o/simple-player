/**
 * @version 0.0.1
 * @desc Player
 */
class Player {
    constructor(options) {
        const videoElem = document.querySelector('video');

        if (videoElem) {
            this.videoElem = videoElem;
        } else {
            throw Error(`video element not in DOM`);
        }

        this.initEvents();
        this.initControls();
    }

    // get state() {
    //     return {
    //         paused: this.videoElem.paused,
    //         currentTime: this.videoElem.currentTime,
    //         duration: Number.isNaN(this.videoElem.duration)
    //             ? 0.1
    //             : this.videoElem.duration,
    //         volume: this.videoElem.volume,
    //     };
    // }

    initEvents() {
        this.videoElem.addEventListener(
            'volumechange',
            this.onVolumeChange.bind(this)
        );

        // this.videoElem.addEventListener('playing', this.onPlaying.bind(this));
        // this.videoElem.addEventListener('pause', this.onPause.bind(this));
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

    play() {
        this.videoElem.play();
    }

    pause() {
        this.videoElem.pause();
    }

    fastForward() {
        if (this.videoElem.ended) {
            return;
        }

        this.videoElem.currentTime = Math.min(
            this.videoElem.currentTime + 10,
            this.videoElem.duration
        );

        // this.update();
    }

    rewind() {
        if (this.videoElem.ended) {
            return;
        }

        this.videoElem.currentTime = Math.max(
            this.videoElem.currentTime - 10,
            0
        );

        // this.update();
    }

    mute() {
        this.videoElem.muted = true;
    }

    unMute() {
        this.videoElem.muted = false;
    }

    seek(newTime) {
        if (this.videoElem.ended) {
            return;
        }

        newTime = Math.min(newTime, this.videoElem.duration);
        newTime = Math.max(newTime, 0);

        this.videoElem.currentTime = newTime;

        // this.update();
    }

    // update() {
    //     const { duration } = this.state();

    //     this.duration.textContent = formatDuration(duration);
    // }

    // onPlaying(event) {}

    // onPause(event) {}

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

export { Player };
