const sideMainDiv = document.getElementById("sideMainDiv");
const sidebar = document.getElementById("sidebar");
const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
const cards = document.getElementById("cards");
const selected = document.getElementById("selected");
const moonBtn = document.getElementById("moonBtn");
const sunBtn = document.getElementById("sunBtn");
const addressBtn = document.getElementById("addressBtn");
const searchTableInput = document.getElementById("searchTableInput");
const deleteBtn = document.getElementById("deleteBtn");
const deleteAllTable = document.getElementById("deleteAll");


// open and hide sidebar
const ToggleSidebar = () => {
    (sidebar.classList.contains("hide")) ? sidebar.classList.remove("hide") : sidebar.classList.add("hide");
};
toggleSidebarBtn.onclick = () => ToggleSidebar(); 

// open the sidebar using the esc key
const keyUp = (e) => {
    if(e.key == "Escape") sidebar.classList.remove("hide");
};


// table search
const tableSearch = () => {
    const filter = searchTableInput.value.toLowerCase();
    const rows = document.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) { // Assuming the first row is the header
        let cells = rows[i].getElementsByTagName("td");
        let match = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j]) {
                let textValue = cells[j].textContent || cells[j].innerText;

                if (textValue.toLowerCase().indexOf(filter) > -1) {
                    match = true;
                    break;
                }
            }
        }
        (match) ? rows[i].style.display = "" : rows[i].style.display = "none";
    }
};
searchTableInput.onkeyup = () => tableSearch();


// delete tr
const deleteTr = (btn) => {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
// deleteBtn.onclick = () => deleteTr(this);

