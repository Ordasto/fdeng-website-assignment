let items_container = null;

window.onload = (event) => {
    items_container = document.getElementById("items-container");
    let remove_buttons = items_container.getElementsByClassName("remove-item-btn");
    
    for (let i = 0; i < remove_buttons.length; i++) {
        remove_buttons[i].addEventListener("click", function (event) {
            remove_item(event)
        });
    }
    
    let quantities = items_container.getElementsByClassName("item-quantity");
    for (let i = 0; i < quantities.length; i++) {
        quantities[i].addEventListener("input", (event) => {
            let item = event.target.closest(".item");
            let price = item.getElementsByClassName("item-price")[0];
            let quantity = event.target;
            if (event.target.value % 1 !== 0) {
                event.target.value = Math.floor(event.target.value);
            }
            if(event.target.value < 1){
                event.target.value = 1;
            }
            item.getElementsByClassName("item-total")[0].textContent = "£" + (price.textContent.substr(1) * quantity.value).toFixed(2);
            
            update_summary();
        });
    }
    update_summary();
}

function update_summary() {
    let totals = items_container.getElementsByClassName("item-total");
    let total = 0;
    for(let i = 0; i < totals.length; i++){
        total += Number(totals[i].textContent.substr(1));
    }
    document.getElementById("items-total-cost").textContent = "£ "+total.toFixed(2);

    document.getElementById("total-cost").textContent = "£ "+(total+4).toFixed(2);
}

function remove_item(event) {
    // /** @type {Element} */
    let item = event.target.closest(".item");
    if (item) {
        item.remove();
    }
    if (items_container.getElementsByClassName("item").length == 0) {
        items_container.innerHTML = `
        <p class="text-center">Your basket is empty</p>
        `
    }
    update_summary();

}
