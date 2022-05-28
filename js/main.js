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
    TweenLite.to($point, 0.3, { width: "80px", height: "80px", });
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

setInterval(animecarouss, 10000);

menu_mobil_state=0;
$('.btn_menu').on('click',()=>{
    $('.menu_mobil').toggleClass('menu_mobil_on');
    
    if(menu_mobil_state == 0){
        $('.colorful').css('display','none');
        $('.white').css('display','inline-block');
        menu_mobil_state= 1;
    }else{
        $('.colorful').css('display','inline-block');
        $('.white').css('display','none');
        menu_mobil_state= 0;
    }
})



// menu mobile animation images


CURRENT_LAYER='image_layer1';
$(document).ready(function () {
  $('.menu_navigation .item_nav').on('mouseenter',function(){

      let num= $(this).attr('number');
  
      // if(num=='01'){
      //   $('.image_layer').removeClass('image_layer_active');
      //   $('.image_layer1').addClass('image_layer_active');
      //   CURRENT_LAYER='.image_layer1';
      // }else if(num=='02'){
      //   $('.image_layer').removeClass('image_layer_active');
      //   $('.image_layer2').addClass('image_layer_active');
      //   CURRENT_LAYER='.image_layer2';
      // }else if(num=='03'){
      //   $('.image_layer').removeClass('image_layer_active');
      //   $('.image_layer3').addClass('image_layer_active');
      //   CURRENT_LAYER='.image_layer3';
      // }else if(num=='04'){
      //   $('.image_layer').removeClass('image_layer_active');
      //   $('.image_layer4').addClass('image_layer_active');
      //   CURRENT_LAYER='.image_layer4';
      // }else if(num=='05'){
      //   $('.image_layer').removeClass('image_layer_active');
      //   $('.image_layer5').addClass('image_layer_active');
      //   CURRENT_LAYER='.image_layer5';
      // }

      switch (num) {
        case '01':  $('.image_layer1').addClass('image_layer_active');
        CURRENT_LAYER='.image_layer1';
          break;
        case '02':$('.image_layer2').addClass('image_layer_active');
        CURRENT_LAYER='.image_layer2';
          
          break;
        case '03':$('.image_layer3').addClass('image_layer_active');
        CURRENT_LAYER='.image_layer3';
          
          break;
        case '04':$('.image_layer4').addClass('image_layer_active');
        CURRENT_LAYER='.image_layer4';
          
          break;
        case '05':$('.image_layer5').addClass('image_layer_active');
        CURRENT_LAYER='.image_layer5';
          break;
      }
    
    // $('.image_layer').addClass('image_layer_active');
 
  });


  $('.menu_navigation .item_nav').on('mouseleave',function(){
    $('.image_layer').removeClass('image_layer_active');
  
  });
});