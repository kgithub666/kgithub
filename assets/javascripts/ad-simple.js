function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const closedAdValue = getCookie('adclosed');
if (closedAdValue === '1') {
    console.log("Closed Ad cookie found with value 1. Skipping ad script.");
} else {
    // (function() {
    //     var script = document.createElement('script');
    //     script.async = true;
    //     script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9385930556040654';
    //     script.crossOrigin = 'anonymous';
    //     document.head.appendChild(script);
    // })();
}