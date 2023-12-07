const ITEM_LIST = [
    // mac
    [
        {item_no: 1, src: 'mac15.jpeg', title:'MacBook Air 15 - 미드나이트 맞춤 구성하기',o_option1:'Apple M2 칩(8코어 CPU, 10코어 GPU, 16코어 Neural Engine)',o_option2:'8GB 통합 메모리',o_option3:'512GB SSD 저장 장치',o_option4:'True Tone을 갖춘 38.9cm Liquid Retina 디스플레이³',o_option5:'1080p FaceTime HD 카메라',o_option6:'MagSafe 3 충전 포트',o_option7:'Thunderbolt/USB 4 포트 2개',o_option8:'35W 듀얼 USB-C 포트 전원 어댑터',o_option9:'백라이트 Magic Keyboard(Touch ID 탑재) - 한국어',o_option10:'',o_option11:''}, 
        {item_no: 2, src: 'macbookpro.jpeg',title:'자신만의 MacBook Pro 16 구성하기 - 스페이스 그레이',o_option1:'Apple M2 Pro(12코어 CPU, 19코어 GPU, 16코어 Neural Engine)',o_option2:'16GB 통합 메모리',o_option3:'512GB SSD 저장 장치',o_option4:'41.0cm Liquid Retina XDR 디스플레이²',o_option5:'Thunderbolt 4 포트 3개, HDMI 포트, SDXC 카드 슬롯, 헤드폰 잭, MagSafe 3 포트',o_option6:'140W USB-C 전원 어댑터',o_option7:'백라이트 Magic Keyboard(Touch ID 탑재) - 한국어',o_option8:'',o_option9:'',o_option10:'',o_option11:''}, 
        {item_no: 3, src: 'iMac.jpeg',title:'Apple M1 칩 장착 블루 24형 iMac 맞춤 구성하기.',o_option1:'8코어 CPU(성능 코어 4개 및 효율 코어 4개), 8코어 GPU, 16코어 Neural Engine을 탑재한 Apple M1 칩',o_option2:'8GB 통합 메모리',o_option3:'512GB SSD 저장 장치',o_option4:'Thunderbolt/USB 4 포트 2개',o_option5:'USB 3 포트 2개',o_option6:'Gigabit Ethernet',o_option7:'Magic Mouse',o_option8:'Magic Keyboard(Touch ID 탑재) - 한국어',o_option9:'',o_option10:'',o_option11:''}, 
        {item_no: 4, src: 'macmini.jpeg',title:'Mac mini 맞춤 구성하기',o_option1:'Apple M2 칩(8코어 CPU, 10코어 GPU, 16코어 Neural Engine)',o_option2:'8GB 통합 메모리',o_option3:'256GB SSD 저장 장치',o_option4:'Gigabit Ethernet',o_option5:'Thunderbolt 4 포트 2개, HDMI 포트, USB-A 포트 2개, 헤드폰 잭',o_option6:'',o_option7:'',o_option8:'',o_option9:'',}, 
        {item_no: 5, src: 'macstudio.jpeg',title:'Mac Studio 맞춤 구성하기',o_option1:'Apple M2 Max(12코어 CPU, 30코어 GPU, 16코어 Neural Engine)',o_option2:'32GB 통합 메모리',o_option3:'512GB SSD 저장 장치',o_option4:'전면: USB-C 포트 2개, SDXC 카드 슬롯 1개',o_option5:'후면: Thunderbolt 4 포트 4개, USB-A 포트 2개, HDMI 포트 1개, 10Gb 이더넷 포트 1개, 3.5mm 헤드폰 잭 1개',o_option6:'',o_option7:'',o_option8:'',o_option9:'',o_option10:'',o_option11:''}, 
        {item_no: 6, src: 'macpro.jpeg',title:'Mac Pro 맞춤 구성하기.',o_option1:'Apple M2 Ultra(24코어 CPU, 60코어 GPU, 32코어 Neural Engine)',o_option2:'64GB 통합 메모리',o_option3:'1TB SSD 저장 장치',o_option4:'발판 달린 스테인리스 스틸 프레임',o_option5:'Magic Mouse',o_option6:'Touch ID 및 숫자 키패드 탑재형 Magic Keyboard - 한국어',o_option7:'',o_option8:'',o_option9:'',}, 
    ],
    // ipad
    [
        {item_no: 1, src: 'ipadair.jpeg', title:'iPad Air M1 - 스페이스 그레이 맞춤 구성하기',o_option1:'Apple M1 칩(8코어 CPU, 8코어 GPU, 16코어 Neural Engine)',o_option2:'Liquid Retina 디스플레이',o_option3:'27.5cm(대각선) LED 백라이트 Multi‑Touch 디스플레이(IPS 기술)',o_option4:'2360 x 1640 해상도(264ppi)',o_option5:'와이드 컬러 True Tone 디스플레이',o_option6:'반사 방지, 지문 및 유분 방지 코팅',o_option7:'1.8% 반사율',o_option8:'500 니트 밝기',o_option9:'Apple Pencil(2세대) 지원'},
        {item_no: 2, src: 'ipadpro.jpeg', title:'iPad Pro M2 - 스페이스 그레이 맞춤 구성하기',o_option1:'Apple M2 칩(8코어 CPU, 10코어 GPU, 16코어 Neural Engine)',o_option2:'Liquid Retina XDR 디스플레이',o_option3:'29.5cm(대각선) LED 백라이트 Multi‑Touch 디스플레이(IPS 기술)',o_option4:'2732 x 2048 픽셀 해상도(264ppi)',o_option5:'와이드 컬러 True Tone 디스플레이(P3)',o_option6:'반사 방지, 지문 및 유분 방지 코팅',o_option7:'1.8% 반사율',o_option8:'SDR 밝기: 600 니트 <br>전체 최대XDR 밝기: 1000 니트 <br>전체 화면 최대,1600 니트 부분 최대(HDR 콘텐츠에만 적용)',o_option9:'1,000,000:1 명암비',o_option10:'',o_option11:''}, 
        {item_no: 3, src: 'ipad10th.jpeg', title: 'iPad 10th', o_option1:'Liquid Retina 디스플레이',o_option2:'27.5cm(대각선) LED 백라이트<br>Multi‑Touch 디스플레이(IPS 기술)',o_option3:'2360 x 1640 해상도(264ppi)',o_option4:'True Tone 디스플레이',o_option5:'500 니트 밝기',o_option6:'지문 및 유분 방지 코팅',o_option7:'Apple Pencil(1세대) 지원',o_option8:'',o_option9:'',o_option10:'',o_option11:''},
        {item_no: 4, src: 'ipadmini.jpeg', title: 'iPad mini', o_option1:'Liquid Retina 디스플레이',o_option2:'21.0cm(대각선) LED 백라이트 Multi-Touch 디스플레이(IPS 기술)',o_option3:'2266 x 1488 해상도(326ppi)',o_option4:'와이드 컬러 디스플레이(P3)',o_option5:'True Tone 디스플레이',o_option6:'지문 및 유분 방지 코팅',o_option7:'전면 라미네이팅 처리된 디스플레이',o_option8:'반사 방지 코팅',o_option9:'1.8% 반사율',o_option10:'500 니트 밝기',o_option11:'Apple Pencil(2세대) 지원'}
    ],
    //iphone
    [
        {item_no: 1, src: 'i15pro.jpeg',title:'iPhone 15 PRO 구입하기',o_option1:'Super Retina XDR 디스플레이',o_option2:'ProMotion 기술 & 상시표시형 디스플레이',o_option3:'티타늄 및 표면 질감을 살린 무광 글래스 소재 & 후면동작 버튼',o_option4:'Dynamic Island - iPhone을 다루는 신박한 방법',o_option5:'A17 Pro 칩',o_option6:'프로급 카메라 시스템',o_option7:'최대 23시간 동영상 재생4',o_option8:'USB-C 최대 20배 빠른 전송 속도를 갖춘 USB 3 지원',o_option9:'항공우주 등급 티타늄',o_option10:'',o_option11:'',}, 
        {item_no: 2, src: 'i15.jpeg',title:'iPhone 15 구입하기',o_option1:'Super Retina XDR 디스플레이',o_option2:'ProMotion 기술 & 상시표시형 디스플레이',o_option3:'티타늄 및 표면 질감을 살린 무광 글래스 소재 & 후면동작 버튼',o_option4:'Dynamic Island - iPhone을 다루는 신박한 방법',o_option5:'A16 칩',o_option6:'첨단 듀얼 카메라 시스템',o_option7:'최대 20시간 동영상 재생4',o_option8:'USB-CUSB 2 지원',o_option9:'항공우주 등급 알루미늄',o_option10:'',o_option11:'',}, 
        {item_no: 3, src: 'i14.jpeg',title:'iPhone 14 구입하기',o_option1:'Super Retina XDR 디스플레이',o_option2:'A15 Bionic 칩',o_option3:'듀얼 카메라 시스템 12MP 메인 울트라 와이드',o_option4:'최대 20시간 동영상 재생',o_option5:'Lightning USB 2 지원',o_option6:'Face ID',o_option7:'그 어떤 스마트폰 글래스보다 견고한 Ceramic Shield 소재 전면',o_option8:'항공우주 등급 알루미늄',o_option9:'',o_option10:'',o_option11:'',}, 
        {item_no: 4, src: 'i13.jpeg',title:'iPhone 13 구입하기',o_option1:'Super Retina XDR 디스플레이',o_option2:'A15 Bionic 칩',o_option3:'듀얼 카메라 시스템 12MP 메인 울트라 와이드',o_option4:'최대 19시간 동영상 재생',o_option5:'Lightning USB 2 지원',o_option6:'Face ID',o_option7:'그 어떤 스마트폰 글래스보다 견고한 Ceramic Shield 소재 전면',o_option8:'항공우주 등급 알루미늄',o_option9:'',o_option10:'',o_option11:'',}, 
        {item_no: 5, src: 'ise.jpeg',title:'iPhone SE 구입하기',o_option1:'Super Retina XDR 디스플레이',o_option2:'A15 Bionic 칩',o_option3:'싱글 카메라 시스템 12MP 메인 ',o_option4:'최대 15시간 동영상 재생', o_option5:'Lightning USB 2 지원',o_option6:'Touch ID',o_option7:'글래스 소재 전면 및 후면',o_option8:'항공우주 등급 알루미늄',o_option9:'',o_option10:'',o_option11:''}, 
    ],
    //store_mac
    [
        {item_no:1, big_title1:'Mac Book Air 15',small_title1:'크게 펼치고, 얇게 접다.',price1:'₩1,890,000 부터',
                    big_title2:'Mac Studio',small_title2:'막강한 성능의 M2 Max 또는 M2 Ultra칩 탑재.',price2:'₩2,990,000 부터',
                    big_title3:'Mac Pro',small_title3:'Apple Silicon으로 재탄생하다.',price3:'₩10,490,000 부터',

                    mac_list1:'Mac Book Air 13',mac_list2:'MacBook Air 13 및 15',mac_list3:'MacBook Pro 13',mac_list4:'MacBook Pro 14 및 16',
                    mac_chip1:'M1칩',mac_chip2:'M2칩',mac_chip3:'M2칩',mac_chip4:'M2칩 Pro 또는 M2칩 Max',
                    mac_txt1:'이동 중에도 작업하기 좋은<br>가장 부담 없는 Mac 노트북.',mac_txt2:'어디서든 일하고, 즐기고, 창작할 수 있도록<br>해주는 놀랍도록 얇고 빠른 노트북.',mac_txt3:'비범한 역량을 갖춘 가장 휴대하기 좋은<br>프로용 Mac 노트북.',mac_txt4:'막대한 워크플로도 너끈히 처리하는<br>가장 앞선 Mac 노트북.',
                    mac_price1:'₩1,390,000부터',mac_price2:'₩1,590,000부터',mac_price3:'₩1,790,000부터',mac_price4:'₩2,790,000부터',
                    mac_size1:'33.7cm',mac_size2:'34.5cm 또는 38.9cm',mac_size3:'33.7cm',mac_size4:'35.9cm 또는 41.0cm',
                    mac_display1:'Retina 디스플레이',mac_display2:'Liquid Retina 디스플레이',mac_display3:'Retina 디스플레이',mac_display4:'Liquid Retina XDR 디스플레이',
                    mac_chip_src1:'store_mac/m1chip.png',mac_chip_src2:'store_mac/m2chip.png',mac_chip_src3:'store_mac/m2chip.png',mac_chip_src4:'store_mac/m2promax.png',
                    memory_src:'store_mac/memory.png',total_mamory1:'최대 16GB 통합 메모리',total_mamory2:'최대 24GB 통합 메모리',total_mamory3:'최대 24GB 통합 메모리',total_mamory4:'최대 96GB 통합 메모리',
                    battery_src:'store_mac/battery.png',battery_time1:'최대 18시간의 배터리 사용시간',battery_time2:'최대 18시간의 배터리 사용시간',battery_time3:'최대 20시간의 배터리 사용시간',battery_time4:'최대 22시간의 배터리 사용시간',
                    camera_src:'store_mac/cameta.png',facetime1:'720p',facetime2:'1080p',facetime3:'720p',facetime4:'1080p',
                    sound_src:'store_mac/sound.png',touchid1:'store_mac/touochid.png',touchid2:'store_mac/touchid2.png',
                },

    ],
    //store_ipad
    [
        {item_no:1, ipad_src1:'store_ipad/choose_1.png',ipad_src2:'store_ipad/choose_2.png',ipad_src3:'choose_3.png',ipad_src4:'choose_4.png',
                    ipad_list1:'iPad Pro',ipad_list2:'iPad Air',ipad_list3:'iPad',ipad_list4:'iPad Mini',
                    ipad_txt1:'최첨단 기술이 구현하는 궁극의 iPad 경험.',ipad_txt2:'얇고 가벼운 디자인. 결코 가볍지 않은 성능',ipad_txt3:'다양한 일상 작업에 맞는 완전히 새롭고, 컬러풀한 iPad.',ipad_txt4:'한 손에 쏙 들어오는 손색없는 iPad 경험',
                    ipad_price1:'₩1,249,000부터',ipad_price2:'₩929,000부터',ipad_price3:'₩679,000부터',ipad_price4:'₩769,000부터',
                    ipad_size1:'32.8cm 또는 27.9cm',ipad_size2:'27.5cm',ipad_size3:'27.5cm',ipad_size4:'21.0cm',
                    ipad_display1:'Liquid Retina XDR 디스플레이 또는 Liquid Retina 디스플레이',ipad_display2:'Liquid Retina 디스플레이',ipad_display3:'Liquid Retina 디스플레이',ipad_display4:'Liquid Retina 디스플레이',
                    ipad_chip_src1:'store_ipad/m2chip.jpeg',ipad_chip_src2:'store_ipad/m1chip.jpeg',ipad_chip_src3:'store_ipad/a14chip.jpeg',ipad_chip_src4:'store_ipad/a15chip.jpeg',

                    memory_src:'store_mac/memory.png',total_mamory1:'최대 16GB 통합 메모리',total_mamory2:'최대 24GB 통합 메모리',total_mamory3:'최대 24GB 통합 메모리',total_mamory4:'최대 96GB 통합 메모리',
                    battery_src:'store_mac/battery.png',battery_time1:'최대 18시간의 배터리 사용시간',battery_time2:'최대 18시간의 배터리 사용시간',battery_time3:'최대 20시간의 배터리 사용시간',battery_time4:'최대 22시간의 배터리 사용시간',
                    camera_src:'store_mac/cameta.png',facetime1:'720p',facetime2:'1080p',facetime3:'720p',facetime4:'1080p',
                    sound_src:'store_mac/sound.png',touchid1:'store_mac/touochid.png',touchid2:'store_mac/touchid2.png',
        }
    ],
    [],
    []
]

