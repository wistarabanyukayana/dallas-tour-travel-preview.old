function openSearch(){document.getElementById("myOverlay").style.display="block"}function closeSearch(){document.getElementById("myOverlay").style.display="none"}!function(a){"use strict";var n=a(window),l=(a(document),a(".loader"));a("#top-bar"),a("#menu-button"),a("#colorPanel");n.on("load",(function(){l.fadeOut("slow")})),a(document).ready((function(){a(".landing-page-navbar a").on("click",(function(n){if(""!==this.hash){n.preventDefault();var l=this.hash;a("html, body").animate({scrollTop:a(l).offset().top},800,(function(){window.location.hash=l}))}}))}))}(jQuery),$("body").mCustomScrollbar({theme:"minimal",callbacks:{whileScrolling:function(){this.mcs.top>=0?($(".navbar").css({position:"relative"}),$("nav").removeClass("height"),$("nav .container").removeClass("padding")):($(".navbar").css({position:"fixed",width:"100%"}),$("nav").addClass("height"),$("nav .container").addClass("padding"))}}}),$(window).on("scroll",(function(){$(window).scrollTop()?$("nav#mynavbar").addClass("black-color"):$("nav#mynavbar").removeClass("black-color")})),$(window).on("scroll",(function(){$(window).scrollTop()?$("nav#mynavbar.bg-light").addClass("black-color"):$("nav#mynavbar.bg-light").removeClass("black-color")})),$(window).on("scroll",(function(){$(window).scrollTop()?$("nav.navbar#mynavbar.navbar-custom.navbar-transparent").addClass("white-color"):$("nav.navbar#mynavbar.navbar-custom.navbar-transparent").removeClass("white-color")})),$(window).on("scroll",(function(){$(window).scrollTop()?$(".main-navbar#mynavbar .navbar-nav a").addClass("black-color1"):$(".main-navbar#mynavbar .navbar-nav a").removeClass("black-color1")})),$(window).on("scroll",(function(){$(window).scrollTop()?$(".main-navbar#mynavbar a.navbar-brand").addClass("black-color1"):$(".main-navbar#mynavbar a.navbar-brand").removeClass("black-color1")})),$(window).on("scroll",(function(){$(window).scrollTop()?$(".main-navbar#mynavbar nav.navbar#mynavbar .navbar-search-link > li:last-child a").addClass("black-color1"):$(".main-navbar#mynavbar nav.navbar#mynavbar .navbar-search-link > li:last-child a").removeClass("black-color1")})),$(window).on("scroll",(function(){$(window).scrollTop()?$("nav.navbar.main-navbar#mynavbar-2.bg-light").addClass("full-width"):$("nav.navbar.main-navbar#mynavbar-2.bg-light").removeClass("full-width")})),$(document).ready((function(){$("#dismiss, .overlay").on("click",(function(){$("#sidebar").removeClass("active"),$(".overlay").removeClass("active")})),$("#sidebarCollapse").on("click",(function(){$("#sidebar").addClass("active"),$(".overlay").addClass("active"),$(".collapse.in").toggleClass("in"),$("a[aria-expanded=true]").attr("aria-expanded","false")}))})),$(".nav-pills .nav-item .nav-link:not(.nav-pills .nav-item .nav-link), .nav-tabs").click((function(){$("ul.nav.nav-tabs li.nav-item.active").removeClass("active")})),$(".nav-links-active .navbar-nav li.nav-item").click((function(){$(".nav-links-active .navbar-nav li.nav-item.active").removeClass("active"),$(this).addClass("active")}));