const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });



var throttle = require('lodash.throttle');

const returnCurrentTime = function () {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem('videoplayer-current-time', seconds)
    });
};

player.on('timeupdate', throttle(returnCurrentTime, 1000));  

const continueCurrentTime = function () {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
};

player.on('play', continueCurrentTime);


    