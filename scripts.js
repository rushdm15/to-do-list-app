
function newItem(){

//javascript
//1. Adding a new item to the list of items:
   let li = document.createElement("li");
   // let inputValue = document.getElementById("input").value; javascript
   let inputValue = $('#input').val();  //jquery
   // let text = document.createTextNode(inputValue); javascript
   li.appendChild(inputValue);  //jquery

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     // let list = document.querySelector('#list'); javascript
     let list = $('#list');
     list.appendChild(li);
   }

 //2. Crossing out an item from the list of items:
   function crossOut() {
 		li.classList.toggle("strike");
 	}

 	li.on("dblclick",crossOut);

 //3(i). Adding the delete button "X":
 	crossOutButton.appendChild(document.createTextNode("X"));
   let crossOutButton = $("crossOutButton");  //jquery
 	deleteButton.append(document.createTextNode("X"));  //jquery
 	li.appendChild(crossOutButton);

 	crossOutButton.on("click", deleteListItem);
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
 		li.classList.add("delete")
 	}
 // 4. Reordering the items:
   $('#list').sortable();

}
