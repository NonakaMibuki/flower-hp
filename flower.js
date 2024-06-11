$(function(){
	$('.slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 5,
		autoplay: true,
		autoplaySpeed: 3000,
		swipe: true,
		draggable: true, 
        touchMove: true, 
		responsive: [
			{
			  breakpoint: 1024, // ブレークポイントを設定
			  settings: {
				slidesToShow: 4, // 1024px未満の場合の表示スライド数
			  },
			},
			{
			  breakpoint: 768, // ブレークポイントを設定
			  settings: {
				slidesToShow: 2.5, // 768px未満の場合の表示スライド数
			  },
			},
		  ],
	})
})