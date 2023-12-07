$(document).ready(function(){

  //비밀번호 체크란
  $("#userPwCk").on("keyup", function() {
    if ($("#userPw").val().trim().length == 0) {
      $(this).val("");
      alert("비밀번호를 입력해주세요.");
      $("#userPw").focus();
    }
  
    if ($(this).val().trim().length == 0) {
      $("#pwCk").text("");
        return;
    }
  
    if ($("#userPw").val() == $(this).val())
      $("#pwCk").text("비밀번호 일치")
        .css("color", "green");
  
    else
      $("#pwCk").text("비밀번호가 불일치")
        .css("color", "red");
  });
  //이름입력
  $("#user_first_name").on("input", function() {
    if ($(this).val().trim().length == 0) {
      $("#nameCk").text("");
      return;
    }
  
    const regExp = /^[가-힣]{2,5}$/;
      
    if (regExp.test($(this).val())) {
      $("#nameCk").text("정상입력");
      
    } else {
      $("#nameCk").text("한글만 입력하세요.");
    }
  });
  
  function validate() {
  
    const regExp
    = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
  
    if (!regExp.test($("#userPhone").val())) {
      alert("전화번호의 형식이 올바르지 않습니다");
      return false;
    }
  }
})