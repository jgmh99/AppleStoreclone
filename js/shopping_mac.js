$(document).ready(function(){
    let cate_no = get_url_info("cate_no");
    let item_no = get_url_info("item_no");

    console.log(ITEM_LIST[cate_no][item_no-1])
    
    const ITEM = ITEM_LIST[cate_no][item_no-1];
    
    console.log (menu_array[cate_no])
    console.log (ITEM.src)

    let list =  `<div class= "main_item">
                    <div class="item1">
                        <div class="item_title">
                            <p class="big_title">${ITEM.big_title1}</p>
                            <p class="small_title">${ITEM.small_title1}</p>
                            <p class="price">${ITEM.price1}</p>
                            <div class="select_box">
                                <div class="buy_btn"><a href="shopping_item.html?cate_no=0&item_no=1">구매하기</a></div>
                                <div class="moreview_btn"><a href="#">더보기</a></div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="item2">
                        <div class="item_title">
                            <p class="big_title">${ITEM.big_title2}</p>
                            <p class="small_title">${ITEM.small_title2}</p>
                            <p class="price">${ITEM.price2}</p>
                            <div class="select_box">
                                <div class="buy_btn"><a href="shopping_item.html?cate_no=0&item_no=1">구매하기</a></div>
                                <div class="moreview_btn"><a href="#">더보기</a></div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="item3">
                        <div class="item_title">
                            <p class="big_title">${ITEM.big_title3}</p>
                            <p class="small_title">${ITEM.small_title3}</p>
                            <p class="price">${ITEM.price3}</p>
                            <div class="select_box">
                                <div class="buy_btn"><a href="shopping_item.html?cate_no=0&item_no=1">구매하기</a></div>
                                <div class="moreview_btn"><a href="#">더보기</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="choose_item">
            <p class="choose_item_txt">당신에게 맞는 Mac은?</p>
            <div class="item_box">
                <div class="item_box1">
                    <div class="item_box_img"></div>
                    <div class="item_box_big_title">
                        <p>${ITEM.mac_list1}</p>
                    </div>
                    <div class="item_box_small_title">
                        <p>${ITEM.mac_chip1}</p>
                    </div>
                    <div class="item_box_txt">
                        <p>${ITEM.mac_txt1}</p>
                    </div>
                    <div class="item_box_price">
                        <p>${ITEM.mac_price1}</p>
                    </div>
                    <div class="buy_btn_choose"><a href="shopping_item.html?cate_no=0&item_no=1">구매하기</a></div>
                    <hr class="choose_hr">
                    <div class="item_box_size"><p>${ITEM.mac_size1}</p></div>
                    <div class="item_box_display"><p>${ITEM.mac_display1}</p></div> 
                    <div class="item_box_chip"><img src="../img/${ITEM.mac_chip_src1}" alt=""><br>Apple M1 칩</div>
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
                        <p>${ITEM.mac_list2}</p>
                    </div>
                    <div class="item_box_small_title">
                        <p>${ITEM.mac_chip2}</p>
                    </div>
                    <div class="item_box_txt">
                        <p>${ITEM.mac_txt2}</p>
                    </div>
                    <div class="item_box_price">
                        <p>${ITEM.mac_price2}</p>
                    </div>
                    <div class="buy_btn_choose"><a href="shopping_item.html?cate_no=0&item_no=1">구매하기</a></div>
                    <hr class="choose_hr">
                    <div class="item_box_size"><p>${ITEM.mac_size2}</p></div>
                    <div class="item_box_display"><p>${ITEM.mac_display2}</p></div> 
                    <div class="item_box_chip"><img src="../img/${ITEM.mac_chip_src2}" alt=""><br>Apple M1 칩</div>
                    <div class="item_box_core"><p class="core_txt">8코어</p><br>CPU</div>
                    <div class="item_box_gcore"><p class="core_txt">7코어</p><br>GPU</div>
                    <div class="item_box_memory"><img src="../img/${ITEM.memory_src}" alt=""><br><p>${ITEM.total_mamory2}</p></div>
                    <div class="item_box_ssd"><p class="ssd_p1">2TB</p><p class="ssd_p2">구성 가능한 저장 장치 최대 용량</p></div>
                    <div class="item_box_battery_time"><img src="../img/${ITEM.battery_src}"" alt=""><br><p>${ITEM.battery_time2}</p></div>
                    <div class="item_box_camera"><img src="../img/store_mac/cameta.png" alt=""><br><p>${ITEM.facetime2} FaaceTimeHD 카메라</p></div>
                    <div class="item_box_speaker"><img src="../img/${ITEM.sound_src}" alt=""><p>3 마이크 어레이<br>스테레오 스피커</p></div>
                    <div class="item_box_weight"><p class="weight_p1">1.29Kg</p><p class="weight_p2">무게</p></div>
                    <div class="item_box_login"><img src="../img/${ITEM.touchid1}" alt=""><p>Touch ID</p></div>
                </div>
                <div class="item_box3">
                    <div class="item_box_img"></div>
                    <div class="item_box_big_title">
                        <p>${ITEM.mac_list3}</p>
                    </div>
                    <div class="item_box_small_title">
                        <p>${ITEM.mac_chip3}</p>
                    </div>
                    <div class="item_box_txt">
                        <p>${ITEM.mac_txt3}</p>
                    </div>
                    <div class="item_box_price">
                        <p>${ITEM.mac_price3}</p>
                    </div>
                    <div class="buy_btn_choose"><a href="shopping_item.html?cate_no=0&item_no=2">구매하기</a></div>
                    <hr class="choose_hr">
                    <div class="item_box_size"><p>${ITEM.mac_size3}</p></div>
                    <div class="item_box_display"><p>${ITEM.mac_display3}</p></div> 
                    <div class="item_box_chip"><img src="../img/${ITEM.mac_chip_src3}" alt=""><br>Apple M1 칩</div>
                    <div class="item_box_core"><p class="core_txt">8코어</p><br>CPU</div>
                    <div class="item_box_gcore"><p class="core_txt">7코어</p><br>GPU</div>
                    <div class="item_box_memory"><img src="../img/${ITEM.memory_src}" alt=""><br><p>${ITEM.total_mamory3}</p></div>
                    <div class="item_box_ssd"><p class="ssd_p1">2TB</p><p class="ssd_p2">구성 가능한 저장 장치 최대 용량</p></div>
                    <div class="item_box_battery_time"><img src="../img/${ITEM.battery_src}"" alt=""><br><p>${ITEM.battery_time3}</p></div>
                    <div class="item_box_camera"><img src="../img/${ITEM.camera_src}" alt=""><br><p>${ITEM.facetime3} FaaceTimeHD 카메라</p></div>
                    <div class="item_box_speaker"><img src="../img/${ITEM.sound_src}" alt=""><p>3 마이크 어레이<br>스테레오 스피커</p></div>
                    <div class="item_box_weight"><p class="weight_p1">1.29Kg</p><p class="weight_p2">무게</p></div>
                    <div class="item_box_login"><img src="../img/${ITEM.touchid2}" alt=""><p>Touch Bar 및 Touch ID</p></div>
                </div>
                <div class="item_box4">
                    <div class="item_box_img"></div>
                    <div class="item_box_big_title">
                        <p>${ITEM.mac_list4}</p>
                    </div>
                    <div class="item_box_small_title">
                        <p>${ITEM.mac_chip4}</p>
                    </div>
                    <div class="item_box_txt">
                        <p>${ITEM.mac_txt4}</p>
                    </div>
                    <div class="item_box_price">
                        <p>${ITEM.mac_price4}</p>
                    </div>
                    <div class="buy_btn_choose"><a href="shopping_item.html?cate_no=0&item_no=2">구매하기</a></div>
                    <hr class="choose_hr">
                    <div class="item_box_size"><p>${ITEM.mac_size4}</p></div>
                    <div class="item_box_display"><p>${ITEM.mac_display4}</p></div> 
                    <div class="item_box_chip4"><img src="../img/${ITEM.mac_chip_src4}" alt=""><br>Apple M1 칩</div>
                    <div class="item_box_core"><p class="core_txt">8코어</p><br>CPU</div>
                    <div class="item_box_gcore"><p class="core_txt">7코어</p><br>GPU</div>
                    <div class="item_box_memory"><img src="../img/${ITEM.memory_src}" alt=""><br><p>${ITEM.total_mamory4}</p></div>
                    <div class="item_box_ssd"><p class="ssd_p1">2TB</p> <p class="ssd_p2">구성 가능한 저장 장치 최대 용량</p></div>
                    <div class="item_box_battery_time"><img src="../img/${ITEM.battery_src}"" alt=""><br><p>${ITEM.battery_time4}</p></div>
                    <div class="item_box_camera"><img src="../img/store_mac/cameta.png" alt=""><br><p>${ITEM.facetime4} FaaceTimeHD 카메라</p></div>
                    <div class="item_box_speaker"><img src="../img/${ITEM.sound_src}" alt=""><p>3 마이크 어레이<br>스테레오 스피커</p></div>
                    <div class="item_box_weight"><p class="weight_p1">1.29Kg</p><p class="weight_p2">무게</p></div>
                    <div class="item_box_login"><img src="../img/${ITEM.touchid1}" alt=""><p>Touch ID</p></div>
                </div>
            </div>
        </div>

                `;
    $('.main').prepend(list)
})