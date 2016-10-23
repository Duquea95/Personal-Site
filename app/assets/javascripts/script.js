$(function() {
    $h1 = $("h1");
    $serviceText = $("p.service");
    $experienceText = $("p.experience");
    $whoAmIText = $("p.whoAmI");
    $extraText = $("p.extra");
    $service  = $("h1#service");
    $experience = $("h1#experience");
    $whoAmI = $("h1#whoAmI");
    $extra = $("h1#extra");


    $h1.on("click",function(){
        var value = $(this).attr("id");

        switch(value){
        case "service":
            $service.addClass("underline");
            $extra.removeClass("underline");
            $whoAmI.removeClass("underline");
            $experience.removeClass("underline");
            $experienceText.addClass("hidden");
            $whoAmIText.addClass("hidden");
            $extraText.addClass("hidden");
            $serviceText.removeClass("hidden");
        break

        case "experience":
            $service.removeClass("underline");
            $extra.removeClass("underline");
            $whoAmI.removeClass("underline");
            $experience.addClass("underline");
            $serviceText.addClass("hidden");
            $whoAmIText.addClass("hidden");
            $extraText.addClass("hidden");
            $experienceText.removeClass("hidden");
        break

        case "whoAmI":
            $service.removeClass("underline");
            $extra.removeClass("underline");
            $whoAmI.addClass("underline");
            $experience.removeClass("underline");
            $serviceText.addClass("hidden");
            $experienceText.addClass("hidden");
            $extraText.addClass("hidden");
            $whoAmIText.removeClass("hidden")
        break

        case "extra":
            $service.removeClass("underline");
            $extra.addClass("underline");
            $whoAmI.removeClass("underline");
            $experience.removeClass("underline");
            $serviceText.addClass("hidden");
            $experienceText.addClass("hidden");
            $whoAmIText.addClass("hidden");
            $extraText.removeClass("hidden")
        break
        }
    });

});
