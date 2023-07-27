const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    // add border to tab
    this.classList.add("tab-border")
    // get content item from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // add class show
    tabContentItem.classList.add("show");
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove("show"));
}

// listen for tab clicks
tabItems.forEach(item => item.addEventListener("click", selectItem))