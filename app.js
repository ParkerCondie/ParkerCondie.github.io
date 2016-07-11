function submit(){
    var item = document.getElementById("list").value;
    var list = document.getElementById("list2");
    var listitem = document.createElement("li");
    listitem.appendChild(document.createTextNode(item));
    var button = document.createElement("input");
    button.type="button";
    button.value="X";

    function buttonHasBeenClicked(event){
        var parent = event.srcElement.parentElement.parentElement;
        parent.removeChild(event.srcElement.parentElement);
    }
    button.onclick=buttonHasBeenClicked;

    listitem.appendChild(button);
    list.appendChild(listitem);
    document.getElementById("placeholder").value = '';
}