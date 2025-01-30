$(document).ready(function () {  
    let isEffectRunning = false; // متغير للتحكم في تشغيل التأثير مرة واحدة فقط  
    
    // تابع لمراقبة العناصر المضافة في الصفحة  
    const checkForNotifications = setInterval(function () {  
        if (isEffectRunning) return; // إذا كان التأثير يعمل، لا تنفذ الكود مرة أخرى  

        $('div.break.fl').each(function () {  
            const text = $(this).text();  
            
            if (  
                text.includes('حصلت على إعجاب') ||  
                text.includes('💋 أأأمـمـمـمـمـمـوأأااااحـح 💋') ||  
                text.includes('❤️ أنـا أحٍـبَڪ') ||  
                text.includes('💦 اااااخخخختتتتتتفففففففففوووووووووووووووووووووو') ||  
                text.includes('ههههههههههههههههههههههههههههههههههههههههههههههههه')  
            ) {  
                isEffectRunning = true; // ضبط العلم لتجنب التشغيل المتكرر  
                startEmojiEffect(text);  
            }  
        });  
    }, 1000); // التحقق كل ثانية  

    function startEmojiEffect(text) {  
        let emoji = '';  

        if (text.includes('حصلت على إعجاب')) emoji = '❤️';  
        else if (text.includes('💋 أأأمـمـمـمـمـمـوأأااااحـح 💋')) emoji = '💋';  
        else if (text.includes('❤️ أنـا أحٍـبَڪ')) emoji = '😍';  
        else if (text.includes('💦 اااااخخخختتتتتتفففففففففوووووووووووووووووووووو')) emoji = '💦';  
        else if (text.includes('ههههههههههههههههههههههههههههههههههههههههههههههههه')) emoji = '🤣';  

        for (let i = 0; i < 50; i++) {  
            setTimeout(() => {  
                let confetti = $("<div class='confetti'>" + emoji + "</div>");  
                $("body").append(confetti);  

                let leftPosition = Math.random() * 100 + 'vw';  
                let animationDuration = Math.random() * 3 + 2 + 's';  

                confetti.css({  
                    'left': leftPosition,  
                    'animation-duration': animationDuration,  
                    'animation-timing-function': 'linear',  
                    'animation-name': 'fall',  
                    'font-size': '24px',  
                    'color': 'red',  
                    'position': 'fixed',  
                    'top': '0',  
                    'z-index': '9999'  
                });  

                setTimeout(() => {  
                    confetti.remove();  
                }, parseFloat(animationDuration) * 1000);  
            }, i * 100);  
        }  

        // إيقاف التأثير بعد ثانيتين  
        setTimeout(() => {  
            $(".confetti").remove(); // إزالة جميع الإيموجيات  
            isEffectRunning = false; // إعادة تعيين المتغير للسماح بإشعار جديد  
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
                font-size: 24px;  
                color: red;  
                position: fixed;  
                top: 0;  
                z-index: 9999;  
                animation: fall linear infinite;  
            }  
        `)  
        .appendTo('head');  
});
