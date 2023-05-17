var basket_counter = 0;
var jacket_price = 0;
var jacket_color= "";
var jacket_size = "";


$(document).ready(function () {
    // <i class="fa-solid fa-minus fa-lg"></i>
    $("#addToBasket").click(function (e) { 
        var basket_switch = ` <div class="d-flex align-items-center justify-content-center gap-5 m-4">
        <i id="basketMinus" class="fa-solid fa-minus fa-lg" style="color: #ffffff; cursor:pointer"></i>
<span class="basket_number_text" style="color:white">1</span>
<i id="basketPlus" class="fa-solid fa-plus" style="color: #ffffff; cursor:pointer"></i>
</div>`
        e.preventDefault();
        $(this).removeClass("justify-content-between");
        $(this).addClass("justify-content-center");
        $(this).children("div:first").addClass("d-none")
        $(this).children("div:nth-child(2)").addClass("d-none")
        $(this).prepend(basket_switch);
        


    });
    
    
    $("#addToCart").click(function (e) { 
        e.preventDefault();
        if(basket_counter > 0)
        {
            $(".toggle-off").addClass("toggle-off");
            $("#overlay").css("display", "block");
            $(".cart-jacket-price").text("$"+jacket_price);
            $("#cart_counter_size").text(basket_counter);
            $('.color[data-color='+jacket_color+']').parent().addClass("color-circle-border");
            $('.size[data-size='+jacket_size+']').css("background-color", "gray");
        }
        
    });


    $(".color").click(function (e) { 
        e.preventDefault();
        jacket_color = $(this).attr("data-color");
        $(".color").parent().removeClass("color-circle-border");
        $(this).parent().addClass("color-circle-border");
    });
});




$(".addBasketClick").click(function (e) { 
    basket_counter+=1
    jacket_price = 120;
    $(".basket_number_text").text(basket_counter);
    $("#jacket-price").text("$120");
    
});

$(".fa-xmark").click(function (e) { 
    e.preventDefault();
    console.log("display none")
    $("#overlay").css("display","none");
    $(".toggle-off").removeClass("toggle-off");
    $(".color").parent().removeClass("color-circle-border");
    $(".size").css("background-color", "white");
    $("#jacket-price").text("120");
    jacket_price = 120;
    jacket_color = "";
    jacket_size = "";
    basket_counter=0;

});

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



