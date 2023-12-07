$(document).ready(function(){
    $('.id_box').click(function(){
        //클릭하면 id에 테두리
        $('.id_box').css({
            border:'4px solid rgb(0, 102, 204)',
            transition:'all 0.2s',
        });
        //id에서 엔터하면 원상복귀 하는거
        $(".id_box").on("keyup",function(key){
            if(key.keyCode==13){
                $('.id_box').css({
                    border:'1px solid lightgray',
                    transition:'all 0.2s',
                });
            }
        })
        // id에서 엔터 이벤트 나오면 나오는 이벤트
        $(".user_id").on("keyup",function(key){
            
            if(key.keyCode==13) {
                $('.user_pw').focus();//input창 포커스 이동
                //아이디 입력칸
                $('.id_box').css('border-radius','16px 16px 0 0');
                $('.id_box').css({
                    border:'1px solid lightgray',
                    transition:'all 0.5s'
                });
                //엔터 누르면 사라짐
                $('.id_enter_btn').css({opacity:0,transition:'all 0.4s'});
                
                //pw입력칸
                $('.password_box').css({
                    opacity: 1,
                    transform: "translateY(0%)",
                    transition: 'all 0.3',
                })
                
                //id input 테두리 사라짐
                setTimeout(function(){
                    $('.password_box').css({
                        border:'4px solid rgb(0, 102, 204)', 
                    })
                }, 300)//0.3초
            }
            //pw에서 엔터 했을시
            $(".user_pw").on("keyup",function(key){
                if(key.keyCode==13) {
                    $('.if_login').css({
                        opacity: 1
                    })
                }
            })
        });
        
    });
    // 비밀번호 형식 작성해야함

    
})
