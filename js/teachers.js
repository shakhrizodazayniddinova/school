const teachers = [
    {
        firstName: "Peter",
        lastName: "Griffin",
        phone: "+7 09842993712",
        science: "English",
    },
    {
        firstName: "Lois",
        lastName: "Griffin",
        phone: "+7 09842993712",
        science: "History",
    },
    {
        firstName: "Adam",
        lastName: "Peter",
        phone: "+7 09842993712",
        science: "PI",
    }
];

const teachersTable = document.getElementById("teachersTable");
const tBodyTeachersTable = teachersTable.children[1];

const loaded = () => {

    teachers.map((t, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${i+1}</td>
            <td>${t.firstName}</td>
            <td>${t.lastName}</td>
            <td colspan="2">${t.phone}</td>
            <td>${t.science}</td>
            <td><button class="btn text-red-700 font-semibold" id="deleteBtn" onclick="deleteTr(this)"><i class="fa-solid fa-trash"></i></button></td>
        `;
    
        tBodyTeachersTable.append(row); 
    });

}

const deleteAllTableFunc = () =>{
    closeModalFunc();
    tBodyTeachersTable.innerHTML = "";
}
deleteAllTable.onclick = () => deleteAllTableFunc();
