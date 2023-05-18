var basket_counter = 0;
var jacket_price = 0;
var jacket_color= "";
var jacket_size = "";


$(document).ready(function () {
    // <i class="fa-solid fa-minus fa-lg"></i>
    $("#addToBasket").click(function (e) { 
        var basket_switch = ` <div id="plusAndMinus" class="d-flex align-items-center justify-content-center gap-5 m-4">
        <i id="basketMinus" class="fa-solid fa-minus fa-lg" style="color: #ffffff; cursor:pointer"></i>
<span class="basket_number_text" style="color:white">1</span>
<i id="basketPlus" class="fa-solid fa-plus" style="color: #ffffff; cursor:pointer"></i>
</div>`
        $(this).removeClass("justify-content-between");
        $(this).addClass("justify-content-center");
        $(this).children("div:first").addClass("d-none")
        $(this).children("div:nth-child(2)").addClass("d-none")
        $(this).prepend(basket_switch);
        basket_counter+=1
        jacket_price = 120;
        $(".basket_number_text").text(basket_counter);
        $("#jacket-price").text("$120");
        console.log("initialized "+basket_counter);
    console.log("Jacket price "+ jacket_price);
        


    });
    
    
    $("#addToCart").click(function (e) { 
        e.preventDefault();
        if(basket_counter > 0)
        {
            $(".toggle-off").addClass("toggle-off");
            $("#overlay").css("display", "block");
            $(".cart-jacket-price").text("$"+jacket_price);
            $("#cart_counter_size").text(basket_counter);

            if (jacket_color != "" || jacket_size != "")
            {
                $('.color[data-color='+jacket_color+']').parent().addClass("color-circle-border");
                $('.size[data-size='+jacket_size+']').css("background-color", "gray");
            }
        }
        
    });


    $(".color").click(function (e) { 
        e.preventDefault();
        jacket_color = $(this).attr("data-color");
        $(".color").parent().removeClass("color-circle-border");
        $(this).parent().addClass("color-circle-border");
    });
});




// $(".addBasketClick").click(function (e) { 
//     basket_counter+=1
//     jacket_price = 120;
//     $(".basket_number_text").text(basket_counter);
//     $("#jacket-price").text("$120");
//     console.log("initialized "+basket_counter);
//     console.log("Jacket price "+ jacket_price)
    
// });



$(".size").click(function (e) { 
    e.preventDefault();
    jacket_size = $(this).attr("data-size");
    $(".size").css("background-color", "white");
    $(this).css("background-color", "gray")
});


$("body").on("click", "#basketPlus",function (e) {
    if(basket_counter == 0){
        basket_counter += 1;
        jacket_price = 120;
        $(".basket_number_text").text(basket_counter);
        $("#jacket-price").text("$"+(jacket_price));
    }
    else{
        basket_counter+=1
        jacket_price+=120
       $(".basket_number_text").text(basket_counter);
       $("#jacket-price").text("$"+(jacket_price));
    }
   
});

$("body").on("click", "#basketMinus",function (e) {
if (!(basket_counter ==0 || basket_counter==1))
{
    basket_counter-=1
    jacket_price-=120
    $(".basket_number_text").text(basket_counter);
    $("#jacket-price").text("$"+(jacket_price));
}
else{
    $(".basket_number_text").text('0');
    $("#jacket-price").text("$120");
    basket_counter = 0;
    jacket_price = 120;
}
});


$("#cartMinus").click(function (e) {
    var empty_cart_content =`<div class="container">
    <i id="x-mark" class="fa-solid fa-xmark fa-2xl" style="color: #000000;
      cursor:pointer"></i>
    <h3 class="mt-5">CART</h3></div>
    <h3 class="text-center align-center">Empty cart</h3>` 

    e.preventDefault();
    if(basket_counter == 1){
        basket_counter-=1
        $("#overlay").html(empty_cart_content);
        $("#buyNowText").text("CONTINUE SHOPPING");
    }
    else{
        
    basket_counter-=1
    jacket_price-=120
    $("#cart_counter_size").text(basket_counter);
    $(".cart-jacket-price").text("$"+(jacket_price));
}
    }

);




$("body").on("click", "#x-mark" ,function (e) { 

    console.log("display none")
    $("#addToBasket").removeClass("justify-content-center");
    $("#addToBasket").addClass("justify-content-between");
    $("#addToBasket").children("div:first").removeClass("d-none");
    $("#addToBasket").children("div:nth-child(2)").removeClass("d-none");
    $("#plusAndMinus").addClass("d-none");
    $("#overlay").css("display","none");
    $(".toggle-off").removeClass("toggle-off");
    $(".color").parent().removeClass("color-circle-border");
    $(".size").css("background-color", "white");
    $("#jacket-price").text("$120");
    jacket_price = 120;
    jacket_color = "";
    jacket_size = "";
    basket_counter=0;

});


$("#cartPlus").click(function (e) { 
    e.preventDefault();
    basket_counter+=1
    jacket_price+=120
   $("#cart_counter_size").text(basket_counter);
   $(".cart-jacket-price").text("$"+(jacket_price));
    
});


