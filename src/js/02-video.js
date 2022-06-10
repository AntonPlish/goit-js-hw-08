import Vimeo from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};
player.on('timeupdate', throttle(onPlay, 1000));

player.getDuration().then(function(duration) {
    const getInfo = localStorage.getItem('videoplayer-current-time');
    const getArray = JSON.parse(getInfo);
    duration = Object.values(getArray);

    player.setCurrentTime(duration[0]).then(function (seconds) {
        // seconds = player.getDuration();
        console.log('Continue from "seconds":', seconds);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred'
            break;
    };
});
}).catch(function(error) {
});