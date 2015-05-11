/*******
Original JS
******/

var isVertical = false;
var l_scr_total_width = screen.width;
var add_subnavig_type = '';


var subng_variation_flag = "OLDDESIGN";
var navigation_align = "hp_design_align";
var horizontal_location = "t";
var vertical_location = "t";

var xUA=navigator.userAgent.toLowerCase();
   
   xIE4=xUA.indexOf('msie 4')!=-1;
   xIE5=xUA.indexOf('msie 5')!=-1;
   xIE6=xUA.indexOf('msie 6')!=-1;

var  cursorType= "";
 
 if(xIE4 || xIE5)
            cursorType = 'CURSOR:HAND; ' ;
         else
            cursorType = 'cursor: hand; cursor: pointer; ';

// General Data
   var browser_type = navigator.appName;  //browser type
   var main_cat_arr = main_cat.split("::");  //main navis array
   var main_cat_length = main_cat_arr.length;   //length
   var main_sub_cat_arr = sub_cat.split(",");   //sub navis array
   var main_sub_cat_length = main_sub_cat_arr.length;    //sub navis length
   var main_sub_cat_ext_arr = sub_cat_ext.split(",");          // sub navis array
   var main_sub_cat_ext_length = main_sub_cat_ext_arr.length;  // sub navis length
   var STR_IE = "Microsoft Internet Explorer"; //ie   
   var STR_NS = "Netscape"; //netscape
   var STR_GECKO = "Gecko"; //gecko
   var STR_YES = "yes"; //yew
   var STR_NO = "no"; //no

   var f_str_dyn_sub_list = new Array();

// NS Properties
   var ns_sub_def_width ;   //width
   var ns_sub_def_height ; //height
   var ns_sub_def_left; //left
   var ns_sub_start_top;  //top
   var ns_sub_inc_top;  //increment top
   var ns_top_variance; // variance
   //IE Properties
   var ie_sub_def_width;   //width
   var ie_sub_def_height; //height
   var ie_sub_def_left; //left
   var ie_sub_start_top;  //top
   var ie_sub_inc_top; //increment top
   var ie_down_key_status; //key status
   var ie_current_hid_index;  //index

//sub layer position inIE
   var ie_poistion_details = new Array(); //position list

//BACKGROUND IMAGE 
   var img_over = "";   //image over
   var img_out = ""; //image out;

// Sub navigation enable
   var bln_navigation_state = true; //state

// dyn layers height height
   var ns_layers_height;   //height
   
// common top & left
   var dyn_top;   //top
   var dyn_left;  //left

//current page id & url status 
   var current_page_id = "";     //current page id
   var current_url_status = "";  //current url
   var current_url_name = "";    //current url name for external link
   var current_url_tgt = "";     //current url

//Identify cell No
   var current_cell = "";  // cell details

	document.write('<style type="text/css">');
	document.write('<!--');
	document.write('.titlesize {');
	document.write('font-family: Verdana, Arial, Helvetica, sans-serif;');
	document.write('font-size: 11px;');
	document.write('font-weight: normal;');
	document.write('text-decoration: none;');
	document.write('}');
	document.write('-->');
	document.write('</style>');
   
// style sheet properties for ns
   document.write('<STYLE TYPE="text/javascript">');
   document.write('classes.borderinclass.all.borderWidths("1pt");');
   document.write('classes.borderinclass.all.borderStyle="inset";');
   document.write('classes.borderinclass.all.borderColor="#b2b2b2";');
   document.write('classes.borderoutclass.all.borderWidths("1pt");');
   document.write('classes.borderoutclass.all.borderStyle="outset";');
   document.write('classes.borderoutclass.all.borderColor="#b2b2b2";');
   document.write('</STYLE>');

//cell properties
   var l_str_dtable_starts = "<table width='" + l_int_width + "' height='" + l_int_height + "' border='0' cellspacing='0' cellpadding='0'><tr><td valign='" + l_str_ver_align + "' align='" + title_align + "'><font color='" + default_title_color + "' face='" + title_style + "' class='titlesize'>&nbsp;"; //starts table 1
   var l_str_stable_starts = "<table width='" + l_int_width + "' height='" + l_int_height + "' border='0' cellspacing='0' cellpadding='0'><tr><td valign='" + l_str_ver_align + "' align='"+ title_align +"'><font color='" + scroll_title_color + "' face='" + title_style + "' class='titlesize'>&nbsp;";   //starts table 2
   var l_str_table_close = "&nbsp;</font></td></tr></table>";  //close the table

// for ns layers
   var l_str_dtable_starts_org = "<table width='" + l_int_width + "' height='" + l_int_height + "' border='0' cellspacing='0' cellpadding='0'><tr><td valign='middle' align='" + title_align + "'><font color='" + default_title_color + "' face='" + title_style + "' class='titlesize'>&nbsp;"; //starts table 1
   var l_str_stable_starts_org = "<table width='" + l_int_width + "' height='" + l_int_height + "' border='0' cellspacing='0' cellpadding='0'><tr><td valign='middle' align='"+ title_align +"'><font color='" + scroll_title_color + "' face='" + title_style + "' class='titlesize'>&nbsp;";   //starts table 2

   var _is_gecko_bowser = STR_NO;
   var _browser_agent_type = navigator.userAgent;

   if( _browser_agent_type != null && _browser_agent_type.indexOf(STR_GECKO) != -1 )
    {
       _is_gecko_bowser = STR_YES;
      //alert("in if 1");
   }

   if( _browser_agent_type != null && _browser_agent_type.indexOf(STR_GECKO) != -1 && _browser_agent_type.indexOf(STR_NS) != -1 && browser_type.indexOf(STR_NS) != -1)
      _is_gecko_bowser = STR_YES;

   if(browser_type == STR_IE)
   {     //starts if
      
      /***            starts sub navigation property              ***/   
      // temp layers
      setIEAllSubNavis();
      document.onmousedown = getKeyDown;
      /***         close sub navigation property                  ***/         
   }     // close if
   else if(_is_gecko_bowser == STR_YES)   // check gecko browser
   {     //starts if
      // temp layers
	  //alert("isVertical "+isVertical);
		//if(isVertical)
		//{
			setGeckoAllSubNavisVertical();
		//}
		//else
		//{
			//setGeckoAllSubNavis();
		//}
      document.onmousedown = getKeyDown;
   }     // close if
   else if(browser_type == STR_NS)
   {    //starts else-if
            
      /****                 starts sub navigation property                ****/   
      document.write("<layer id='tlayer' width=0 height=0 top=0 onMouseover='clearNSSubNavi();' onMouseout='this.visibility=\"hide\";clearNSSubNavi();' left=0 visibility='hide'  border-width=0><table   width=" + ns_sub_def_width + " border=0 cellPadding=0 cellSpacing=0 height=" + ns_sub_def_height + " ><tr><td>&nbsp;</td></tr></table></layer>");
      document.write("<layer id='bglayer' width=0 height=0 top=0 onMouseover='' onMouseout='' left=0 visibility='hide'  border-width=0><table   width=" + ns_sub_def_width + " border=0 cellPadding=0 cellSpacing=0 height=" + ns_sub_def_height + " ><tr><td>&nbsp;</td></tr></table></layer>");
      
      for(var i=0;i<main_sub_cat_length;i++)
         {  // starts for loop
            var lay = main_sub_cat_arr[i].split(":"); //array
            var layer_active = 'act_' + lay[1]; //array active
            // default layer
            var l_str_data = '';   // strings collection 
            var l_str_arr_data = getNoStrings(lay[2]);  // string list
            var lay_ext = main_sub_cat_ext_arr[i].split("::"); //array
            for(var k=0;k<l_str_arr_data.length;k++)
                  l_str_data += l_str_arr_data[k] +'&nbsp;';  
            // default layer class=borderoutclass                 
            document.write("<layer id='" + lay[1] + "' width=0 height=0 top=0 left=0 visibility='hide' onMouseOut='' onMouseOver='onSubNaviNSMouseOver(this,\"" + layer_active + "\");' >" + l_str_stable_starts_org + l_str_data  + l_str_table_close + "</layer>");
            // active layers class=borderinclass 
            document.write("<layer id='" + layer_active + "' width=0 height=0 top=0 left=0 visibility='hide' onMouseOut='onSubNaviNSMouseOver(this,\"" + lay[1] + "\");' onMouseOver='onCurrentNSSubNavis(\"" + layer_active + "\",\"" + lay[3] + "\",\"" + lay_ext[1] + "\",\"" + lay_ext[2] + "\")' >" + l_str_dtable_starts_org + l_str_data + l_str_table_close + "</layer>");
         }  //close the  for loop
      document.captureEvents(Event.MOUSEDOWN |Event.MOUSEUP);
      document.onmouseup = getAction;
     /****           close sub navigation property                      ****/               
   }        // close else if
   
   /* clear all sublayer in general */
