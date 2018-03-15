
 $(document).ready(function(){
	$('#toggleNavigation').on('click',(e)=>{
		e.preventDefault();
		
		// убрать
		$('body').addClass('hideScroll');
		$('html').addClass('hideScroll');

		
		let boolClass = $('.navigation').attr('class') == 'navigation navigation-open' ? true : false;

		if(boolClass){
			
			  $('.navigation').addClass('menu-close');

			  // по завершению анимации закрытия удалить все классы , вроде точно подобрал
			  setTimeout(() => {

				$('.navigation').removeClass('navigation-open');
				$('.navigation').removeClass('menu-close');
				$('body').removeClass('hideScroll');
				$('html').removeClass('hideScroll');

			  }, 1500);

		}
		else{
			//анимация открытия
			$('.navigation').addClass('navigation-open');
			// $('body').toggleClass('hideScroll');
			// $('html').toggleClass('hideScroll');
		}
	})

});
