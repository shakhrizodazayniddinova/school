const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// modal
const openModal = () => {
    (modal.style.display = "none") ? modal.style.display = "block" : modal.style.display = "none";
    modal.classList.add("open-popup");
    sideMainDiv.style.opacity = "0.5";
    modal.style.opacity = "1"; 
}
const closeModalFunc = () => {
    modal.style.display = "none"
    sideMainDiv.style.opacity = "1";
}
closeModal.onclick = () => closeModalFunc()