function getTop()
{
   setClearSubLayer(main_sub_cat_length);
}        //close the function

function getSubNavisOnly(main_navi)
{
   var l_str_arr_subnavis = new Array(); //array
   var l_str_arr_ipnos = new Array(); //array
   var l_str_arr_result = new Array(); //array
   var l_int_i = 0;  //index
   for(n=0;n<main_sub_cat_length;n++) 
      { //starts for -1 loop
         var l_str_arr_temp = main_sub_cat_arr[n].split(':');   //array
         if(l_str_arr_temp[0] == main_navi)
            {
               l_str_arr_subnavis[l_int_i] = l_str_arr_temp[1] + ':' + l_str_arr_temp[4];
               l_str_arr_ipnos[l_int_i] = l_str_arr_temp[4];
               l_int_i++;
            }
      } //close for-1 loop
   var l_int_cnt = 0 //count
   if(l_str_arr_ipnos.length>0)
      {  //starts if -non-empyt array
         l_str_arr_ipnos.sort();
         l_str_arr_ipnos.sort(compareNumbers);
         for(var j=0;j<l_str_arr_ipnos.length;j++)
         {  //starts for -outter;
            for(var k=0;k < l_str_arr_subnavis.length; k++)
               {  //starts for -inner
                  var l_str_loc_data = l_str_arr_subnavis[k].split(':');
                  if(l_str_loc_data[1] == l_str_arr_ipnos[j])
                     l_str_arr_result[l_int_cnt++] = l_str_loc_data[0];
               }// inner loop-close
         }//outter loop -close
      }  //close if

   return l_str_arr_result;
}  // close the function

function setClearSubLayer(slength)
{
   if(browser_type == STR_IE) //if (ie)
      clearIENavis();
   else if(_is_gecko_bowser == STR_YES)   
      clearGeckoNavis();
   else       //starts else
   {
      if(browser_type == STR_NS) //if(ns)
         setClearNSSubLayer(slength);
   }        //close the else
}           //close the function

/* 
   This function returns list of individual strings about collection strings such as para or 
   line etc.        
*/
function getNoStrings(str)
{
   var l_str_arr_strarray = new Array()   //temp array
   if(str != '')     //non emty
      l_str_arr_strarray = str.split(" ");      
   return l_str_arr_strarray;
}  //close the function

function getScreenFixAbove1024(l)
{
//   alert(screen.width);
   var l_width_pixel =eval(l);
   var _broswertype =navigator.userAgent; // browser type

	if(screen.width > 1024)
	{

   if(subng_variation_flag == "OLDDESIGN") // condition to old design 
   {

		if(screen.width == 1280)              // screen resultion to 1280
		{
			if( _broswertype.indexOf("Gecko") != -1 )
				l_width_pixel =l_width_pixel + 280;
			else if( _broswertype.indexOf("MSIE") != -1)
				l_width_pixel =l_width_pixel + 260;
		}
		else if( screen.width ==1152)		//screen resultion to 1152
		{	
			if( _broswertype.indexOf("Gecko") != -1 )
				l_width_pixel =l_width_pixel + 150;		
	
			else if( _broswertype.indexOf("MSIE") != -1)
				l_width_pixel =l_width_pixel + 130;
		
		}
		else
		{
			l_width_pixel = eval(l+(Math.round(l_int_width/1.255)));
		}
   }
	else if( subng_variation_flag == "NEWDESIGN" )// condtion to new design		
		l_width_pixel =l_width_pixel;	 	
   else 					// codition to inner page
   {	
		if( screen.width == 1280)
			l_width_pixel = l_width_pixel ;	
		else if(screen.width == 1152 )
			l_width_pixel = l_width_pixel ;	
		else
			l_width_pixel = l_width_pixel ;	

    }
		
    
     // l_width_pixel = eval(l+(Math.round(l_int_width/1.255)));
	}
   return l_width_pixel; 
}

function displayMenu(evnt,width,height,nav_pos) 
{
	var x=0;
	var y=0;
		   
	if(evnt==null)
		evnt=window.event;

	var targ;     
	var isIE=!(navigator.userAgent.indexOf("Gecko")!=-1);
	if(isIE)
		targ=evnt.srcElement;
	else
		targ=evnt.target;
	//ObjectNode assign select_obj

	var ObjectNode=targ;
	//Iterate until ObjectNode is body
	while(ObjectNode!=null)
	{
			//Set x as x+ObjectNode.offsetTop.
			if(!isNaN(ObjectNode.offsetTop))
				y=y+ObjectNode.offsetTop;            

			if(!isNaN(ObjectNode.offsetLeft))
				x=x+ObjectNode.offsetLeft;            
				
			if(ObjectNode.offsetParent)
				ObjectNode=ObjectNode.offsetParent;
			else
				ObjectNode=ObjectNode.parentNode;          
	} //end Iterate until ObjectNode is HTML


	if(nav_pos == "left")
	{
		x+=targ.offsetWidth;
	}
	else if(nav_pos == "right")
	{
		if(x > 600 )
		{
			x-=width;

		}
		else	
		{
			x+=targ.offsetWidth;
		}
	}
	return x;

}

function displayMenuy(evnt,width,height,nav_pos) 
{
	
	var x=0;
	var y=0;
		   
	if(evnt==null)
		evnt=window.event;

	var targ;     
	var isIE=!(navigator.userAgent.indexOf("Gecko")!=-1);
	if(isIE)
		targ=evnt.srcElement;
	else
		targ=evnt.target;
	//ObjectNode assign select_obj

	var ObjectNode=targ;
	//Iterate until ObjectNode is body
	while(ObjectNode!=null)
	{
		//Set x as x+ObjectNode.offsetTop.
		if(!isNaN(ObjectNode.offsetTop))
			y=y+ObjectNode.offsetTop;            

		if(!isNaN(ObjectNode.offsetLeft))
			x=x+ObjectNode.offsetLeft;            
			
		if(ObjectNode.offsetParent)
			ObjectNode=ObjectNode.offsetParent;
		else
			ObjectNode=ObjectNode.parentNode;          
	} //end Iterate until ObjectNode is HTML



	if(nav_pos == "top")
	{
		y+=targ.offsetHeight;
	}
	else if(nav_pos == "bottom")
	{
		y-=targ.offsetHeight;
		if(targ.nodeName == "A" || targ.nodeName == "a")
		{
		//Text link navigations
			y-=10;
			var borderPixel = 2;
			if(_is_gecko_bowser == STR_YES)
			{
				borderPixel = 4;
			}
			
			if(subNgCount > 1)
			{
				y-= (((subNgCount-1)*subNavigHeight)+((subNgCount+1)*borderPixel));
				y-= 1;
			}
			else
			{
				y-= ((subNgCount+1)*borderPixel);
			}
		}
	}
	return y;

}

