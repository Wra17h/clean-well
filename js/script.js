$(function () {
	//   // Prettyphoto
	//   // -------------------------------
	$('[data-fancybox="gallery"]').fancybox({
		buttons: [
			"zoom",
			"thumbs",
			"close"
		],
	});

	// Sliders
	// -------------------------------
	$(".certificates").slick({
		slidesToShow: 4,
		responsive: [{
			breakpoint: 961,
			settings: {
				arrows: false,
			}
		}]
	});

	$(".works").slick({
		slidesToShow: 2,
		dots: true,
		centerPadding: "2rem",
		responsive: [{
			breakpoint: 961,
			settings: {
				arrows: false,
			}
		}, {
			breakpoint: 481,
			settings: {
				slidesToShow: 1,
				arrows: false,
			}
		}]
	});

	$(".slide").slick({
		slidesToShow: 1,
		arrows: false,
		responsive: [{
			breakpoint: 961,
			settings: {
				arrows: false,
			}
		}]
	});
	$(".items").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.galleryItem'
	});
	$(".galleryItem").slick({
		slidesToShow: 5,
		lazyLoad: 'ondemand',
		slidesToScroll: 1,
		asNavFor: '.items',
		dots: false,
		arrows: true,
		centerMode: true,
		focusOnSelect: true
	});

	$(".region-container-secondary").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
	});

	
	});