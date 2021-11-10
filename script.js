var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var clear = document.getElementById("clearList");

// CHECK IF THERE IS INPUT
function inputLength () {
	return input.value.length;
}

// ADD ITEMS TO THE LIST
function addListElement() {
	
	// item + event listener to cross off

	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
		li.addEventListener("click", crossOff);
	
	// delete button	
	
	var delButton = document.createElement("button");
		delButton.appendChild(document.createTextNode("Delete"));
		li.appendChild(delButton);
		delButton.addEventListener("click", removeParent);
}

// ADD ITEM ON BUTTON CLICK

function addElementOnClick() {
	if (inputLength() > 0) {
		addListElement();
	}
}

// ADD ITEM ON ENTER

function addElementOnKey(e) {
	if (inputLength() > 0 && e.which === 13) {
		addListElement();
	}
}

// REMOVE ITEM ON DELETE CLICK

function removeParent(p) {
	p.target.parentElement.remove();
}

// CROSS OFF ITEM ON MOUSE CLICK

function crossOff(l) {
	l.target.classList.toggle("done");
}

// CLEARING LIST

function ItemsOff() {
	ul.replaceChildren("");
}


button.addEventListener("click", addElementOnClick);

input.addEventListener("keypress", addElementOnKey);

clear.addEventListener("click", ItemsOff);