var previousCat;
var currentCat;
var subNgCount = 1;
var subNavigHeight;
var subNavigWidth;
function getSubLayers(nav_pos,evnt,curr_cat,index,start_top,start_left,img_default,img_over,height,width,latest_location)
{
    subNavigWidth = width;
	isVertical = false;
	if(!latest_location)
	{
	//for hand symbol
		if(nav_pos == "l" || nav_pos == "tl" || nav_pos == "bl")
		{
			latest_location = 'l';
		}
		else
		{
			latest_location = 'r';
		}
	}
	if(nav_pos == "l")
   {
		vertical_location = nav_pos;
		nav_pos = "left";
   }
   else if(nav_pos == "r")
   {
		vertical_location = nav_pos;
		nav_pos = "right";
   }
   else if(nav_pos == "tl" || nav_pos == "tr")
   {
		horizontal_location = nav_pos;
		nav_pos = "top";
		isVertical = true;
   }
   else if(nav_pos == "b" || nav_pos == "br" || nav_pos == "bl") 
   {
		horizontal_location = nav_pos;
		nav_pos = "bottom";
		isVertical = true;
   }
   
   subNavigHeight = height;
   previousCat = currentCat;
	if(previousCat)
	{
		hidePrevSubNavig(previousCat);
	}
   currentCat = curr_cat;
    var l_str_arr_temp = getSubNavisOnly(curr_cat);  //get acti navis
   subNgCount = l_str_arr_temp.length;
   
   start_left = displayMenu(evnt,width,height,nav_pos); 
   start_top = displayMenuy(evnt,width,height,nav_pos); 
   
   location_identifier =latest_location; 
   var l_int_ileft = start_left;
  // if(latest_location == 'r' || navigation_align=="hp_right_align")
     // l_int_ileft = getScreenFixAbove1024(start_left);

   //f_str_dyn_sub_list =new Array();
   //alert("1f_str_dyn_sub_list "+f_str_dyn_sub_list);
   common_height = height;
   common_width = width;   
   common_top = start_top;
   common_left = l_int_ileft;
   common_inc = height;

// NS Properties
   ns_sub_def_width = width;
   ns_sub_def_height = height;
   ns_sub_inc_top = common_inc; 
//   ns_sub_start_top = common_top+ns_top_variance;                          
   ns_sub_start_top = common_top;                          
// IE Properties
   ie_sub_def_width = width;
   ie_sub_def_height = height;
   ie_sub_def_left = common_left;
   ie_sub_start_top = common_top; 
   ie_sub_inc_top = common_inc; 

   if(_is_gecko_bowser == STR_YES)
   {        //starts if
      dyn_top = start_top; 
      dyn_left = l_int_ileft;
		if(isVertical)
		{
			setGeckoSubNavisListVertical(curr_cat,index,l_int_ileft,start_top,ie_sub_def_height,ie_sub_def_width);
		}
		else
		{
			setGeckoSubNavisList(curr_cat,index,l_int_ileft,start_top,ie_sub_def_height,ie_sub_def_width);
		}
   }
   else if(browser_type == STR_IE)
   {        //starts if
      dyn_top = start_top; 
      dyn_left = l_int_ileft;
      setIESubNavisList(curr_cat,index,l_int_ileft,start_top,ie_sub_def_height,ie_sub_def_width);
   }        // close if
   else
   {     //starts outter else
      if(browser_type == STR_NS)    //starts inner if
      {
         dyn_top = start_top; 
         dyn_left = l_int_ileft;
         setNSSubLayers(curr_cat,index,start_top,l_int_ileft,img_default,img_over);
      }  //close the inner if  
   }  //close the outter else
}  // close the function     

/******************************    Starts list of NS functions   ****************************/
/* set dummy layers with respect to main/sun */
/* dynmic navigation from the main navigation*/
function setNSSubLayers(c_cat,index, start_top, start_left, img0, img1)
{
   setClearSubLayer(main_sub_cat_length);
   document.layers["tlayer"].visibility = "hide";
   var temp_sub_arr = getSubNavisOnly(c_cat);                      // array of sub navis
   if(main_sub_cat_length > 0)
   {  //starts if-1 atlease on subnavis
      if(temp_sub_arr.length > 0)
         {  //starts if-3
            f_str_dyn_sub_list = temp_sub_arr;
            ns_layers_height = 0;
            ns_sub_start_top = start_top;
            var position = index;   //index
            for(var i=0;i<temp_sub_arr.length;i++)
               {  //starts for loop
                  //var lay="sub_layer_"+i;
                  var layer_id = temp_sub_arr[i];  //array -temp
                  var act_layer = 'act_' + layer_id;  // active layer
                  document.layers[layer_id].visibility = "show";
                  document.layers[layer_id].top = ns_sub_start_top;
                  document.layers[act_layer].top = ns_sub_start_top;
                  document.layers[layer_id].left = start_left;
                  document.layers[act_layer].left = start_left;
                  img_over = img1;
                  img_out = img0;
                  document.layers[layer_id].background.src = img0;
                  document.layers[act_layer].background.src = img1;
//                  document.layers[layer_id].bgcolor="#12acacac";
                  document.layers[layer_id].resizeTo(eval(common_width),eval(common_height));
                  document.layers[act_layer].resizeTo(eval(common_width ),eval(common_height));
                  ns_sub_start_top += ns_sub_inc_top+2;
                  ns_layers_height += ns_sub_def_height + 2;
                  position++;
               }  //close for loop
            document.layers["tlayer"].visibility = "show";
            document.layers["tlayer"].resizeTo(eval(ns_sub_def_width + 40),eval(ns_layers_height + 40));
            document.layers["tlayer"].top = start_top - 5;
//            document.layers["tlayer"].left = start_left;
            if(location_identifier == 'r')
               document.layers["tlayer"].left = start_left-(eval(ns_sub_def_width/4));            
            else if(location_identifier == 'l')
               document.layers["tlayer"].left = start_left; //document.layers["tlayer"].left = start_left - 40;               
            else if(vertical_location == 'l')
               document.layers["tlayer"].left = start_left; //document.layers["tlayer"].left = start_left - 40;   
            else if(vertical_location == 'r')
               document.layers["tlayer"].left = start_left-(eval(ns_sub_def_width/4));
//            document.layers["tlayer"].bgColor="#fafa00";            
            document.layers["bglayer"].visibility = "show";
            document.layers["bglayer"].resizeTo(eval(ns_sub_def_width+4),eval(ns_layers_height+1));
            document.layers["bglayer"].top = start_top-1;
            document.layers["bglayer"].left = start_left-1;
            document.layers["bglayer"].bgColor='#b2b2b2';                        
         }  //close if -3
   } // over the if -1
} // over the function

