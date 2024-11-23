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
          max-width: 400px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        ">
          <p>أهلا وسهلا بكم في استضافة دمشق هوست الموقع الرسمي لصاحبها 
            <span style="color: red; font-weight: bold;">محمد الدمشقي</span>.
          </p>
          <p>إذا كنت تود البقاء في الشات اضغط على "استمرار"، وإذا أردت الذهاب لموقع الاستضافة التعريفي اضغط على "الذهاب للموقع".</p>
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
          ">الذهاب للموقع</a>
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
