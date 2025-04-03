function addItem() {
    var input = document.getElementById("itemInput");
    var itemText = input.value.trim();
    if (itemText === "") return;
    var li = document.createElement("li");
    li.innerHTML = itemText + '<button class="delete" onclick="removeItem(this)">🗑</button>';
    document.getElementById("Lista").appendChild(li);
    input.value = "";
}

function removeItem(button) {
    button.parentElement.remove();
}