function onSubNaviNSMouseOver(ilayer,slayer)
{
   current_page_id = '';      //current page id
   current_url_status = '';   //current url
   current_url_name = '';     //current url for external link
   current_url_tgt = '';      //current url target

   ilayer.visibility ='hide';
   document.layers[slayer].visibility = 'show';
   document.layers[slayer].top = ilayer.top;
   document.layers[slayer].left = ilayer.left;
   document.layers[slayer].resizeTo(eval(common_width),eval(common_height));
}
/* Click to new link for NS */
function getAction()
{
   if (current_url_status == 'y' && current_page_id != '') //cursor points to page id
   {
      window.location.href = current_page_id + '.html';
   }
   else if (current_url_status == 'e' && current_url_name != '') //cursor points to page name
   {
      if (current_url_tgt == 'y')   // open in new window
      {
         window.open(replaceTitletoComma(current_url_name));
         getTop();
      }
      else
      {
         window.location.href = replaceTitletoComma(current_url_name);
      }
   }
   else if (current_url_status == '' && current_page_id == '' )//cursor has no page id
      getTop();
}  // close the function

/* clear all sub navigation */
function setClearNSSubLayer(slength)
{
   if(slength > 0)
   { //starts if - more than one navis 
      for(var i=0;i<main_sub_cat_length;i++)
      { //starts for loop - run navis
         // var lay="sub_layer_"+i;
         var lay = main_sub_cat_arr[i].split(":"); // array layers
         var layi = lay[1];   //at position 2
         var layiact = 'act_' + lay[1];   //active layer
         document.layers[layi].visibility = "hide";
         document.layers[layiact].visibility = "hide";
      }  //close the loop 
      document.layers["bglayer"].visibility = "hide";
   } //close if
} // close the function

/* clear navigation with function overloading */
function clearNSSubNavi()
{
   setClearNSSubLayer(main_sub_cat_length);  
} // close the function

function onCurrentNSSubNavis(tar_navis, status, url_name, url_tgt)
{
   current_page_id = tar_navis.substr(8);  //current page id
   current_url_status = status;  //current url status
   current_url_name = url_name;  //current url name
   current_url_tgt = url_tgt;    //current url target ( '' / 'n' )

   for(var i=0;i<f_str_dyn_sub_list.length;i++)
   { //starts for -1 loop
      var lay = f_str_dyn_sub_list[i]; //array
      var layer_active = 'act_' + lay; //array active
      if(layer_active == tar_navis)
         {
            document.layers[lay].visibility = 'hide';
            document.layers[layer_active].visibility = 'show';
         }
      else
         {
            document.layers[lay].visibility = 'show';
            document.layers[layer_active].visibility = 'hide';
         }
   }  //close for-1 loop
}   
/******************************    Close list of NS functions    ****************************/

/******************************    Starts list of IE functions   *****************************/
/*set sub navigations for dummy operation*/
function setIEAllSubNavis()
{
   var l_str_data;   //data
   var properties;   //properties
   var active_layer; //active layer
   var l_str_arr_single_string;  //single string
   document.write("<div id='subdesktop' style='visibility:hidden;background:transparent; position:absolute; clip:auto; top:0; left:0; height:0; width:0;' onMouseover='onIEClearSubs()' onMouseout='this.style.visibility=\"hidden\";onIEClearSubs();'>&nbsp;</div>");       
   document.write("<div id='bglayer' style='visibility:hidden;background:transparent; position:absolute; clip:auto; top:0; left:0; height:0; width:0;' onMouseover='' onMouseout=''>&nbsp;</div>");        
    
 for(var i=0;i<main_sub_cat_length;i++)
   {  //starts for loop - run navis
      properties = main_sub_cat_arr[i].split(':');
      active_layer = 'act_'+ properties[1];
      l_str_data = '';
      l_str_arr_single_string = getNoStrings(properties[2]);
      var lay_ext = main_sub_cat_ext_arr[i].split("::"); //array
      for(var k=0;k<l_str_arr_single_string.length;k++)  //inner loop - for split indiviual strings from string
          l_str_data += l_str_arr_single_string[k] + '&nbsp;'; 
      document.write("<div id='" + properties[1] + "' style=' " +cursorType+" visibility:hidden; background:transparent; position:absolute; border-style:outset;border-width:1px; clip:auto; top:535; left:0; height:0; width:0;background-image: url("+open_scroll_img+");' onMouseover='getActiveNavi(\""+ active_layer +"\",this)' onMouseout=''>" + l_str_stable_starts + l_str_data + l_str_table_close + "</div>");
      document.write("<div id='" + active_layer + "' style=' " +cursorType+" visibility:hidden; background:transparent; position:absolute; border-style:inset;border-width:1px; clip:auto; top:535; left:0; height:0; width:0;background-image: url("+ open_static_img +");' onMouseover='onCurrentIEsubNavis(\"" + active_layer + "\",\"" + properties[3] + "\",\"" + lay_ext[1] + "\",\"" + lay_ext[2] + "\");' onMouseout='getActiveNavi(\""+ properties[1] +"\",this);'>"+ l_str_dtable_starts +l_str_data + l_str_table_close +"</div>");
   }  //close the for loop
   clearIENavis();
}  //close the function

/*set sub navigations for dummy operation*/
function setGeckoAllSubNavis()
{
   var l_str_data;   //data
   var properties;   //properties
   var active_layer; //active layer
   var l_str_arr_single_string;  //single string
   document.write("<div id='subdesktop' style='visibility:hidden;background:transparent; position:absolute; clip:auto; top:0; left:0; height:0; width:0;' onMouseover='onGeckoClearSubs();onGeckoClearSubsVertical();' onMouseout='this.style.visibility=\"hidden\";onGeckoClearSubs();onGeckoClearSubsVertical();'>&nbsp;</div>");       
   document.write("<div id='bglayer' style='visibility:hidden;background:transparent; position:absolute; clip:auto; top:0; left:0; height:0; width:0;' onMouseover='' onMouseout=''>&nbsp;</div>");        
    
   for(var i=0;i<main_sub_cat_length;i++)
   {  //starts for loop - run navis
      properties = main_sub_cat_arr[i].split(':');
      active_layer = 'act_'+ properties[1];
      l_str_data = '';
      l_str_arr_single_string = getNoStrings(properties[2]);
      var lay_ext = main_sub_cat_ext_arr[i].split("::"); //array
      for(var k=0;k<l_str_arr_single_string.length;k++)  //inner loop - for split indiviual strings from string
          l_str_data += l_str_arr_single_string[k] + '&nbsp;'; 
      document.write("<div id='" + properties[1] + "' style=' " +cursorType+" visibility:hidden; background:transparent; position:absolute; border-style:outset;border-width:1px; clip:auto; top:535; left:0; height:0; width:0;background-image: url("+open_scroll_img+");' onMouseover='getActiveGeckoNavi(\""+ active_layer +"\",this)' onMouseout=''>" + l_str_stable_starts + l_str_data + l_str_table_close + "</div>");
      document.write("<div id='" + active_layer + "' style=' " +cursorType+" visibility:hidden; background:transparent; position:absolute; border-style:inset;border-width:1px; clip:auto; top:535; left:0; height:0; width:0;background-image: url("+ open_static_img +");' onMouseover='onCurrentGeckosubNavis(\"" + active_layer + "\",\"" + properties[3] + "\",\"" + lay_ext[1] + "\",\"" + lay_ext[2] + "\");'  onMouseout='getActiveGeckoNavi(\""+ properties[1] +"\",this);'>"+ l_str_dtable_starts +l_str_data + l_str_table_close +"</div>");
   }  //close the for loop
//   clearGeckoNavis();
}  //close the function

