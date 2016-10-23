$(function() {
    $h1 = $("h1");

    $h1.on("click",function(){
        console.log(this.dataset.type);

        switch(this.dataset.type) {
            case "service":
                var datatype = this.dataset.type
                $p = $("p").hidden

                console.log(datatype);
                break;

            case "experience":
                var datatype = this.dataset.type
                $p = $("p").hidden

                console.log(datatype);

                // if($("p").dataset.type == "experience"){
                //     console.log(this);
                //     // this.toggle("hidden");
                // };

                break;

            case "whoAmI":
                var datatype = this.dataset.type
                $p = $("p").hidden

                console.log(datatype);
                break;

            case "extra":
                var datatype = this.dataset.type
                $p = $("p").hidden

                console.log(datatype);
                break;

        }
    })

});
