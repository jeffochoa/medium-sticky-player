const header = document.querySelector('head');
const style = document.createElement('style');
style.type = 'text/css';

style.appendChild(document.createTextNode(`
    .js-audioPlayer {
        position: fixed !important;
        bottom: 45px;
        z-index: 101;
        left: 0;
        margin: 0 45px;
        width: -webkit-fill-available;
    }
`));

header.appendChild(style);