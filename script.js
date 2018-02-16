var button = document.querySelector("#header button");
var list = document.querySelector("#list ul");
var itens = document.getElementsByTagName("li");
var closeButton = document.getElementsByClassName("close");

//Adiciona os botoes de apagar a anotacao
for (i = 0; i < itens.length; i++) {
    var close = document.createElement("i");
    close.classList.add("fa");
    close.classList.add("fa-times");
    close.classList.add("close");
    itens[i].appendChild(close);
    
  }

//Apaga a anotacao
function closeLi() {
  for(i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
      this.parentElement.style.display = "none"
    }
  } 
}

//Adiciona um "checado" ao clicar nas anotações
function checkList() {
  for(i = 0; i < itens.length; i++) {
    itens[i].onclick = function() {
      this.children[0].classList.toggle("line-through");
      this.classList.toggle("background");
      this.children[0].children[0].classList.toggle("opacity")
    }
    
  }
}

closeLi();
checkList();

//Criar uma anotacao
button.onclick = function() {
  var li = document.createElement("li");
  var div = document.createElement("div");
  var p = document.createElement("p");
  var check = document.createElement("i");
  var inputValue = document.querySelector("#header input").value;
  var text = document.createTextNode(inputValue);
  check.classList.add("fa");
  check.classList.add("fa-check");
  check.classList.add("check");
  li.appendChild(div);
  div.appendChild(check);
  div.appendChild(p);
  p.appendChild(text);

  if(inputValue === "") {
    alert("You must write something!");
  }
  else{
    list.appendChild(li);
  }
  document.querySelector("#header input").value = "";
  checkList();
  
  var close = document.createElement("i");
  
  close.classList.add("fa");
  close.classList.add("fa-times");
  close.classList.add("close");
  li.appendChild(close);
  
  closeLi();
}












