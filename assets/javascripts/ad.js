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

function setCookieWithExpiry(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + "; domain=.kkgithub.com; path=/";
}

const toggleBtn = document.getElementById('toggle-btn');

const statusLabel = document.getElementById('statusLabel');
const tooltip = document.getElementById('tooltip');

if (getCookie('adclosed') === '1') {
    toggleBtn.checked = true;
    statusLabel.textContent = '广告屏蔽已开启';
	tooltip.textContent = '关闭广告屏蔽会促进KGitHub的发展';
} else {
    toggleBtn.checked = false;
    statusLabel.textContent = '广告屏蔽已关闭';
	tooltip.textContent = '开启广告屏蔽后有效期为7天，超出后需在此页面再次开启';
}


toggleBtn.addEventListener('change', function() {
    if (toggleBtn.checked) {
        setCookieWithExpiry('adclosed', '1', 7); // 设置cookie为1
        statusLabel.textContent = '广告屏蔽已开启';
		tooltip.textContent = '关闭广告屏蔽会促进KGitHub的发展';
		
    } else {
        setCookieWithExpiry('adclosed', '0', 365); // 设置cookie为0
        statusLabel.textContent = '广告屏蔽已关闭';
		tooltip.textContent = '开启广告屏蔽后有效期为7天，超出后需在此页面再次开启';
    }
});


    statusLabel.addEventListener('mouseover', function() {
        tooltip.style.display = 'block'; // 显示提示框
    });

    // 鼠标移出事件处理函数
    statusLabel.addEventListener('mouseout', function() {
        tooltip.style.display = 'none'; // 隐藏提示框
    });

