
function newItem(){

//javascript
//1. Adding a new item to the list of items:
   let li = $('<li></li>');  //jquery
   // let inputValue = document.getElementById("input").value; javascript
   let inputValue = $('#input').val();  //jquery
   // let text = document.createTextNode(inputValue); javascript
   li.append(inputValue);  //jquery

   let list = $('#list');
   if (inputValue === '') {
     alert("You must write something!");
   } else {
     // let list = document.querySelector('#list'); javascript
     list.append(li);
   }

 //2. Crossing out an item from the list of items:
    li.on('click', function(){
    // function crossOut() {
 		li.toggleClass("strike");
 	});

 	// li.on("dblclick",crossOut); unneeded

 //3(i). Adding the delete button "X":
 	// crossOutButton.appendChild(document.createTextNode("X"));  javascript
   let crossOutButton = $('<crossOutButton></crossOutButton>');  //jquery
 	 crossOutButton.append(document.createTextNode("X"));  //jquery
 	 li.append(crossOutButton);

 // 	crossOutButton.on("click", deleteListItem);
 // //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
 //   function deleteListItem(){
 // 		li.classList.add("delete")
 	// }
 // 4. Reordering the items:
   $('#list').sortable();

}