function clearIENavis()
{
   for(var i=0;i<main_sub_cat_length;i++)
   {  //starts for loop - run navis
      properties = main_sub_cat_arr[i].split(':');
      active_layer = 'act_' + properties[1];
      document.all.item(active_layer).style.visibility = 'hidden';
      document.all.item(properties[1]).style.visibility = 'hidden';
   }  //close the for loop
   bglayer.style.visibility = 'hidden';
}  //close the function

function clearGeckoNavis()
{
   for(var i=0;i<main_sub_cat_length;i++)
   {  //starts for loop - run navis
      properties = main_sub_cat_arr[i].split(':');
      active_layer = 'act_' + properties[1];
      document.getElementById(active_layer).style.visibility = 'hidden';
      document.getElementById(properties[1]).style.visibility = 'hidden';
   }  //close the for loop
   document.getElementById('bglayer').style.visibility = 'hidden';
}  //close the function

function setIESubNavisList(c_cat,index,left,top,height,width)
{
   var l_int_left = left; //left
   var l_int_top = top; //top
   clearIENavis();
   var l_str_arr_temp = getSubNavisOnly(c_cat);  //get acti navis
   f_str_dyn_sub_list = l_str_arr_temp;
   var l_int_inc_top = l_int_top;   //top
   var l_int_bg_height = (l_str_arr_temp.length)*(height+1)+Math.round((l_str_arr_temp.length)*(1.5));   //get length
   var l_int_mheight_inc = 0;
   for(var n=0;n<l_str_arr_temp.length;n++)
   { //starts for -1 loop
      document.all.item(l_str_arr_temp[n]).style.top = l_int_inc_top;
      document.all.item(l_str_arr_temp[n]).style.left = l_int_left;
      document.all.item(l_str_arr_temp[n]).style.width = width;
      document.all.item(l_str_arr_temp[n]).style.height = height;      
      document.all.item(l_str_arr_temp[n]).style.visibility = 'visible';   
      l_int_inc_top += height + 2; 
      l_int_mheight_inc  += height;
   } //close for-1 loop
   if(l_str_arr_temp.length > 0) //true-more than zero navis
      setIEOutsideLayer(l_int_left,l_int_inc_top,width,height,l_int_top,l_int_bg_height);
}  //close the function

function setGeckoSubNavisList(c_cat,index,left,top,height,width)
{
   var l_int_left = left; //left
   var l_int_top = top; //top
   clearGeckoNavis();
   var l_str_arr_temp = getSubNavisOnly(c_cat);  //get acti navis
   f_str_dyn_sub_list = l_str_arr_temp;
   var l_int_inc_top = l_int_top;   //top
   var l_int_bg_height = (l_str_arr_temp.length)*(height+1)+Math.round((l_str_arr_temp.length)*(1.5));   //get length
   var l_int_mheight_inc = 0;   
   for(var n=0;n<l_str_arr_temp.length;n++)
   { //starts for -1 loop
      document.getElementById(l_str_arr_temp[n]).style.top = l_int_inc_top;
      document.getElementById(l_str_arr_temp[n]).style.left = l_int_left;
      document.getElementById(l_str_arr_temp[n]).style.width = width;
      document.getElementById(l_str_arr_temp[n]).style.height = height;      
      document.getElementById(l_str_arr_temp[n]).style.visibility = 'visible';   
	  
	  document.getElementById('b_'+l_str_arr_temp[n]).style.width = width;
      document.getElementById('img_'+l_str_arr_temp[n]).style.width = width;
	  
      l_int_inc_top += height + 2; 
      l_int_mheight_inc  += height;
   } //close for-1 loop
   
   document.getElementById('bglayer').style.width = width;
   document.getElementById('subdesktop').style.width = width;

   
   
   if(l_str_arr_temp.length > 0) //true-more than zero navis
		setGeckoOutsideLayer(l_int_left,l_int_inc_top,width,height,l_int_top,l_int_bg_height);
}  //close the function

function getActiveNavi(des_navi_name,curr_navi_object)
{
   current_page_id = "";
   current_url_status = "";
   current_url_name = "";  //current url for external link
   current_url_tgt = "";   //current url target

   document.all.item(des_navi_name).style.top = parseInt(curr_navi_object.style.top);
   document.all.item(des_navi_name).style.left = parseInt(curr_navi_object.style.left);
   document.all.item(des_navi_name).style.width = parseInt(curr_navi_object.style.width);
   document.all.item(des_navi_name).style.height = parseInt(curr_navi_object.style.height);      
   curr_navi_object.style.visibility = 'hidden'
   document.all.item(des_navi_name).style.visibility = 'visible';   
}  // close the function

function getActiveGeckoNavi(des_navi_name,curr_navi_object)
{
   current_page_id = "";
   current_url_status = "";
   current_url_name = "";  //current url for external link
   current_url_tgt = "";   //current url target

   document.getElementById(des_navi_name).style.top = parseInt(curr_navi_object.style.top);
   document.getElementById(des_navi_name).style.left = parseInt(curr_navi_object.style.left);
   document.getElementById(des_navi_name).style.width = parseInt(curr_navi_object.style.width);
   document.getElementById(des_navi_name).style.height = parseInt(curr_navi_object.style.height);      
   curr_navi_object.style.visibility = 'hidden'
   document.getElementById(des_navi_name).style.visibility = 'visible';   
}  // close the function

function whenIEMouseOver(id, url, pos, url_name, url_tgt)
{
         current_page_id = id;
         current_url_status = url;
         current_url_name = url_name;  //current url name
         current_url_tgt = url_tgt;    //current url target ( '' / 'n' )
}  //close the function
function whenIEMouseOut()
{
         current_page_id = '';
         current_url_status = '';
         current_url_name = '';  //current url for external link
         current_url_tgt = '';   //current url target
}  //close the function

/*set whenmouseover layer onIE formatted layers */
function setIEOutsideLayer(left,top,width,height,default_top,total_height)
{
   bglayer.style.top = default_top-1;
   bglayer.style.left = left-1;
   bglayer.style.width = width+2;
   bglayer.style.height = total_height;
   bglayer.style.visibility = 'visible';
   bglayer.style.background = '#b2b2b2';
      
   subdesktop.style.top = default_top - height;
   if(location_identifier == 'l')
      subdesktop.style.left = left; //subdesktop.style.left = left - (width/2);      
   else if(location_identifier == 'r')
      subdesktop.style.left = left-(width/2);   
   else if(vertical_location == 'l')
      subdesktop.style.left = left; //subdesktop.style.left = left - (width/2);   
   else if(vertical_location == 'r')
            subdesktop.style.left = left-(width/2);   
   subdesktop.style.width = width + (width/2);
   subdesktop.style.height = total_height + (height*2);
   subdesktop.style.visibility = 'visible';   
//   document.all.item('subdesktop').style.background = '#ccc000';  
}  //close the function

