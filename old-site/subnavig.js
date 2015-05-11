var browser_type=navigator.appName;
var vertical_location = 'l';
var main_cat='cat_4::cat_1::cat_2::cat_3::cat_25::cat_30::cat_5::cat_8::cat_7::cat_9::cat_6';
var sub_cat='cat_2:cat_12:Antique Factory:y:1,cat_2:cat_26:AtlVintageBooks:y:2,cat_2:cat_11:Broad Street:y:3,cat_2:cat_18:ChambleeAntique:y:4,cat_2:cat_24:EstateGallery:y:5,cat_2:cat_17:& Interiors:y:6,cat_2:cat_21:Furniture Depot:y:7,cat_2:cat_22:FurnRestoration:y:8,cat_2:cat_34:Global Gems:y:9,cat_2:cat_20:Rust n Dust:y:10,cat_2:cat_37:Simple Finds:y:11,cat_2:cat_23:TreasureMart:y:12,cat_3:cat_35:Chamblee Bistro:y:1,cat_3:cat_14:Maison Robert:y:2,cat_3:cat_36:Union Hill:y:3,cat_3:cat_15:VintagePizzeria:y:4,cat_25:cat_27:Attic Treasures:y:1,cat_5:cat_32:2014:y:1,cat_5:cat_33:TasteofChamblee:y:2';
var sub_cat_ext='cat_12::http://::n,cat_26::http://::n,cat_11::http://::n,cat_18::http://::n,cat_24::http://::n,cat_17::http://::n,cat_21::http://::n,cat_22::http://::n,cat_34::http://::n,cat_20::http://::n,cat_37::http://::n,cat_23::http://::n,cat_35::http://::n,cat_14::http://::n,cat_36::http://::n,cat_15::http://::n,cat_27::http://::n,cat_32::http://::n,cat_33::http://::n';
var sub_navig_file_name="4:home_4.html::1:about_us_1.html::2:shops_2.html::12:antique_factory_12.html::26:shops__m_-_z_26.html::11:broad_street_11.html::18:page_18.html::24:estategallery_24.html::17:antiquegallery_17.html::21:furniture_depot_21.html::22:furnrestoration_22.html::34:global_gems_34.html::20:rust_n_dust_20.html::37:simple_finds_37.html::23:treasuremart_23.html::3:restuarants_3.html::35:chamblee_bistro_35.html::14:maison_robert_14.html::36:union_hill_36.html::15:vintagepizzeria_15.html::25:thrift_stores_25.html::27:attic_treasures_27.html::30:the_ups_store_30.html::5:events_5.html::32:open_house_2012_32.html::33:page_33.html::8:city_of_chamble_8.html::7:directions_7.html::9:contact_us_9.html::6:brochure_6.html::";
var open_scroll_img ='img/base/ba3.gif';
var open_static_img ='img/base/ba2.gif';
var l_int_width = 155; 
var l_int_height = 18;  
var title_size =2;
var title_style ="Verdana";
var title_align="left"; 
var l_str_ver_align = "middle" ;
var default_title_color = "#FFFFFF" ; 
var scroll_title_color = "#000000";  
var common_height ; 
var common_width; 
var common_top;
var common_left;
var common_inc; 
function getScreenFix(l)
{
var l_width_pixel =eval(l);
l_width_pixel = eval(l-(l_int_width+Math.round(l_int_width/2.3)));
return l_width_pixel; 
}
var l_img_scroll_list = new Array(open_scroll_img,open_scroll_img,open_scroll_img);
var l_img_static_list = new Array(open_static_img,open_static_img,open_static_img);
var l_img_width_list = new Array('100','120','140');
var l_img_height = 20;
