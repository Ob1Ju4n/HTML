/**
 * Created by j.ortiz on 10/2/2015.
 */
var ordered_colors = ["red","cyan","blue","darkblue","lightblue","purple","yellow","lime","magenta","gold","silver","grey","black","orange","brown","maroon","green","olive"].sort();

function load_boxes(qty){

    for(var i = 0, size = 300, pos = 25; i < qty; i++, size -= 20, pos += 10){
        var box = document.createElement("div");
        box.style.border = "1px solid black";
        box.style.width = size+"px";
        box.style.height = size+"px";
        box.style.top = pos+"px";
        box.style.left = pos+"px";
        box.style.backgroundColor = getColor();

        var tgtParent = document.getElementById("boxesBody");
        tgtParent.appendChild(box);
    }
}

function getColor(){
    var color_index = Math.floor(Math.random()*ordered_colors.length);
    return ordered_colors[color_index];
}