function setGeckoOutsideLayer(left,top,width,height,default_top,total_height)
{
   document.getElementById('bglayer').style.top = eval(default_top)-1;
   document.getElementById('bglayer').style.left = eval(left)-1;
   document.getElementById('bglayer').style.width = eval(width)+2;   
   document.getElementById('bglayer').style.height = eval(total_height);
   document.getElementById('bglayer').style.visibility = 'visible';
   document.getElementById('bglayer').style.background = '#b2b2b2';
      
   document.getElementById('subdesktop').style.top = default_top - height;
   if(location_identifier == 'l')
      document.getElementById('subdesktop').style.left = left; //subdesktop.style.left = left - (width/2);      
   else if(location_identifier == 'r')
      document.getElementById('subdesktop').style.left = left-(width/2);   
   else if(vertical_location == 'l')
      document.getElementById('subdesktop').style.left = left; //subdesktop.style.left = left - (width/2);   
   else if(vertical_location == 'r')
            document.getElementById('subdesktop').style.left = left-(width/2);   
   document.getElementById('subdesktop').style.width = width + (width/2);
   document.getElementById('subdesktop').style.height = total_height + (height*2);
   document.getElementById('subdesktop').style.visibility = 'visible';   
//   document.getElementById('subdesktop').style.background = '#ccc000';  
}  //close the function


function  getKeyDown()
{

/********** sg16.0 changes ************/	
	 	 
	 
    var l_obj_file_list = sub_navig_file_name.split("::");
    var l_str_page_id =""; // get the page i d
    var l_str_file_name =""; // get the file  name
    var _temp_index =0;
    var  current_file_name =current_page_id + '.html';
    for(var i =0; i < l_obj_file_list.length; i++)
    {
        l_str_file_name = l_obj_file_list[i];
       
        if(l_str_file_name.indexOf(":") >0 )
        {
                _temp_index = l_str_file_name.indexOf(":");
                l_str_page_id = l_str_file_name.substring(0,_temp_index);
                l_str_file_name = l_str_file_name.substring(_temp_index+1,l_str_file_name.length);
                if(current_page_id == l_str_page_id)
                    current_file_name =l_str_file_name;
        }       
    }
	
	
	/********** sg16.0 changes ************/


   if (current_url_status == 'y' && current_page_id != '') //cursor points to page id
   {
      location.href = current_file_name;
   } 
   else if (current_url_status == 'e' && current_url_name != '') //cursor points to page name
   {
      if (current_url_tgt == 'y')   // open in new window
      {
         window.open(replaceTitletoComma(current_url_name));
         getTop();
      }
      else
      {
         location.href = replaceTitletoComma(current_url_name);
      }
   }
   else if (current_url_status == '' && current_page_id == '') // false - empty
   {
         if(_is_gecko_bowser == STR_YES)
            clearGeckoNavis();
         else
            clearIENavis();
   }
}   //close the function

function onCurrentIEsubNavis(tar_navis, status, url_name, url_tgt)
{
   current_page_id = tar_navis.substr(8);
   current_url_status = status;
   current_url_name = url_name;  //current url name
   current_url_tgt = url_tgt;    //current url target ( '' / 'n' )

   for(var n=0;n < f_str_dyn_sub_list.length;n++)
   { //starts for -1 loop
      var l_str_scroll_layer = 'act_'+ f_str_dyn_sub_list[n];
      var l_str_static_layer = f_str_dyn_sub_list[n];      
      if(tar_navis == l_str_scroll_layer)
         {
            document.all.item(l_str_scroll_layer).style.visibility = 'visible';
            document.all.item(l_str_static_layer).style.visibility = 'hidden';
         }
      else
         {
            document.all.item(l_str_scroll_layer).style.visibility = 'hidden';
            document.all.item(l_str_static_layer).style.visibility = 'visible';
         }
   }  //close for-1 loop
}

function onCurrentGeckosubNavis(tar_navis, status, url_name, url_tgt)
{
   current_page_id = tar_navis.substr(8);
   current_url_status = status;
   current_url_name = url_name;  //current url name
   current_url_tgt = url_tgt;    //current url target ( '' / 'n' )

   for(var n=0;n < f_str_dyn_sub_list.length;n++)
   { //starts for -1 loop
      var l_str_scroll_layer = 'act_'+ f_str_dyn_sub_list[n];
      var l_str_static_layer = f_str_dyn_sub_list[n];      
      if(tar_navis == l_str_scroll_layer)
         {
            document.getElementById(l_str_scroll_layer).style.visibility = 'visible';
            document.getElementById(l_str_static_layer).style.visibility = 'hidden';
         }
      else
         {
            document.getElementById(l_str_scroll_layer).style.visibility = 'hidden';
            document.getElementById(l_str_static_layer).style.visibility = 'visible';
         }
   }  //close for-1 loop
}

function onIEClearSubs()
{
   for(var n=0;n <f_str_dyn_sub_list.length;n++)
   { //starts for -1 loop
      var l_str_scroll_layer = 'act_'+ f_str_dyn_sub_list[n];
      var l_str_static_layer = f_str_dyn_sub_list[n];      
      document.all.item(l_str_scroll_layer).style.visibility = 'hidden';
      document.all.item(l_str_static_layer).style.visibility = 'hidden';
   }  //close for-1 loop
   bglayer.style.visibility = 'hidden';
}

function onGeckoClearSubs()
{
   for(var n=0;n <f_str_dyn_sub_list.length;n++)
   { //starts for -1 loop
      var l_str_scroll_layer = 'act_'+ f_str_dyn_sub_list[n];
      var l_str_static_layer = f_str_dyn_sub_list[n];      
      document.getElementById(l_str_scroll_layer).style.visibility = 'hidden';
      document.getElementById(l_str_static_layer).style.visibility = 'hidden';
   }  //close for-1 loop
   document.getElementById('bglayer').style.visibility = 'hidden';
}
function compareNumbers(a, b) 
{ 
  return a - b;
}

function replaceTitletoComma(externaltext)
{
   externaltext = externaltext.replace(/\~~~/g, ",");
   return externaltext;
}


function setGeckoSubNavisListVertical(c_cat,index,left,top)
{
   var l_int_left = left; //left
   var l_int_top = top; //top
   onGeckoClearSubsVertical();
   var l_str_arr_temp = getSubNavisOnly(c_cat);  //get acti navis
   f_str_dyn_sub_list = l_str_arr_temp;
   var l_int_inc_top = l_int_top;   //top
   var l_int_mheight_inc = 0;
   //var width = l_img_width_list[getImageIndex(c_cat)];
    var width = eval(subNavigWidth)+5;
   var height = l_img_height;   
   var l_int_bg_height = (l_str_arr_temp.length)*(height+1) + (l_str_arr_temp.length)*(1.5);   //get length
   //if(l_scr_total_width > 1024)
      //l_int_left1=getSuitXposi(left);
   for(var n=0;n<l_str_arr_temp.length;n++)
   { //starts for -1 loop
      var l_int_snavi_width = width;
      var l_int_snavi_left = l_int_left;
      var l_int_snavi_total =  eval(l_int_left) + eval(width);
      document.getElementById(l_str_arr_temp[n]).style.top = l_int_inc_top;
      document.getElementById(l_str_arr_temp[n]).style.left = l_int_left;
      document.getElementById(l_str_arr_temp[n]).style.width = width;
      document.getElementById(l_str_arr_temp[n]).style.height = height;      
      document.getElementById(l_str_arr_temp[n]).style.visibility = 'visible';   
      document.getElementById('b_'+l_str_arr_temp[n]).style.top = l_int_inc_top;
      document.getElementById('b_'+l_str_arr_temp[n]).style.left = l_int_left;
      document.getElementById('b_'+l_str_arr_temp[n]).style.width = width;
      document.getElementById('b_'+l_str_arr_temp[n]).style.height = height;      
      document.getElementById('b_'+l_str_arr_temp[n]).style.visibility = 'visible'; 
      document.getElementById('img_'+l_str_arr_temp[n]).style.top = l_int_inc_top;
      document.getElementById('img_'+l_str_arr_temp[n]).style.left = l_int_left;
      document.getElementById('img_'+l_str_arr_temp[n]).style.width = width;
      document.getElementById('img_'+l_str_arr_temp[n]).style.height = height;      
      document.getElementById('img_'+l_str_arr_temp[n]).style.visibility = 'visible';   

      l_int_inc_top += height + 2; 
      l_int_mheight_inc  += height;
   } //close for-1 loop
   if(l_str_arr_temp.length > 0) //true-more than zero navis
      setGeckoOutsideLayerVertical(l_int_left,l_int_inc_top,width,height,l_int_top,l_int_bg_height);
}  //close the function

