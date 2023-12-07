$(document).ready(function(){
    let cate_no = get_url_info("cate_no");
    let item_no = get_url_info("item_no");

    console.log(ITEM_LIST[cate_no][item_no-1])
    
    const ITEM = ITEM_LIST[cate_no][item_no-1];
    
    console.log (menu_array[cate_no])
    console.log (ITEM.src)

    let list =  `<div class="logic_banner">
                    <div class="logic_l">
                        <!-- <img src="../img/store_ipad/ipad_l.png" alt=""> -->
                    </div>
                    <div class="logic_m">
                        <p class="logic_txt1">새롭게 선보이는</p>
                        <p class="logic_txt2">iPad용</p>
                        <p class="logic_txt3">Final Cut Pro 및</p>
                        <p class="logic_txt4">Logic Pro</p>
                    </div>
                    <div class="logic_r">
                        <!-- <img src="../img/store_ipad/ipad_r.png" alt=""> -->
                    </div>
                </div>
                <div class="ipad_pro_banner">
                    <div class="ipad_pro_txt">
                        <p class="ipad_pro_title">iPad Pro</p>
                        <p class="ipad_pro_sub_title">막강한 성능의 <img src="../img/store_ipad/m2chip.png" alt="">탑재</p>
                        <p class="ipad_pro_price">₩1,249,000부터</p>
                        <div class="buy_ipad_pro"><a href="#">구입하기</a></div>
                    </div>
                    <div class="ipad_pro_bg"></div>
                </div>
                <div class="ipad_banner_w1">
                    <div class="ipad_banner_w2">
                        <div class="ipad_bg"></div>
                        <div class="ipad_txt">
                        <p class="ipad_title">iPad</p>
                        <p class="ipad_sub_title">쓰다. 그리다. 빠져들다</p>
                        <p class="ipad_price">₩679,000부터</p>
                        <div class="buy_ipad"><a href="#">구입하기</a></div>
                    </div>
                </div>
                
                <div class="choose_item">
                    <p class="choose_item_txt">당신에게 맞는iPad는?</p>
                    <div class="item_box">
                        <div class="item_box1">
                            <div class="item_box_img"></div>
                            <div class="item_box_big_title">
                                <p>${ITEM.ipad_list1}</p>
                            </div>
                            <div class="item_box_txt">
                                <p>${ITEM.ipad_txt1}</p>
                            </div>
                            <div class="item_box_price">
                                <p>${ITEM.ipad_price1}</p>
                            </div>
                            <div class="buy_btn_choose"><a href="shopping_item.html?cate_no=0&item_no=1">구매하기</a></div>
                            <hr class="choose_hr">
                            <div class="item_box_size"><p>${ITEM.ipad_size1}</p></div>
                            <div class="item_box_display"><p>${ITEM.ipad_display1}</p></div> 
                            <div class="item_box_chip"><img src="../img/${ITEM.ipad_chip_src1}" alt=""><br>Apple M1 칩</div>
                            <div class="item_box_core"><p class="core_txt">8코어</p><br>CPU</div>
                            <div class="item_box_gcore"><p class="core_txt">7코어</p><br>GPU</div>
                            <div class="item_box_memory"><img src="../img/${ITEM.memory_src}" alt=""><br><p>최대 16GB 통합 메모리</p></div>
                            <div class="item_box_ssd"><p class="ssd_p1">2TB</p><p class="ssd_p2">구성 가능한 저장 장치 최대 용량</p></div>
                            <div class="item_box_battery_time"><img src="../img/${ITEM.battery_src}" alt=""><br><p>${ITEM.battery_time1}</p></div>
                            <div class="item_box_camera"><img src="../img/store_mac/cameta.png" alt=""><br><p>${ITEM.facetime1} FaaceTimeHD 카메라</p></div>
                            <div class="item_box_speaker"><img src="../img/${ITEM.sound_src}" alt=""><p>3 마이크 어레이<br>스테레오 스피커</p></div>
                            <div class="item_box_weight"><p class="weight_p1">1.29Kg</p><p class="weight_p2">무게</p></div>
                            <div class="item_box_login"><img src="../img/${ITEM.touchid1}" alt=""><p>Touch ID</p></div>
                        </div>

                        <div class="item_box2">
                            <div class="item_box_img"></div>
                            <div class="item_box_big_title">
                                <p>${ITEM.ipad_list2}</p>
                            </div>
                            <div class="item_box_txt">
                                <p>${ITEM.ipad_txt2}</p>
                            </div>
                            <div class="item_box_price">
                                <p>${ITEM.ipad_price2}</p>
                            </div>
                            <div class="buy_btn_choose"><a href="shopping_item.html?cate_no=0&item_no=1">구매하기</a></div>
                            <hr class="choose_hr">
                            <div class="item_box_size"><p>${ITEM.ipad_size2}</p></div>
                            <div class="item_box_display"><p>${ITEM.ipad_display2}</p></div> 
                            <div class="item_box_chip"><img src="../img/${ITEM.ipad_chip_src2}" alt=""><br>Apple M1 칩</div>
                            <div class="item_box_core"><p class="core_txt">8코어</p><br>CPU</div>
                            <div class="item_box_gcore"><p class="core_txt">7코어</p><br>GPU</div>
                            <div class="item_box_memory"><img src="../img/${ITEM.memory_src}" alt=""><br><p>최대 16GB 통합 메모리</p></div>
                            <div class="item_box_ssd"><p class="ssd_p1">2TB</p><p class="ssd_p2">구성 가능한 저장 장치 최대 용량</p></div>
                            <div class="item_box_battery_time"><img src="../img/${ITEM.battery_src}" alt=""><br><p>${ITEM.battery_time1}</p></div>
                            <div class="item_box_camera"><img src="../img/store_mac/cameta.png" alt=""><br><p>${ITEM.facetime1} FaaceTimeHD 카메라</p></div>
                            <div class="item_box_speaker"><img src="../img/${ITEM.sound_src}" alt=""><p>3 마이크 어레이<br>스테레오 스피커</p></div>
                            <div class="item_box_weight"><p class="weight_p1">1.29Kg</p><p class="weight_p2">무게</p></div>
                            <div class="item_box_login"><img src="../img/${ITEM.touchid1}" alt=""><p>Touch ID</p></div>
                        </div>

                        <div class="item_box3">
                            <div class="item_box_img"></div>
                            <div class="item_box_big_title">
                                <p>${ITEM.ipad_list3}</p>
                            </div>
                            <div class="item_box_txt">
                                <p>${ITEM.ipad_txt3}</p>
                            </div>
                            <div class="item_box_price">
                                <p>${ITEM.ipad_price3}</p>
                            </div>
                            <div class="buy_btn_choose"><a href="shopping_item.html?cate_no=0&item_no=1">구매하기</a></div>
                            <hr class="choose_hr">
                            <div class="item_box_size"><p>${ITEM.ipad_size3}</p></div>
                            <div class="item_box_display"><p>${ITEM.ipad_display3}</p></div> 
                            <div class="item_box_chip"><img src="../img/${ITEM.ipad_chip_src3}" alt=""><br>Apple M1 칩</div>
                            <div class="item_box_core"><p class="core_txt">8코어</p><br>CPU</div>
                            <div class="item_box_gcore"><p class="core_txt">7코어</p><br>GPU</div>
                            <div class="item_box_memory"><img src="../img/${ITEM.memory_src}" alt=""><br><p>최대 16GB 통합 메모리</p></div>
                            <div class="item_box_ssd"><p class="ssd_p1">2TB</p><p class="ssd_p2">구성 가능한 저장 장치 최대 용량</p></div>
                            <div class="item_box_battery_time"><img src="../img/${ITEM.battery_src}" alt=""><br><p>${ITEM.battery_time1}</p></div>
                            <div class="item_box_camera"><img src="../img/store_mac/cameta.png" alt=""><br><p>${ITEM.facetime1} FaaceTimeHD 카메라</p></div>
                            <div class="item_box_speaker"><img src="../img/${ITEM.sound_src}" alt=""><p>3 마이크 어레이<br>스테레오 스피커</p></div>
                            <div class="item_box_weight"><p class="weight_p1">1.29Kg</p><p class="weight_p2">무게</p></div>
                            <div class="item_box_login"><img src="../img/${ITEM.touchid1}" alt=""><p>Touch ID</p></div>
                        </div>

                        <div class="item_box4">
                            <div class="item_box_img"></div>
                            <div class="item_box_big_title">
                                <p>${ITEM.ipad_list4}</p>
                            </div>
                            <div class="item_box_txt">
                                <p>${ITEM.ipad_txt4}</p>
                            </div>
                            <div class="item_box_price">
                                <p>${ITEM.ipad_price4}</p>
                            </div>
                            <div class="buy_btn_choose"><a href="shopping_item.html?cate_no=0&item_no=1">구매하기</a></div>
                            <hr class="choose_hr">
                            <div class="item_box_size"><p>${ITEM.ipad_size4}</p></div>
                            <div class="item_box_display"><p>${ITEM.ipad_display4}</p></div> 
                            <div class="item_box_chip"><img src="../img/${ITEM.ipad_chip_src4}" alt=""><br>Apple M1 칩</div>
                            <div class="item_box_core"><p class="core_txt">8코어</p><br>CPU</div>
                            <div class="item_box_gcore"><p class="core_txt">7코어</p><br>GPU</div>
                            <div class="item_box_memory"><img src="../img/${ITEM.memory_src}" alt=""><br><p>최대 16GB 통합 메모리</p></div>
                            <div class="item_box_ssd"><p class="ssd_p1">2TB</p><p class="ssd_p2">구성 가능한 저장 장치 최대 용량</p></div>
                            <div class="item_box_battery_time"><img src="../img/${ITEM.battery_src}" alt=""><br><p>${ITEM.battery_time1}</p></div>
                            <div class="item_box_camera"><img src="../img/store_mac/cameta.png" alt=""><br><p>${ITEM.facetime1} FaaceTimeHD 카메라</p></div>
                            <div class="item_box_speaker"><img src="../img/${ITEM.sound_src}" alt=""><p>3 마이크 어레이<br>스테레오 스피커</p></div>
                            <div class="item_box_weight"><p class="weight_p1">1.29Kg</p><p class="weight_p2">무게</p></div>
                            <div class="item_box_login"><img src="../img/${ITEM.touchid1}" alt=""><p>Touch ID</p></div>
                        </div>

                    </div>
                </div>`;
    $('.main').prepend(list)
})