// url 에서 현재 넘어온 cate_no 로 페이지 제목이랑 이미지 띄우기            
//주소 하나하나 잘라서 비교하는거

const menu_array = ['mac','ipad','iphone','store_mac','store_ipad','airpods','watch'];
const title_array = ['MAC','IPAD','IPHONE','STORE_MAC','STORE_IPAD','ARIPODS','WATCH'];
const img_addr = "/img"; 
 
function get_url_info(key) {
    let url =location.href; // 263.theComma(item).html?cate_no=0&item_no=8#with_item
    url = url.split("?")[1] // cate_no=0&item_no=8#with_item
    
    if(url.length > 1) {
        url = url.split("&") // [cateNo=0  ,  item_no=8#with_item]
        for(let i=0; i<url.length; i++) {
            let tmp_url = url[i].split("="); // 0-> cateNo=0 => [cateNo  ,  0#with_item]
                                            // 1-> item_no=8#with_item => [itemNo  ,  8#with_item]

            if(tmp_url[0] == key) {
                return tmp_url[1].split("#")[0]; // [0  ,  with_item]
            }
        }
    }
    else {
        console.log("없어")
        alert("잘못된 접근입니다.");
        location.replace('261.theComma(index).html')
    }
} 


function load_items(cate_no, qty) {  
    let item_length = $(`${menu_array[cate_no]} .item_container > li`).length;

    
    /*내가 계산한(24번꺼) 개수가 db에 있는거보다 크면 그냥 db의 끝방까지만 불러오고
    작으면 내가 계산한 번째까지 불러와라*/
    // let qty_limit = item_length+qty;
    // if(item_length+qty > ITEM_LIST[cate_no].length) { 
    //     qty_limit = ITEM_LIST[cate_no].length 
    // } 

    // let qty_limit = (item_length+qty)>ITEM_LIST[cate_no].length?ITEM_LIST[cate_no].length:(item_length+qty)
    // for(let i=item_length; i<qty_limit; i++) {
    //     let item = ITEM_LIST[cate_no][i];
 
    //     // new 섹션에만 이미지가 두장 들어가기 때문에 for_new에 해당 이미디 넣어놓고 삼항연산자로 cato_no==1 일때만 넣기
    //     let for_new = '';
    //     if(cate_no == 1) {
    //         for_new = `<img src="./img/items/${menu_array[cate_no]}/${ITEM_LIST[cate_no][i].covered_src}" alt=""> `
    //     }
            

    //     let list = `<li class="item ${menu_array[cate_no]}_item_li item_init">
    //                     <a href="263.theComma(item).html?cate_no=${cate_no}&item_no=${ITEM_LIST[cate_no][i].item_no}">
    //                         <div class="item_img">
    //                             <img src="./img/items/${menu_array[cate_no]}/${ITEM_LIST[cate_no][i].src}" alt=""> 
    //                             ${cate_no==1?for_new:'' /* 여기가 for_new 쓰는곳 */}
    //                         </div>
    //                         <div class="item_info">
    //                             <div class="item_desc_title">${ITEM_LIST[cate_no][i].title}</div>
    //                             <div class="origin_price"><del>${ITEM_LIST[cate_no][i].o_price.toLocaleString("ko")}원</del></div>
    //                             <div class="sale_price">${comma(ITEM_LIST[cate_no][i].s_price)}원</div>
    //                             <div class="item_desc">${ITEM_LIST[cate_no][i].desc}</div>
    //                         </div>
    //                     </a>
    //                 </li>`;

    //     $(`#${menu_array[cate_no]} .item_container`).append(list)
    // }


}

function comma(num){
    /*  
        / - 정규식의 맨 앞과 끝에 넣음
        \B - 시작과 끝을 말함. EX) 1234 에서 1의 앞 4의 뒤를 의미
             우리는 1234
        (\d{3}) - 숫자 3자리
        +(?!\d) - +는 앞의 표현식이 1회 이상 연속으로 반복
                  x(?!y) - x 뒤에 y가 없는 경우에만 x에 일치
                  여기서 (?!\d) 는 뒤에 더이상 숫자가 없는 경우 라는 뜻
                  (\d{3})+(?!\d) 는 숫자가 3번 나타난다 라는 뜻
        (?=   ) - 앞 뒤 조건 모두 만족 이라는 뜻
                    (\d{3}) 부터 +(?!\d)) 까지 만족할때 라는 뜻
        g - 전역 검색
    */
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
}
 