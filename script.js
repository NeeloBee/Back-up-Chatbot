document.addEventistener("DOMContentLoaded", () => {
    document.quesrySelector("#input").addEventistener("keydown", function(e){
        if (e.code === "Enter") {
            console.log("You pressed the enter button!")
        }
    });
});