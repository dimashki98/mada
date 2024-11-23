$(document).ready(function () {
  // إنشاء حاوية الشريط الإخباري
  if (!$("#announcements-container").length) {
    $("body").append(`
      <div id="announcements-container" style="
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #f9f9f9;
        border-top: 2px solid #007bff;
        z-index: 1000;
        display: none;
        padding: 5px 10px;
      ">
        <marquee id="announcements-marquee" behavior="scroll" direction="left" style="font-size: 14px; color: black;">
          <!-- الإعلانات سيتم إضافتها هنا -->
        </marquee>
        <button id="close-announcements" style="
          position: absolute;
          top: 5px;
          right: 10px;
          background-color: #dc3545;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 5px 10px;
          cursor: pointer;
        ">إغلاق</button>
      </div>
    `);
  }

  // دالة لتحويل أي إعلان موجود أو جديد إلى شريط متحرك
  function applyToAnnouncements() {
    $(".u-msg.break").each(function () {
      // التحقق إذا كان الإعلان قد تمت إضافته مسبقًا للشريط
      if (!$(this).data("added-to-marquee")) {
        // وضع النص في الشريط المتحرك
        const announcementHTML = $(this).prop("outerHTML");
        $("#announcements-marquee").append(`<span style="margin-right: 20px;">${announcementHTML}</span>`);
        $(this).data("added-to-marquee", true); // منع التكرار
      }
    });

    // إظهار الشريط إذا كان يحتوي على محتوى
    if ($("#announcements-marquee").children().length > 0) {
      $("#announcements-container").slideDown();
    }
  }

  // زر الإغلاق
  $("#close-announcements").click(function () {
    $("#announcements-container").slideUp();
  });

  // تطبيق الإعلان على العناصر الموجودة عند التحميل
  applyToAnnouncements();

  // تحقق دوري من وجود إعلانات جديدة
  setInterval(applyToAnnouncements, 3000); // تحقق كل 3 ثوانٍ
});
