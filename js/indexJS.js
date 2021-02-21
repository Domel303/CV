function bindEvent() {
    $("#buttonChangeBackground").click(function () {
        /*
        var colorToCompare = "rgb(255,255,255)";
        console.log(document.getElementById("backBody").style.backgroundColor);
        console.log(colorToCompare);

        if (document.body.style.backgroundColor === colorToCompare) {
            document.body.style.background = "rgb(0,0,0)"
            document.getElementById("skillsSection").color = "rgb(255,255,255)";
            console.log("black")
        }else{
            document.body.style.background = "rgb(255,255,255)";
            document.getElementById("skillsSection").color = "rgb(0,0,0)";
            console.log("white")
        }
        */
        document.body.style.background = "rgb(0,159,151)";
        document.getElementById("skillsSection").color = "rgb(255,255,255)";

    })
}