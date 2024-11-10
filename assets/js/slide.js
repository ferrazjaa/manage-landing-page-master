let count = 1;
document.getElementById("radio1").checked = true;

setInterval (function(){
    nextCard()
},7000)

function nextCard() {
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}