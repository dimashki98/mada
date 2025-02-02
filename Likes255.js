$(document).ready(function () {  
    let lastNotification = ""; // لتخزين آخر إشعار ظهر  
    let effectsEnabled = true; // للتحكم في تشغيل وإيقاف التأثيرات  

    // إنشاء الزر لتشغيل/إيقاف التأثيرات
    const toggleButton = $('<label></label>')
        .text('إيقاف التأثيرات')
        .addClass('label tc border btn label-info fl')
        .css({
            'background-color': 'ghostwhite',
            'color': 'black',
            'margin': '1px 4px',
            'padding': '6px',
            'width': '98%'
        })
        .prepend('<span class="fl fa fa-stop" style="font-family: FontAwesome, sans-serif;"></span> ')
        .click(function() {
            effectsEnabled = !effectsEnabled; // عكس حالة التشغيل
            $(this).text(effectsEnabled ? 'إيقاف التأثيرات' : 'تشغيل التأثيرات')
                .prepend(effectsEnabled 
                    ? '<span class="fl fa fa-stop" style="font-family: FontAwesome, sans-serif;"></span> ' 
                    : '<span class="fl fa fa-play" style="font-family: FontAwesome, sans-serif;"></span> ');
        });

    // إضافة الزر إلى القائمة
    $('#newoption .not_geri').append(toggleButton);

    // فحص الإشعارات بشكل دوري
    const checkForNotifications = setInterval(function () {  
        if (!effectsEnabled) return; // إذا كانت التأثيرات متوقفة، لا تعمل  

        $('div.break.fl').each(function () {  
            const text = $(this).text().trim();  

            if (text !== lastNotification && (  
                text.includes('حصلت على إعجاب') ||  
                text.includes('💋 أأأمـمـمـمـمـمـوأأاااحـح 💋') ||  
                text.includes('❤️ أنـا أحٍـبَڪ') ||  
                text.includes('💦 اااااخخخختتتتتتفففففففففوووووووووووووووووووووو') ||  
                text.includes('ههههههههههههههههههههههههههههههههههههههههههههههههه')  
            )) {  
                lastNotification = text; // تحديث الإشعار الحالي  
                startEmojiEffect(text);  
            }  
        });  
    }, 1000); // التحقق كل ثانية  

    function startEmojiEffect(text) {  
        if (!effectsEnabled) return; // إيقاف التأثيرات إذا كانت معطلة  

        let emoji = '';  

        if (text.includes('حصلت على إعجاب')) emoji = '❤️';  
        else if (text.includes('💋 أأأمـمـمـمـمـمـوأأاااحـح 💋')) emoji = '💋';  
        else if (text.includes('❤️ أنـا أحٍـبَڪ')) emoji = '😍';  
        else if (text.includes('💦 اااااخخخختتتتتتفففففففففوووووووووووووووووووووو')) emoji = '💦';  
        else if (text.includes('ههههههههههههههههههههههههههههههههههههههههههههههههه')) emoji = '🤣';  

        for (let i = 0; i < 25; i++) {  
            setTimeout(() => {  
                if (!effectsEnabled) return; // إذا أُوقفت التأثيرات أثناء التشغيل، لا يتم إنشاء عناصر جديدة  

                let confetti = $("<div class='confetti'>" + emoji + "</div>");  
                $("body").append(confetti);  

                let leftPosition = Math.random() * 100 + 'vw';  
                let animationDuration = Math.random() * 3 + 2 + 's';  

                confetti.css({  
                    'left': leftPosition,  
                    'animation-duration': animationDuration,  
                    'animation-timing-function': 'linear',  
                    'animation-name': 'fall',  
                    'font-size': '80px',  
                    'color': 'red',  
                    'position': 'fixed',  
                    'top': '0',  
                    'z-index': '9999',  
                    'transform': 'scale(3)'  
                });  

                setTimeout(() => {  
                    confetti.remove();  
                }, parseFloat(animationDuration) * 1000);  
            }, i * 100);  
        }  

        // إيقاف التأثير بعد ثانيتين  
        setTimeout(() => {  
            $(".confetti").remove(); // إزالة جميع الإيموجيات  
        }, 2000);  
    }  

    // إضافة تأثير CSS للأشياء المتساقطة  
    $('<style>')  
        .prop('type', 'text/css')  
        .html(`  
            @keyframes fall {  
                0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }  
                100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }  
            }  
            .confetti {  
                font-size: 80px;  
                color: red;  
                position: fixed;  
                top: 0;  
                z-index: 9999;  
                animation: fall linear infinite;  
            }  
        `)  
        .appendTo('head');  
});
