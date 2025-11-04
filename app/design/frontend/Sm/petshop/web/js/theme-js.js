define([
        "jquery",
        "jquerywow",
        "owlcarousel",
        "domReady!"
    ],
    function ($,WOW) {
        /**
         * Theme custom javascript
         */

        // Fix hover on IOS
        $('body').bind('touchstart', function () {
        });

        /**
         * Add parent class to megamenu item
         */
         new WOW().init();
        $('.sm_megamenu_menu > li > div').parent().addClass('parent-item');
        // Search 
        $(".block-search .block-title").click(function(){
           $('.block-search').toggleClass('show-content');
        })
        /**
         * Menu ontop
         */


        if ($('.enable-stickymenu').length) {
            var wd = $(window);
            if ($('.ontop-element').length) {
                var menu_offset_top = $('.ontop-element').offset().top;

                function processScroll() {
                    var scrollTop = wd.scrollTop();
                    if (scrollTop >= menu_offset_top) {
                        $('.ontop-element').addClass('menu-on-top');
                        $('body').addClass('body-on-top');
                    } else if (scrollTop <= menu_offset_top) {
                        $('.ontop-element').removeClass('menu-on-top');
                        $('body').removeClass('body-on-top');
                    }
                }

                processScroll();
                wd.scroll(function () {
                    processScroll();
                });
            }
        }
        // Countdown home page
        /**
         * Menu sidebar mobile
         */
         $(".icon-search").click(function(){
           $('.block-search').toggleClass('show-content');
        })
        $('.mobile-menu #btn-nav-mobile, .nav-overlay').click(function () {
            $('body').toggleClass('show-sidebar-nav');
        });

        $('div[data-move="customer-mobile"]  .header.links').clone().appendTo('#customer-mobile');

        var menuType = $('#sm-header-mobile').data('menutype');

        if (menuType == 'megamenu') {
            $('.btn-submobile').click(function () {
                $(this).prev().slideToggle(200);
                $(this).toggleClass('btnsub-active');
                $(this).parent().toggleClass('parent-active');
            });

            function cloneMegaMenu() {
                var breakpoints = $('#sm-header-mobile').data('breakpoint');
                var doc_width = $(window).width();
                if (doc_width <= breakpoints) {
                    var horizontalMegamenu = $('.sm_megamenu_wrapper_horizontal_menu .horizontal-type');
                    var horizontalMegamenuBouns = $('.sm_megamenu_wrapper_horizontal_menu .horizontal-type-bouns');
                    var verticalMegamenu = $('.sm_megamenu_wrapper_vertical_menu .vertical-type');
                    $('#navigation-mobile').append(horizontalMegamenu);
                     $('#navigation-mobile').append(horizontalMegamenuBouns);
                    $('#navigation-mobile').append(verticalMegamenu);
                } else {
                    var horizontalMegamenu = $('#navigation-mobile .horizontal-type');
                    var horizontalMegamenuBouns = $('#navigation-mobile .horizontal-type-bouns');
                    var verticalMegamenu = $('#navigation-mobile .vertical-type');
                    $('.sm_megamenu_wrapper_horizontal_menu .sambar-inner .mega-content').append(horizontalMegamenu);
                    $('.sm_megamenu_wrapper_horizontal_menu .sambar-inner .mega-content-bouns').append(horizontalMegamenuBouns);
                    $('.sm_megamenu_wrapper_vertical_menu .sambar-inner .mega-content').append(verticalMegamenu);
                }
            }

            cloneMegaMenu();

            $(window).resize(function () {
                cloneMegaMenu();
            });
        } else {
            $('.navigation-mobile > ul li').has('ul').append('<span class="touch-button"><span>open</span></span>');

            $('.touch-button').click(function () {
                $(this).prev().slideToggle(200);
                $(this).toggleClass('active');
                $(this).parent().toggleClass('parent-active');
            });
        }
		/**
         * Hover product style 14 , Hover product style 15
         */

        if ($('.product-2-style').length) {
            $("body").on('mouseenter touchstart', '.products-grid .product-item-info', function () {
                var imageHeight = $(this).find('.product-image-container').height();
                console.log(imageHeight);
                $(this).find('.product-item-details .actions-secondary').css({'top': -1 * (imageHeight / 2 + 20)});
            });
        }
		
        /**
         * Clone minicart mobile
         */

        function cloneCart() {
            var breakpoints = $('#sm-header-mobile').data('breakpoint');
            var doc_width = $(window).width();
            if (doc_width <= breakpoints) {
                var cartDesktop = $('div[data-move="minicart-mobile"] > .minicart-wrapper');
                $('#minicart-mobile').append(cartDesktop);
            } else {
                var cartMobile = $('#minicart-mobile > .minicart-wrapper');
                $('div[data-move="minicart-mobile"]').append(cartMobile);
            }
        }

        cloneCart();

        $(window).resize(function () {
            cloneCart();
        });

    });