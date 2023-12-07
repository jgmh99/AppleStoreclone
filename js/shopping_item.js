$(document).ready(function(){
    let cate_no = get_url_info("cate_no");
    let item_no = get_url_info("item_no");

    console.log(ITEM_LIST[cate_no][item_no-1])
    
    const ITEM = ITEM_LIST[cate_no][item_no-1];
    
    console.log (menu_array[cate_no])
    console.log (ITEM.src)

    let list = `<div class="item">
                    <div class="buy_item">
                    <img src="../img/${menu_array[cate_no]}/${ITEM.src}" alt="">
                        <div class="buy_item_sec">
                            <div class="buy_item_l">
                                <svg viewBox="0 0 35 35" class="as-svgicon as-svgicon-shipping as-svgicon-base as-svgicon-shippingbase" role="img" aria-hidden="true" width="35px" height="35px">
                                    <path fill="none" d="M0 0h35v35H0z"></path>
                                    <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748v9.471a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-4.538 2.446l9.651 5.566-4.4 2.5-9.823-5.58c.038-.026.07-.059.111-.081zM7.788 23.539A1.5 1.5 0 017 22.219v-9.471a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z">
                                    </path>
                                </svg>
                                <p>재고가 있는 제품을 오후 3시 이전에 주문하시면 업무일 기준 익일까지 무료로 배송해 드립니다.</p>
                            </div>
                            <div class="buy_item_r">
                                <svg viewBox="0 0 35 35" class="as-svgicon as-svgicon-return as-svgicon-base as-svgicon-returnbase" role="img" aria-hidden="true" width="35px" height="35px">
                                    <path fill="none" d="M0 0h35v35H0z"></path>
                                    <path d="M12.249 9.022l-4.461 2.4c-.041.022-.073.055-.111.081l9.823 5.588 4.4-2.5zM27.322 11.507c-.038-.025-.069-.058-.11-.081l-9-4.852a1.5 1.5 0 00-1.424 0l-3.5 1.889 9.628 5.55zM10.8 18.5a.5.5 0 01-.5.5H7v3.219a1.5 1.5 0 00.788 1.32l9 4.852a1.494 1.494 0 00.212.082V17.957l-9.931-5.645a1.494 1.494 0 00-.069.436V18h3.3a.5.5 0 01.5.5zM18 17.957v10.515a1.481 1.481 0 00.212-.082l9-4.851a1.5 1.5 0 00.788-1.32v-9.471a1.5 1.5 0 00-.069-.436z" fill="none"></path>
                                    <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748V17h1v-4.252a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082l-9-4.852A1.5 1.5 0 017 22.219V20H6v2.219a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-9.11 4.932c.038-.026.07-.059.111-.081l4.461-2.4 9.651 5.561-4.4 2.5zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z">
                                    </path>
                                    <path d="M2.507 18l1.646-1.646a.5.5 0 00-.707-.707l-2.5 2.5a.5.5 0 000 .707l2.5 2.5a.5.5 0 10.707-.707L2.507 19H6v-1zM10.3 19a.5.5 0 000-1H7v1zM6 18h1v1H6z">
                                    </path>
                                </svg>
                                <p>무료로 손쉽게 반품</p>
                            </div>  
                        </div>
                        <p class="itme_bot_txt">${menu_array[cate_no]} 구입과 관련해 궁금한 점이 있으신가요?</p>
                        <p class="itme_bot_txt">${menu_array[cate_no]} 스페셜리스트와 상담하세요</p>
                    </div>
                </div>
                <div class="item_option">
                    <ul class="o_option">
                        <li><h1>${ITEM.title}</li>
                        <li><p>${ITEM.o_option1}</p></li>
                        <li><p>${ITEM.o_option2}</p></li>
                        <li><p>${ITEM.o_option3}</p></li>
                        <li><p>${ITEM.o_option4}</p></li>
                        <li><p>${ITEM.o_option5}</p></li>
                        <li><p>${ITEM.o_option6}</p></li>
                        <li><p>${ITEM.o_option7}</p></li>
                        <li><p>${ITEM.o_option8}</p></li>
                        <li><p>${ITEM.o_option9}</p></li>
                        <li><p>${ITEM.o_option10}</p></li>
                        <li><p>${ITEM.o_option11}</p></li>
                    </ul>
                    <hr>
                    <ul class="s_option">
                        <li>메모리</li>
                        <li>나에게 알맞은 메모리 용량은 무엇일까요?</li>
                        <li>
                            <div class="memory">
                                <div class="chk chk_8GB">
                                    <label for="8memory">
                                    <input type="radio" name="memory" id="8memory" class="8GB" checked>&nbsp;&nbsp;8GB 통합 메모리 
                                </div>
                                <div class="chk chk_16GB">
                                    <label for="16memory">
                                    <input type="radio" name="memory" id="16memory" class="16GB">&nbsp;&nbsp;16GB 통합 메모리 
                                    <div class="plus_price">+ ₩270,000</div>
                                </div>
                                <div class="chk chk_24GB">
                                    <label for="24memory">
                                    <input type="radio" name="memory" id="24memory" class="24GB">&nbsp;&nbsp;24GB 통합 메모리 
                                    <div class="plus_price">+ ₩540,000</div>
                                </div>
                            </div>
                        </li>
                        <li>저장 장치</li>
                        <li>나에게 알맞은 저장 용량은 무엇일까요?</li>
                        <li>
                            <div class="str">
                                <div class="chk chk_512GB">
                                    <label for="512GB">
                                    <input type="radio" name="str" id="512GB" class="512GB_str" checked>&nbsp;&nbsp;512GB SSD 저장장치
                                </div>
                                <div class="chk chk_1TB">
                                    <label for="1TB">
                                    <input type="radio" name="str" id="1TB" class="1TB_str">&nbsp;&nbsp;1TB SSD 저장장치
                                    <div class="plus_price">+ ₩270,000</div>
                                </div>
                                <div class="chk chk_2TB">
                                    <label for="2TB">
                                    <input type="radio" name="str" id="2TB" class="2TB_str">&nbsp;&nbsp;2TB SSD 저장장치
                                    <div class="plus_price">+ ₩810,000</div>
                                </div>
                            </div>
                        </li>
                        <li>전원 어댑터</li>
                        <li>나에게 알맞은 전원 어댑터는 무엇일까요?</li>
                        <li>
                            <div class="chr">
                                <div class="chk chk_35W">
                                    <label for="35W">
                                    <input type="radio" name="chr" id="35W" class="35W_chr" >&nbsp;&nbsp;35W USB-C 전원 어댑터(듀얼)
                                </div>
                                <div class="chk chk_70W">
                                    <label for="70W">
                                    <input type="radio" name="chr" id="70W" class="70W_chr">&nbsp;&nbsp;70W USB-C 전원 어댑터
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>`;

    $('.main_con').prepend(list)
})