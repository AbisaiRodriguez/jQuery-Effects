// $("button").on("click", function(){
//     $('div').fadeOut(1000, function(){
//         console.log("Faded Completed!");
//     });
// });

// $("button").on("click", function(){
//     $('div').fadeIn(1000, function(){
//         console.log("Fade In Completed!");
//     });
// });

// $("button").on("click", function(){
//     $('div').fadeToggle(1000, function(){
//         console.log("Fading toggle");
//     });
// });

// $("button").on("click", function(){
//     $('div').slideDown(1000, function(){
//     });
// });

// $("button").on("click", function(){
//     $('div').slideUp(1000, function(){
//     });
// });

$("button").on("click", function(){
    $('div').slideToggle(1000, function(){
        $(this).remove();
    });
});
