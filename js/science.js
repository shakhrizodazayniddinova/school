const science = [
    {
        scienceName: "Biology",
        firstName: "Peter",
        lastName: "Griffin",
        phone: "+7 09842993712",
    },
    {
        scienceName: "History",
        firstName: "Lois",
        lastName: "Griffin",
        phone: "+7 09842993712",
    },
    {
        scienceName: "Music",
        firstName: "Adam",
        lastName: "Peter",
        phone: "+7 09842993712",
    }
];

const scienceTable = document.getElementById("scienceTable");
const tBodyScienceTable = scienceTable.children[1];

const loaded = () => {
    science.map((s, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${i+1}</td>
            <td>${s.scienceName}</td>
            <td>${s.firstName}</td>
            <td colspan="2">${s.lastName}</td>
            <td colspan="2">${s.phone}</td>
            <td><button class="btn text-red-700 font-semibold" id="deleteBtn" onclick="deleteTr(this)"><i class="fa-solid fa-trash"></i></button></td>
        `;

        tBodyScienceTable.append(row);
    });
};

const deleteAllTableFunc = () =>{
    closeModalFunc();
    tBodyScienceTable.innerHTML = "";
}
deleteAllTable.onclick = () => deleteAllTableFunc();