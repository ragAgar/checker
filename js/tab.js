$(function() {

  // Tab Menu
  $('.btn').click( function(){
		var pageNum = $(this).attr('data-page');
		var pageId  = ".tab" + pageNum;
		var btnId  = ".btn" + pageNum;      

		$('.tab-page').hide();
		$('.btn').css("opacity",0.2);    
		$(btnId).css("opacity",1);        
		$(pageId).show();
  } );
});