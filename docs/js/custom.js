const script1 = document.createElement('script');
script1.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
script1.onload = () => {
    kofiWidgetOverlay.draw('quantjourney', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Join Us',
        'floating-chat.donateButton.background-color': '#ffa500',
        'floating-chat.donateButton.text-color': '#0c3bbd'
    });

};
document.head.appendChild(script1);