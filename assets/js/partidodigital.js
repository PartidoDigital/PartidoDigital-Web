/* global $ */

Sentry.init({ dsn: 'https://b6fa829c530f4298869e226e12087f77@sentry.io/1504040' });

function collapseNavbar() {
  if (window.pd.layout.indexOf("default") >= 0) {
    if ($(window).scrollTop() > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
      $(".navbar-brand").removeClass("hidden-md-up");
      $("nav .overlay").css("display", "block");
      /*$("#popup").slideDown("slow");
      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + $(window).scrollTop();
      if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        $("#popup").slideUp("slow");
      }*/
    } else {
      $("nav .overlay").css("display", "none");
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".navbar-brand").addClass("hidden-md-up");
      //$("#popup").slideUp("slow");
    }
  }
}

function hashChange() {
  if (window.location.hash) {
    $("body .resaltar").removeClass("resaltar");
    $(window.location.hash).addClass("resaltar");
    $(window.location.hash)
      .nextUntil($(window.location.hash)[0].nodeName + ", .pagina-footer")
      .addClass("resaltar");
    scrollBy(0, -100);
  }
}

$(window).on("hashchange", hashChange);
$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
  if($("body").scrollspy) {
    $("body").scrollspy({ offset: 100 });
  }

  hashChange();

  // Ir a buscar información de finanzas
  $.getJSON("https://spreadsheets.google.com/feeds/list/1ECohuUeBik_2rxvppS3sBHqm_gXpuNbOOYqRoMGans0/1/public/values?alt=json", 
  function(data) {
    var temp = data.feed.entry[1]["gsx$_cokwr"]["$t"];
    $("#finanzas-ingresos-uyu").html("$" + temp.substring(0, temp.indexOf(","))).removeClass("loading");
    temp = data.feed.entry[1]["gsx$_cpzh4"]["$t"];
    $("#finanzas-egresos-uyu").html("$" + temp.substring(0, temp.indexOf(","))).removeClass("loading");
    temp = data.feed.entry[2]["gsx$_cokwr"]["$t"]
    $("#finanzas-ingresos-usd").html("$" + temp.substring(0, temp.indexOf(","))).removeClass("loading");
    temp = data.feed.entry[2]["gsx$_cpzh4"]["$t"]
    $("#finanzas-egresos-usd").html("$" + temp.substring(0, temp.indexOf(","))).removeClass("loading");
  }).fail(function() {
    $("#finanzas-ingresos-uyu").html("Error :(");
    $("#finanzas-egresos-uyu").html("Error :(");
    $("#finanzas-ingresos-usd").html("Error :(");
    $("#finanzas-egresos-usd").html("Error :(");
  });

  $.getJSON("https://digo.mivoz.uy/about.json", 
  function(data) {
    $("#mivoz-temas").html(data.about.stats.topic_count).removeClass("loading");
    $("#mivoz-participaciones").html(data.about.stats.post_count).removeClass("loading");
    $("#mivoz-usuarios").html(data.about.stats.user_count).removeClass("loading");
    $("#mivoz-megusta").html(data.about.stats.like_count).removeClass("loading");
  }).fail(function() {
    $("#mivoz-temas").html("Error :(");
    $("#mivoz-participaciones").html("Error :(");
    $("#mivoz-usuarios").html("Error :(");
    $("#mivoz-megusta").html("Error :(");
  });

  $('.navbar-nav>li>a:not(.dropdown-toggle)').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
});