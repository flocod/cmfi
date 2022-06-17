// SCRIPT AND FUNCTION
var $cursor = $(".cursor");

function moveCursor(e) {
  TweenLite.to($cursor, 0.5, {
    css: {
      left: e.clientX,
      top: e.clientY,
      opacity: 1,
    },
  });
}

$(window).on("mousemove", moveCursor);

var $contain_cursor = $(".contain_cursor");

function moveContain_cursor(e) {
  TweenLite.to($contain_cursor, 0.7, {
    css: {
      left: e.clientX,
      top: e.clientY,
    },
  });
}
$(window).on("mousemove", moveContain_cursor);

var $point = $(".pointer");

function movePoint(e) {
  TweenLite.to($point, 0.3, {
    css: {
      left: e.clientX,
      top: e.clientY,
    },
  });
}
$(window).on("mousemove", movePoint);

$(window).on("mousemove", () => {
  if ($(".link:hover").length != 0) {
    TweenLite.to($point, 0.3, {
      width: "150px",
      height: "150px",
    });
    TweenLite.to($cursor, 0.3, {
      width: "200px",
      height: "200px",
      "background-color": "#FBECD7",
      border: "none",
    });
  } else {
    TweenLite.to($point, 0.3, { width: "80px", height: "80px" });
    TweenLite.to($cursor, 0.3, {
      width: "20px",
      height: "20px",
      "background-color": "white",
    });
  }
});

$(window).on("mousedown", () => {
  TweenLite.to($cursor, 0.3, {
    width: "200px",
    height: "200px",
    "background-color": "#FBECD7",
    border: "none",
  });
});
$(window).on("mouseup", () => {
  TweenLite.to($cursor, 0.3, {
    width: "20px",
    height: "20px",
    "background-color": "white",
  });
});

// carousel animation
function carous_script() {
  // carousel
  let carouss_img = $(".block_images .images img");
  let carouss_images = {
    img1: $(".img1"),
    img2: $(".img2"),
    img3: $(".img3"),
    img4: $(".img4"),
  };

  let carouss_image_indice = $(".state_carous span");
  let carouss_images_indice = {
    indice1: $(".indice1"),
    indice2: $(".indice2"),
    indice3: $(".indice3"),
    indice4: $(".indice4"),
  };

  let statecarous = 0;
  function animecarouss() {
    if (statecarous == 0) {
      carouss_img.removeClass("active");
      carouss_images.img1.addClass("active");
      statecarous = 1;
      console.log(statecarous);

      carouss_image_indice.removeClass("active");
      carouss_images_indice.indice1.addClass("active");
    } else if (statecarous == 1) {
      carouss_img.removeClass("active");
      carouss_images.img2.addClass("active");
      statecarous = 2;
      console.log(statecarous);

      carouss_image_indice.removeClass("active");
      carouss_images_indice.indice2.addClass("active");
    } else if (statecarous == 2) {
      carouss_img.removeClass("active");
      carouss_images.img3.addClass("active");
      statecarous = 3;
      console.log(statecarous);

      carouss_image_indice.removeClass("active");
      carouss_images_indice.indice3.addClass("active");
    } else if (statecarous == 3) {
      carouss_img.removeClass("active");
      carouss_images.img4.addClass("active");
      statecarous = 0;
      console.log(statecarous);

      carouss_image_indice.removeClass("active");
      carouss_images_indice.indice4.addClass("active");
    }
  }

  function animecarouss_left() {
    switch (statecarous) {
      case 1:
        statecarous = 4 - 1;
        animecarouss();

        break;
      case 2:
        statecarous = 1 - 1;
        animecarouss();

        break;
      case 3:
        statecarous = 2 - 1;
        animecarouss();

        break;
      case 4:
        statecarous = 3 - 1;
        animecarouss();

        break;
      case 0:
        statecarous = 4;
        animecarouss();

        break;

      default:
        statecarous = 0;
        animecarouss();
        break;
    }
  }

  $(".bnt_left_carous").on("click", function () {
    animecarouss_left();
  });
  $(".bnt_right_carous").on("click", function () {
    animecarouss();
  });
  setInterval(animecarouss, 10000);
}

let with_terminal = window.innerWidth; // largeur du terminal
menu_mobil_state = 0;
$("body").on("click", ".btn_menu", () => {
  $(".menu_mobil").toggleClass("menu_mobil_on");
  if (with_terminal > 1000) {
    let actual_page=$('body').attr('page');
    if(actual_page=="no-home"){
      if (menu_mobil_state == 0) {
        $(".colorful").css("display", "none");
        $(".white").css("display", "inline-block");
        menu_mobil_state = 1;
      } else {
        $(".colorful").css("display", "none");
        $(".white").css("display", "inline-block");
        menu_mobil_state = 0;
      }
    }else{
      if (menu_mobil_state == 0) {
        $(".colorful").css("display", "none");
        $(".white").css("display", "inline-block");
        menu_mobil_state = 1;
      } else {
        $(".colorful").css("display", "inline-block");
        $(".white").css("display", "none");
        menu_mobil_state = 0;
      }
    }
  }
});

$("body").on("click", ".item_nav", () => {
  $(".menu_mobil").toggleClass("menu_mobil_on");
});