/*set whenmouseover layer onIE formatted layers */
function setGeckoOutsideLayerVertical(left,top,width,height,default_top,total_height)
{
   document.getElementById('bglayer').style.top = default_top - 2;
   document.getElementById('bglayer').style.left = left - 2;
   document.getElementById('bglayer').style.width = eval(width) + 4;
   document.getElementById('bglayer').style.height = total_height + 2;
   document.getElementById('bglayer').style.background = '#cccccc';                  
   document.getElementById('bglayer').style.visibility = 'visible';
   if(horizontal_location =='b' || add_subnavig_type == 'bl' || add_subnavig_type == 'br')      
      document.getElementById('subdesktop').style.top = default_top - (height+Math.round(height/2));
   else if(horizontal_location =='t')
            document.getElementById('subdesktop').style.top = default_top;
   
   var l_int_sdesk_left = left - Math.round(width/4);
   document.getElementById('subdesktop').style.left = l_int_sdesk_left;
   var l_int_sdesk_width = eval(width) + eval(Math.round(width/2));
   document.getElementById('subdesktop').style.width = l_int_sdesk_width;
   if(horizontal_location =='b' || add_subnavig_type == 'bl' || add_subnavig_type == 'br')         
      document.getElementById('subdesktop').style.height = total_height + (height*2) - Math.round(height/2);   
   else if(horizontal_location =='t')
      document.getElementById('subdesktop').style.height = total_height + (height*2);   
      
   var l_max_pixel_left = l_int_sdesk_left + l_int_sdesk_width;
   document.getElementById('subdesktop').style.visibility = 'visible';   
//   document.getElementById('subdesktop').style.background = '#cccccc';                  
}  //close the function

function getImageIndex(main_cat)
{
   var l_arr_temp_sub = new Array();
   var l_int_count = 0;
   var l_int_layer_noofchars = 0;
   var l_int_layer_img_index = 0;
   if(l_img_scroll_list.length ==3)
   {
      for(var i=0;i<main_sub_cat_length;i++)
      {  //starts for loop - 
         var l_arr_properties = main_sub_cat_arr[i].split(':');
         if(l_arr_properties[0] == main_cat)
            l_arr_temp_sub[l_int_count++] = l_arr_properties[2];
      }
      for(var j=0;j<l_arr_temp_sub.length;j++)
      {  //starts for loop - run navis
         var l_int_len = l_arr_temp_sub[j].length;
         if(l_int_layer_noofchars < l_int_len)
            l_int_layer_noofchars = l_int_len;
      }
      if(l_int_layer_noofchars<8)   //if 7chars sub navis
         l_int_layer_img_index = 0;
      else if(l_int_layer_noofchars<12)
         l_int_layer_img_index = 1;
      else if(l_int_layer_noofchars>11)
        l_int_layer_img_index = 2;   
   }        
   else if(l_img_scroll_list.length == 1)
   {
      l_int_layer_img_index = 0;
   }
    return l_int_layer_img_index;
}

function onGeckoClearSubsVertical()
{
   for(var n=0;n <f_str_dyn_sub_list.length;n++)
   { //starts for -1 loop
      var l_str_scroll_layer = 'act_'+ f_str_dyn_sub_list[n];
      var l_str_static_layer = f_str_dyn_sub_list[n];      
      var l_str_inamer_scr = 'img_' + l_str_scroll_layer;
      var l_str_bname_scr = 'b_' + l_str_scroll_layer;
      var l_str_inamer_stc = 'img_' + l_str_static_layer;
      var l_str_bname_stc = 'b_' + l_str_static_layer;
      
      document.getElementById(l_str_scroll_layer).style.visibility = 'hidden';
      document.getElementById(l_str_static_layer).style.visibility = 'hidden';
      document.getElementById(l_str_inamer_scr).style.visibility = 'hidden';
      document.getElementById(l_str_inamer_stc).style.visibility = 'hidden';
      document.getElementById(l_str_bname_scr).style.visibility = 'hidden';
      document.getElementById(l_str_bname_stc).style.visibility = 'hidden';
   }  //close for-1 loop
   document.getElementById('bglayer').style.visibility = 'hidden';
   f_str_dyn_sub_list = new Array();
}   

