$(document).ready(function(){
  let getId = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
  let getName = RegExp(/^[가-힣]+$/);
  let getPw = RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/);
  let getNum = RegExp(/^[0][0-9]{1,2}[0-9]{3,4}[0-9]{4}/);
  // let getDate = RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2})/);
  let getBirth = RegExp(/^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/);


  //이름 확인 - 성
  $("#user_first_name").on("blur", function() {
    if ($(this).val().trim().length == 0) {
      this.style = "initial";
      return;
    }
    if(getName.test($(this).val())){
      $(this).css("border", "3px solid rgb(0 102 204)").css("border-radius","5px");
      $('.err_msg_name').css("opacity",'0');
      $('.box1_name_input').css("margin-bottom",'0')
    }
    else {
      $(this).css("border" , "1px solid red").css("color", "black")
      .css("border-radius","5px")
      $('.box1_name_input').css("margin-bottom",'30px')
      $('.err_msg_name').css("opacity",'1')
      user_first_name.focus();
    }
  });//끝

  //이름 확인 - 이름
  $("#user_second_name").on("blur", function() {
    if ($(this).val().trim().length == 0) {
      this.style = "initial";
      return;
    }
    if(getName.test($(this).val())){
      $(this).css("border", "3px solid rgb(0 102 204)").css("border-radius","5px");
      $('.err_msg_name').css("opacity",'0');
      $('.box1_name_input').css("margin-bottom",'0')
    }
    else {
      $(this).css("border" , "1px solid red").css("color", "black")
      .css("border-radius","5px")
      $('.box1_name_input').css("margin-bottom",'30px')
      $('.err_msg_name').css("opacity",'1').css("transform" , "translateX(215%)")
      user_second_name.focus();
    }
  });//끝

  //비밃번호 유효성
  $("#user_pw_make").on("blur", function() {
    if ($(this).val().trim().length == 0) {
      this.style = "initial";
      return;
    }
    if(getPw.test($(this).val())){
      $(this).css("border", "3px solid rgb(0 102 204)").css("border-radius","5px");
      $('.err_msg_pw').css("opacity",'0');
      $('#user_pw_make').css("margin-bottom",'0')
    }//여기서부터 다시ㄱㄱㄱㄱㄱㄱㄱ
    else {
      $(this).css("border" , "1px solid red").css("color", "black")
      .css("border-radius","5px");
      $('#user_pw_make').css("margin-bottom",'20px')
      $('.err_msg_pw').css("opacity",'1');
      user_pw_make.focus();
    }
      //'비밀번호는 최소 8자에서 16자까지, 영문자, 숫자 및 특수 문자를 포함해야 합니다.'
  });
  //비번 비교
  $("#user_pw_chk").on("blur", function() {
    if ($(this).val().trim().length == 0) {
      this.style = "initial";
      return;
    }
    if(getPw.test($(this).val())){
      $(this).css("border", "3px solid rgb(0 102 204)").css("border-radius","5px");
      $('.user_pw_chk').css("opacity",'0');
      $('#user_pw_make').css("margin-bottom",'0')
    }
    else {
      $(this).css("border" , "1px solid red").css("color", "black")
      .css("border-radius","5px");
      $('#user_pw_chk').css("margin-bottom",'20px')
      $('.err_msg_pw').css("opacity",'1').css("transform" , "translateY(500%)");
      user_pw_chk.focus();
    }
  });//끝
  //아이디 확인
  $("#user_id_make").on("blur", function() {
    if ($(this).val().trim().length == 0) {
      this.style = "initial";
      return;
    }
    if(getId.test($(this).val())){ //T
      $(this).css("border", "3px solid rgb(0 102 204)").css("border-radius","5px");
    }
    else {  //F
      $(this).css("border" , "1px solid red").css("color", "black")
      .css("border-radius","5px");
      $('#user_id_make').css("margin-bottom" , '30px');
      $('.err_msg_id').css("opacity", "1")
      user_id_make.focus();
    }
  });
  //전화번호 유효성 검사
  $("#box3_num").on("blur", function() {
    if ($(this).val().trim().length == 0) {
      this.style = "initial";
      return;
    }

    //console.log(getNum.test($(this).val())) 확인용

    if(getNum.test($(this).val())){
      $(this).css("border", "3px solid rgb(0 102 204)").css("border-radius","5px");;
    }
    else {
      // $(this).css("border" , "1px zsolid red").css("color", "black")
      // .css("border-radius","5px");
      $('.err_msg_num').css("opacity", "1")

      $(this).css({
        border: "1px solid red",
        color: "black",
        borderRadius:"5px"
      })

      box3_num.focus()
    }
  });
  $("#user_birth").on("blur", function() {
    if ($(this).val().trim().length == 0) {
      this.style = "initial";
      return;
    }
    if(getBirth.test($(this).val())){
      $(this).css("border", "3px solid rgb(0 102 204)").css("border-radius","5px");;
    }
    else {
      $(this).css("border" , "1px solid red").css("color", "black")
      .css("border-radius","5px");
      $('.err_msg_date').css("opacity", "1")
      user_birth.focus();
    }
  });

  let el = document.getElementById('box3_num');
  let el_2 = document.getElementById('user_birth');

  el.addEventListener('keyup', function(){
      let kc = event.keyCode;
      if((kc < 48 || 57 < kc) && (96 > kc || kc > 105)) {
          el.value = el.value.slice(0, -1);   
      }
  });

  el_2.addEventListener('keyup', function(){
    let kc = event.keyCode;
    if((kc < 48 || 57 < kc) && (96 > kc || kc > 105)) {
       console.log( el_2.value = el_2.value.slice(0, -1));
      console.log(kc)
    }
  });
})
