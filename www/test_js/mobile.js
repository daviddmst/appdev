jQuery.noConflict();
jQuery( document ).ready(function($) {
	//var base_url = $('#base_url').attr('href');
	var base_url_store = 'http://demo.magebay.com/demo1/';
	var base_url = window.location.href;
	base_url = base_url.replace("index.html", "");;
	console.log( base_url );
	// $.mobile.pageContainer = $('#container');
	//$.mobile.defaultPageTransition = 'none';
	MSTMOBILE={
		goback:function(){
			//window.location.href = base_url + "themes/mobilepro/menu_account.html";		
			$.mobile.pageContainer.pagecontainer("change", base_url + "");
			console.log('redirect Home');
		},
		redirect_menu_account:function(){
			//window.location.href = base_url + "themes/mobilepro/menu_account.html";		
			$.mobile.pageContainer.pagecontainer("change", base_url + "themes/mobilepro/menu_account.html");
			console.log('redirect menu_account');	
		},
		redirect_cart:function(){
			$.mobile.pageContainer.pagecontainer("change", base_url + "themes/mobilepro/cart.html");
			console.log('redirect cart page');	
		},
		goto_category_detail:function( catid ){
			$.mobile.pageContainer.pagecontainer("change", base_url + "themes/mobilepro/category_detail.html?catid=" + catid );
			console.log('redirect category page');
			$( "#category_id" ).val( catid );
		},
		category_detail:function( catid ){
			console.log('show category detail');	
			$.get( base_url_store + "mobidata.php?action=category_detail&catid=" + catid, function( data ) {
			  $( "#conent_category_detail" ).html( data );
			});
		},
		goto_product_detail:function( proid ){
			$( "#pro_id" ).val( proid );
			$.mobile.pageContainer.pagecontainer("change", base_url + "themes/mobilepro/product_detail.html?proid=" + proid );
			console.log('redirect product page');		
		},
		product_detail:function( proid ){
			$.get( base_url_store + "mobidata.php?action=product_detail&proid=" + proid, function( data ) {
			  $( "#conent_product_detail" ).html( data );
			});
		},
		/* new website */
		conent_cart:function(){
			//$.mobile.pageContainer.pagecontainer("change", base_url + "themes/mobilepro/cart.html");
			console.log('la la la la');	
			$("#conent_cart").text('this is test from js');
		} ,
		category_menu:function(){
			$.get( base_url_store + "mobidata.php?action=category_menu", function( data ) {
			  $( "#content_category_menu" ).html( data );
			});
		} ,
		
	};
});