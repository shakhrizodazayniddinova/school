const rooms = [
    {
        roomName: "Biology",
        fullName: "Peter Griffin",
        class: "11-A",
    },
    {
        roomName: "History",
        fullName: "Lois Griffin",
        class: "8-V",
    },
    {
        roomName: "Music",
        fullName: "Adam Peter",
        class: "2-G",
    }
];

const roomsTable = document.getElementById("roomsTable");
const tBodyRoomsTable = roomsTable.children[1];

console.log(tBodyRoomsTable.childNodes[1]);

const loaded = () => {
    rooms.map((r, i) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${i+1}</td>
            <td>${r.roomName}</td>
            <td colspan="2">${r.fullName}</td>
            <td>${r.class}</td>
            <td><button class="btn text-red-700 font-semibold" id="deleteBtn" onclick="deleteTr(this)"><i class="fa-solid fa-trash"></i></button></td>
        `;

        tBodyRoomsTable.append(row);
    });
};

const deleteAllTableFunc = () =>{
    closeModalFunc();
    tBodyRoomsTable.innerHTML = "";
}
deleteAllTable.onclick = () => deleteAllTableFunc();