
(function ($) {
	"use strict";

	// Page Loader==========>
	$(window).on('load', function () {
		$('.page-loader').fadeOut();
	});



	// Sticky Nav==========>
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 10) {
			$("#header-sticky").removeClass("sticky-menu");
		} else {
			$("#header-sticky").addClass("sticky-menu");
		}
	});


	// Smoth scroll ==========>
	$(function () {
		$('.smoth-scroll').on('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 0
			}, 1500);
			event.preventDefault();
		});
		$(window).on('scroll', 
		function(){
			if ($(this).scrollTop() === 0) {
				$('.smoth-scroll').hide();
			} else {
				$('.smoth-scroll').show();
			}
		});
	});


	// Img Popup==========>
	$(document).ready(function() {
		var modal = $('#modalimg');
		var modalImg = $('.modalim-content');
		var modalDescription = $('.modal-description');
		var closeBtn = $('.close');
		var prevBtn = $('.prev');
		var nextBtn = $('.next');
		var totalThumbnails = $('.thumbnail').length;
	
		$('.thumbnail').click(function() {
			var imgSrc = $(this).find('img').attr('src');
			var imgDesc = $(this).find('.description').html(); // Use .html() to get the HTML content of the description
			modalImg.attr('src', imgSrc);
			modalDescription.html(imgDesc); // Set HTML content of modal description
			modal.css('display', 'flex').hide().fadeIn(); // Open modal with fade-in animation
			$('body').css('overflow-y', 'hidden'); // Prevent scrolling of body content
		});
	
		closeBtn.click(function() {
			modal.fadeOut(function() {
				$(this).css('display', 'none'); // Hide modal with fade-out animation
			});
			$('body').css('overflow-y', 'auto'); // Revert body overflow to auto
		});
	
		prevBtn.click(function() {
			var currentThumbnail = parseInt(modalImg.attr('src').replace(/^.*[\\\/]/, '').replace(/\..+$/, ''));
			var prevThumbnailIndex = (currentThumbnail - 2 + totalThumbnails) % totalThumbnails; // Subtract 2 to go to the previous thumbnail index, considering 0-based index and 1-based image numbering
			var prevThumbnail = $('#thumbnail' + (prevThumbnailIndex + 1)); // Add 1 to the index to match the thumbnail numbering
			var imgSrc = prevThumbnail.find('img').attr('src');
			var imgDesc = prevThumbnail.find('.description').html(); // Use .html() to get the HTML content of the description
			modalImg.attr('src', imgSrc);
			modalDescription.html(imgDesc); // Set HTML content of modal description
		});
	
		nextBtn.click(function() {
			var currentThumbnail = parseInt(modalImg.attr('src').replace(/^.*[\\\/]/, '').replace(/\..+$/, ''));
			var nextThumbnailIndex = (currentThumbnail % totalThumbnails); // If we reach the last thumbnail, go back to the first one
			var nextThumbnail = $('#thumbnail' + (nextThumbnailIndex + 1)); // Add 1 to the index to match the thumbnail numbering
			var imgSrc = nextThumbnail.find('img').attr('src');
			var imgDesc = nextThumbnail.find('.description').html(); // Use .html() to get the HTML content of the description
			modalImg.attr('src', imgSrc);
			modalDescription.html(imgDesc); // Set HTML content of modal description
		});
	
		$(window).click(function(event) {
			if (event.target == modal[0]) {
				modal.fadeOut(function() {
					$(this).css('display', 'none'); // Hide modal with fade-out animation if clicked outside the modal
				});
				$('body').css('overflow-y', 'auto'); // Revert body overflow to auto
			}
		});
	});
	
	
	
	
	
})(jQuery);



