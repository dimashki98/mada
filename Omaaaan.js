$(document).ready(function() {
  // إزالة أي بنرات قديمة
  $('img[src="https://madahost.online/sico/1731379152592.gif"], img[src="https://madahost.online/sico/1731848870405.jpg"]').remove();

  // إنشاء البنر الأول والثاني
  const banner1 = $(`<img src="https://madahost.online/sico/1731379152592.gif" 
    style="width:100%; height:170px; margin-top:0px; border-radius:0px 10px 0px 10px; box-shadow: inset 0 0 0 rgba(0,0,0,.08), 0 0 5px #0020ab; border: 1px solid #fff;">`);

  const banner2 = $(`<img src="https://madahost.online/sico/1731848870405.jpg" 
    style="width:100%; height:170px; margin-top:0px; border-radius:0px 10px 0px 10px; box-shadow: inset 0 0 0 rgba(0,0,0,.08), 0 0 5px #0020ab; border: 1px solid #fff;">`);

  // إضافة البنر الأول
  $('.nav-tabs').before(banner1);

  // إخفاء البنر الثاني افتراضيًا
  banner2.hide();
  $('.nav-tabs').before(banner2);

  // وظيفة التبديل
  setInterval(function() {
    if (banner1.is(':visible')) {
      banner1.fadeOut(500, function() {
        banner2.fadeIn(500);
      });
    } else {
      banner2.fadeOut(500, function() {
        banner1.fadeIn(500);
      });
    }
  }, 3000); // التبديل كل 3 ثوانٍ
});
