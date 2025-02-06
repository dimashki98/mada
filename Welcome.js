$("div#tlogins button.btn.btn-primary").click(function(){
    var myVar = setInterval(function(){ 
        var usmsgw = $(".pmsgc").length;
        if(usmsgw > 0){
            $(`
            <div class="uzr fl corner borderg mm" style="border-radius: 8px; margin-bottom: 5px; width: 99.5%; padding: 10px; background: linear-gradient(135deg, #fff7e6, #ffe6f2); border: 2px solid #ff69b4; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); transition: transform 0.2s, box-shadow 0.3s;">
              <img src="https://i.imgur.com/W5bDYGn.png" class="fl fitimg hand u-pic" style="width: 50px; height: 50px; border-radius: 50%; border: 2px solid #ff69b4; margin: 5px;">
              <div class="uzr fl" style="width: 80%; padding: 5px;">
                <div style="display: flex; align-items: center; padding: 5px;">
                  <img class="fl u-ico" src="sico/1730260909682.gif">
                  <span class="corner nosel u-topic dots fl hand" style="font-size: 16px; font-weight: bold; color: #ff4081; margin-left: 10px;">✨ أهلاً وسهلاً بك في شات مدى ✨</span>
                </div>
                <div class="u-msg break fl" style="font-size: 14px; color: #4a148c; margin-top: 5px; padding: 5px; background: rgba(255, 255, 255, 0.8); border-radius: 5px; text-align: center;">
                  نورت / نورتي، <strong style="color: red;">`+ getuser(myid).topic + `</strong>! 🎉  
                  نقدّر تواجدك معنا ونتمنى لك وقتًا ممتعًا 💖  
                </div>
              </div>
            </div>
            `).appendTo('div#d2');
            clearInterval(myVar);
        } else {
            console.log(usmsgw);
        }
    }, 2000);
});