/*set sub navigations for gecko's dummy operation*/
function setGeckoAllSubNavisVertical()
{
   var l_str_data;   //data
   var properties;   //properties
   var active_layer; //active layer
   var l_str_arr_single_string;  //single string
   document.write("<div id='subdesktop' style='visibility:hidden; background:transparent; position:absolute; clip:auto; top:0; left:0; height:0; width:0;'  onMouseout='whenIEParamClear();this.style.visibility=\"hidden\";'>&nbsp;</div>");       
   document.write("<div id='bglayer' style='visibility:hidden; background:transparent; position:absolute; clip:auto; top:0; left:0; height:0; width:0;' onMouseover='whenIEParamClear()' onMouseout=''>&nbsp;</div>");        
   //document.write("<div id='subdesktop' style='visibility:hidden; background:transparent; position:absolute; clip:auto; top:0; left:0; height:0; width:0;' onMouseover='onGeckoClearSubs()' onMouseout='whenIEParamClear();this.style.visibility=\"hidden\";onGeckoClearSubs();'>&nbsp;</div>");       
   //document.write("<div id='bglayer' style='visibility:hidden; background:transparent; position:absolute; clip:auto; top:0; left:0; height:0; width:0;' onMouseover='whenIEParamClear()' onMouseout=''>&nbsp;</div>");
   
   //setGeckoAllSubNavis();
   
   for(var i=0;i<main_sub_cat_length;i++)
   {  //starts for loop - run navis
      properties = main_sub_cat_arr[i].split(':');
      active_layer = 'act_'+ properties[1];
      l_str_data = '';
      l_str_arr_single_string = getNoStrings(properties[2]);
      var lay_ext = main_sub_cat_ext_arr[i].split("::"); //array
     for(var k=0;k<l_str_arr_single_string.length;k++)  //inner loop - for split indiviual strings from string
          l_str_data += l_str_arr_single_string[k] + '&nbsp;'; 
      
      var l_img_scroll_value = l_img_scroll_list[getImageIndex(properties[0])];
      var l_img_static_value = l_img_static_list[getImageIndex(properties[0])];
      var l_img_width_value = l_img_width_list[getImageIndex(properties[0])];
      var l_img_height_value = l_img_height;
      
      var l_str_table_1 = "<table width='" + l_img_width_value + "' height='" + l_img_height_value + "' border='0' cellspacing='0' cellpadding='0'><tr><td valign='" + l_str_ver_align + "' align='" + title_align + "'><font color='" + default_title_color + "' face='" + title_style + "' class='titlesize'>&nbsp;"; //starts table 1
      var l_str_table_0 = "<table width='" + l_img_width_value + "' height='" + l_img_height_value + "' border='0' cellspacing='0' cellpadding='0'><tr><td valign='" + l_str_ver_align + "' align='"+ title_align +"'><font color='" + scroll_title_color + "' face='" + title_style + "' class='titlesize'>&nbsp;";   //starts table 2 
      var l_str_table_00 = "&nbsp;</font></td></tr></table>";  //close the table
      
      document.write("<div id='img_" + properties[1] + "' style=' " +cursorType+" visibility:hidden; background:transparent; position:absolute; clip:auto; top:535; left:0; height:0; width:0;z-index:1;' onMouseover='' onMouseout=''><img src='"+ l_img_static_value +"' height="+l_img_height_value+" width=" + l_img_width_value + " alt='sample'></div>");
      document.write("<div id='" + properties[1] + "' style=' " +cursorType+" visibility:hidden; background:transparent; position:absolute; clip:auto; top:535; left:0; height:0; width:0;z-index:2;overflow:hidden;background-image: url("+open_scroll_img+");' onMouseover='getActiveGeckoNavi(\""+ active_layer +"\",this)' onMouseout=''>" + l_str_table_0 + l_str_data + l_str_table_00 + "</div>");

	  document.write("<div id='b_" + properties[1] + "' style=' " +cursorType+" visibility:hidden; background:transparent; position:absolute; clip:auto; top:535; left:0; height:0; width:0;z-index:3;' onMouseover='getGeckoActiveNavi(\""+properties[1]+"\",\""+ active_layer +"\",this)' onMouseout=''>" + l_str_table_1 +"" + l_str_table_00 + "</div>");

      document.write("<div id='img_" + active_layer + "' style=' " +cursorType+" visibility:hidden; background:transparent; position:absolute; clip:auto; top:535; left:0; height:0; width:0;z-index:1;' onMouseover='' onMouseout=''><img src='"+ l_img_scroll_value +"' height="+l_img_height_value+" width=" + l_img_width_value +" alt='sample'></div>");
      document.write("<div id='" + active_layer + "' style=' " +cursorType+" visibility:hidden; background:transparent; position:absolute; clip:auto; top:535; left:0; height:0; width:0;z-index:2;overflow:hidden;background-image: url("+ open_static_img +");' onMouseover='onCurrentGeckosubNavis(\"" + active_layer + "\",\"" + properties[3] + "\",\"" + lay_ext[1] + "\",\"" + lay_ext[2] + "\");'  onMouseout='getActiveGeckoNavi(\""+ properties[1] +"\",this);'>"+ l_str_table_1 +l_str_data + l_str_table_00 +"</a></div>");
      document.write("<div id='b_" + active_layer + "' style=' " +cursorType+" visibility:hidden; background:transparent; position:absolute; clip:auto; top:535; left:0; height:0; width:0;z-index:3;'  onMouseover='onCurrentGeckosubNavis(\"" + active_layer + "\",\"" + properties[3] + "\",\"" + lay_ext[1] + "\",\"" + lay_ext[2] + "\");' onMouseout='getGeckoActiveNavi(\""+active_layer+"\",\""+ properties[1] +"\",this);'>"+ l_str_table_1 +"" + l_str_table_00 +"</div>");
   }  //close the for loop
   
   
//   clearGeckoNavis();
}  //close the function

function whenIEParamClear()
{
   current_page_id = '';
   current_url_status = '';
   current_url_name = '';  //current url for external link
   current_url_tgt = '';   //current url target
} 

function getGeckoActiveNavi(curr_navi_name,des_navi_name,curr_navi_object)
{
   var des_navi_blk_name = 'b_' + des_navi_name;
   var des_navi_img_name = 'img_' + des_navi_name;   
   var cur_navi_img_name = 'img_' + curr_navi_name;      
   
   document.getElementById(des_navi_name).style.top = parseInt(curr_navi_object.style.top);
   document.getElementById(des_navi_name).style.left = parseInt(curr_navi_object.style.left);
   document.getElementById(des_navi_name).style.width = parseInt(curr_navi_object.style.width);
   document.getElementById(des_navi_name).style.height = parseInt(curr_navi_object.style.height);
   document.getElementById(des_navi_name).style.visibility = 'visible';   
   
   document.getElementById(des_navi_blk_name).style.top = parseInt(curr_navi_object.style.top);
   document.getElementById(des_navi_blk_name).style.left = parseInt(curr_navi_object.style.left);
   document.getElementById(des_navi_blk_name).style.width = parseInt(curr_navi_object.style.width);
   document.getElementById(des_navi_blk_name).style.height = parseInt(curr_navi_object.style.height);
   document.getElementById(des_navi_blk_name).style.visibility = 'visible';      
   
   document.getElementById(des_navi_img_name).style.top = parseInt(curr_navi_object.style.top);
   document.getElementById(des_navi_img_name).style.left = parseInt(curr_navi_object.style.left);
   document.getElementById(des_navi_img_name).style.width = parseInt(curr_navi_object.style.width);
   document.getElementById(des_navi_img_name).style.height = parseInt(curr_navi_object.style.height);
   document.getElementById(des_navi_img_name).style.visibility = 'visible';         
   
   curr_navi_object.style.visibility = 'hidden'
   document.getElementById(curr_navi_name).style.visibility = 'hidden';      
   document.getElementById(cur_navi_img_name).style.visibility = 'hidden';         
}  // close the function

//Hiding sub navigation displayed
function hideSubNavig()
{
	var l_str_arr_temp = getSubNavisOnly(currentCat);  //get acti navis
	for(var n=0;n<l_str_arr_temp.length;n++)
   { //starts for -1 loop
 
      document.getElementById(l_str_arr_temp[n]).style.visibility = 'hidden'; 
		if(_is_gecko_bowser == STR_YES)	  
		{
			document.getElementById('b_'+l_str_arr_temp[n]).style.visibility = 'hidden'; 
			document.getElementById('img_'+l_str_arr_temp[n]).style.visibility = 'hidden';   
		}
   } //close for-1 loop
   
   document.getElementById('bglayer').style.visibility = 'hidden';
   document.getElementById('subdesktop').style.visibility = 'hidden';
}

function hidePrevSubNavig(cat_id)
{
	var l_str_arr_temp = getSubNavisOnly(cat_id);  //get acti navis
	for(var n=0;n<l_str_arr_temp.length;n++)
   { //starts for -1 loop
 
      document.getElementById(l_str_arr_temp[n]).style.visibility = 'hidden'; 
		if(_is_gecko_bowser == STR_YES)	  
		{
			document.getElementById('b_'+l_str_arr_temp[n]).style.visibility = 'hidden'; 
			document.getElementById('img_'+l_str_arr_temp[n]).style.visibility = 'hidden';   
		}
   } //close for-1 loop
   
   document.getElementById('bglayer').style.visibility = 'hidden';
   document.getElementById('subdesktop').style.visibility = 'hidden';
}

if(_is_gecko_bowser == STR_YES)
{
//clicking on the document, initiate method for hiding sub navigation displayed
	document.addEventListener("mousedown", hideSubNavig, false); 
}