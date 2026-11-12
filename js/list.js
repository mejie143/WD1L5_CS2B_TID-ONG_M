// list.js
//create the function that create the list
//use of array
let groceryItems = [];
function addItem() {
    let item = document.getElementById("item_name").value;
    let qty = document.getElementById("item_qty").value;

    //what if the fields are blank
    if (item === "" || qty === ""){
        alert("Please enter both item details!");
        return;
    }

    //store grocery item as an object inside an array
    groceryItems.push ({
        name: item,
        quantity: qty
    });

    //save array to local storage
    localStorage.setItem (
        "groceryItems",
        JSON.stringify(groceryItems)
    );

    displayItems();

}
function displayItems () {
    //set as variable ng <p> of the grocery list
    let groceryList = document.getElementById("groceryList");
    groceryList.innerHTML = "";
    groceryItems.forEach(function(item) {
        let newItem = document.createElement("li");

        newItem.textContent =
            item.name + " - QTY: " + item.quantity;
        groceryList.appendChild(newItem);

        //clear input boxes after clicking add items
        document.getElementById("item_name").value = "";
        document.getElementById("item_qty").value = "";
    });
}
