//your code here!
const list = document.getElementById("infi-list");

// Function to add list items
function addListItems(count = 10) {
  let start = list.children.length + 1;
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${start + i}`;
    list.appendChild(li);
  }
}

// Initial load with 10 items
addListItems(10);

// Infinite Scroll logic
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addListItems(2); // Add 2 more items when scrolled to bottom
  }
});

