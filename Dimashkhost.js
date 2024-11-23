$(document).ready(function () {
    // تحقق إذا كانت الرسالة قد ظهرت سابقًا
    if (!localStorage.getItem("visited")) {
      // عرض الرسالة
      $("body").append(`
        <div id="welcome-modal" style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        ">
          <div style="
            background: white;
            padding: 20px;
            text-align: center;
            border-radius: 10px;
            max-width: 300px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          ">
            <p>هل تريد الاستمرار في الموقع أو الذهاب إلى موقع الاستضافة؟</p>
            <button id="continue-site" style="
              margin: 5px;
              padding: 10px 20px;
              background: #28a745;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            ">الاستمرار</button>
            <a href="https://dimashki98.github.io/madahost/" style="
              margin: 5px;
              padding: 10px 20px;
              background: #007bff;
              color: white;
              border: none;
              border-radius: 5px;
              text-decoration: none;
              display: inline-block;
            ">الذهاب</a>
          </div>
        </div>
      `);

      // عند الضغط على زر "الاستمرار"
      $("#continue-site").click(function () {
        localStorage.setItem("visited", "true");
        $("#welcome-modal").fadeOut();
      });
    }
  });

