export function formatDuration(secs) {
    if (Number.isNaN(secs)) {
        return '00:00';
    }

    const lPad = (num) => {
        return (num < 10 ? '0' : '') + num.toString();
    };

    const hours = Math.floor(secs / 3600);
    secs -= hours * 3600;

    const mins = Math.floor(secs / 60);
    secs -= mins * 60;

    secs = Math.floor(secs);

    return `${hours > 0 ? hours + ':' : ''}${lPad(mins)}:${lPad(secs)}`;
}