// menu mobile animation images
CURRENT_LAYER = "image_layer1";
$(document).ready(function () {
  $("body").on("mouseenter", ".menu_navigation .item_nav", function () {
    let num = $(this).attr("number");

    switch (num) {
      case "01":
        $(".image_layer1").addClass("image_layer_active");
        CURRENT_LAYER = ".image_layer1";
        break;
      case "02":
        $(".image_layer2").addClass("image_layer_active");
        CURRENT_LAYER = ".image_layer2";

        break;
      case "03":
        $(".image_layer3").addClass("image_layer_active");
        CURRENT_LAYER = ".image_layer3";

        break;
      case "04":
        $(".image_layer4").addClass("image_layer_active");
        CURRENT_LAYER = ".image_layer4";

        break;
      case "05":
        $(".image_layer5").addClass("image_layer_active");
        CURRENT_LAYER = ".image_layer5";
        break;
    }

    // $('.image_layer').addClass('image_layer_active');
  });

  $("body").on("mouseleave", ".menu_navigation .item_nav", function () {
    $(".image_layer").removeClass("image_layer_active");
  });
});

function progress_doc() {
  let progress_state;
  $(document).ready(function () {
    totalheight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function () {
      progress = (window.pageYOffset / totalheight) * 100;
      progress = Math.round(Number(progress));
      progress = progress + "%";
      header = $(".header .img");

      if (progress_state < progress) {
        $(".header .img").addClass("off");

        console.log("scroll to bottom");
      } else if (window.pageYOffset == 0) {
        $(".header .img").removeClass("off");
        if (window.innerWidth > 1000) {
          $(".scroll_indice").css("display", "flex");
        }
      }

      progress_state = progress;
    };
  });
}
function fn_owl_last_news() {
  owl_last_news = $(".owl_last_news");
  owl_last_news.owlCarousel({
    items: 1,
    // loop: true,
    nav: false,
    // autoplay: true,
    margin: 20,
    responsive: {
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  });


}
$("body").on("click", ".owl_last_news_btn_right", function () {
  owl_last_news.trigger("prev.owl.carousel");
});

$("body").on("click", ".owl_last_news_btn_left", function () {
  owl_last_news.trigger("next.owl.carousel");
});

function fn_owl_last_video() {
  owl_last_video = $(".owl_last_video");
  owl_last_video.owlCarousel({
    items: 1,
    // loop: true,
    nav: false,
    // autoplay: true,
    margin: 20,
    responsive: {
      769: {
        items: 1,
      },
      1041: {
        items: 2,
      },
    },
  });

  
}
$("body").on("click", ".owl_last_video_btn_right", function () {
  owl_last_video.trigger("prev.owl.carousel");
});

$("body").on("click", ".owl_last_video_btn_left", function () {
  owl_last_video.trigger("next.owl.carousel");
});

function fn_owl_cta() {
  owl_cta = $(".owl_cta");
  owl_cta.owlCarousel({
    items: 1,
    // loop: true,
    center: true,
    nav: false,
    // autoplay: true,
    margin: 30,
    responsive: {
      769: {
        items: 1,
      },
      1041: {
        items: 2,
      },
    },
  });

 
}
$("body").on("click", ".owl_cta_btn_right", function () {
  owl_cta.trigger("prev.owl.carousel");
});

$("body").on("click", ".owl_cta_btn_left", function () {
  owl_cta.trigger("next.owl.carousel");
});

function fn_owl_link() {
  owl_link = $(".owl_link");
  owl_link.owlCarousel({
    items: 1,
    loop: true,
    center: false,
    nav: false,
    autoplay: true,
    margin: 20,
    responsive: {
      200: {
        items: 1,
        margin: 7,
      },
      361: {
        items: 2,
      },
      1083: {
        items: 3,
        margin: 7,
      },
      1400: {
        items: 4,
      },
    },
  });

  
}
$("body").on("click", ".owl_link_btn_right", function () {
  owl_link.trigger("prev.owl.carousel");
});

$("body").on("click", ".owl_link_btn_left", function () {
  owl_link.trigger("next.owl.carousel");
});
//END SCRIPT AND FUNTION

// ~load file assets
function load_module(elt, elt_location, call_action) {
  $(elt).load(elt_location, call_action);
}

function loadAll() {
  $("#HEADER").load("assets/header.html", () => {
    progress_doc();
  });
  $("#CAROUSEL").load("assets/carousel.html", () => {
    progress_doc();
    carous_script();
  });
  $("#LAST_NEWS").load("assets/last_news.html", () => {
   
    fn_owl_last_news();
  });
  $("#LAST_VIDEOS").load("assets/last_videos.html", () => {
   
    fn_owl_last_video();
  });
  $("#CTA").load("assets/cta.html", () => {
    
    fn_owl_cta();
  });

  $("#LINK").load("assets/link.html", () => {
    fn_owl_link();
  });
//modification de la fontion onload

  $("#FOOTER").load("assets/footer.html", () => {});
}

window.onload = function () {
  loadAll();
};

var content_site = "";

$("body").on("click", ".home", async () => {

  $('#LOAD_CONTAINER').load("assets/index.html",function(){
    loadAll();
  });
  $("body").attr("page","home");
});


$("body").on("click", ".about", async () => {
  $('#LOAD_CONTAINER').load("assets/about.html",function(){
    $("#CTA").load("assets/cta.html", () => {
      fn_owl_cta();
    });
  
    $("#LINK").load("assets/link.html", () => {
      fn_owl_link();
    });
  });

});

$("body").on("click", ".NOHOME", () => {
 $("body").attr("page","no-home");

});



$(document).ready(function () {
  
  $('body').on('click','.btn_text', function(){
    state= $(this).attr('state');
    target= $(this).attr('target');
    if(state=="short"){
      $(target).removeClass('cut_text');
      $(this).attr('state','full');
      $(this).text('Reduire')
    }else{
      $(target).addClass('cut_text');
      $(this).attr('state','short');
 
      $(this).text('Lire plus  →')
    }
  })

});
