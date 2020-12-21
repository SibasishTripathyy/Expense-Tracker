const newNote = document.getElementById('note');
const newDate = document.getElementById('dateOfExpense');
const newAmount = document.getElementById('amount');
const newRow = document.getElementById('tableBody');
const addButton = document.getElementById('addNewExpense')

class addItem {
	constructor(newNote, newDate, newAmount) {
		this.createExpense(newNote, newDate, newAmount);
	}

	createExpense(newNote, newDate, newAmount) {

		var tr = document.createElement("tr");
		tr.classList.add('item');

		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		var td4 = document.createElement("td");
		td1.innerHTML = newNote;
		td2.innerHTML = newDate;
		td3.innerHTML = newAmount;
		td4.innerHTML = '<button id="delete">X</button>';

		td4.onclick = () => {
			tr.remove();
		}

		newRow.appendChild(tr);

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);


	}
}

addButton.addEventListener('click', function() {
	if(newNote.value != "" && newDate.value != "" && newAmount.value != "") {
		new addItem(newNote.value, newDate.value, newAmount.value);
		newNote.value = "";
		newDate.value = "";
		newAmount.value = "";
	}
})