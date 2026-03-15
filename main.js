function add_item(){
var input = document.getElementById("box");
var list = document.getElementById("list_item");
if(input.value != ""){
var li = document.createElement("li");
var text = document.createElement("span");
text.innerHTML = input.value;
li.appendChild(text);
list.appendChild(li);
input.value = "";

li.onclick = function(){
this.remove();
}
}
else{
alert("please add a task");
}

}