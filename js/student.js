const student = [
    {
        firstName: "Peter",
        lastName: "Griffin",
        phone: "+7 09842993712",
        class: "11-A",
    },
    {
        firstName: "Lois",
        lastName: "Griffin",
        phone: "+7 09842993712",
        class: "6-V",
    },
    {
        firstName: "Adam",
        lastName: "Peter",
        phone: "+7 09842993712",
        class: "8-B",
    }
];

const studentsTable = document.getElementById("studentsTable");
const tBodyStudentsTable = studentsTable.children[1];

const loaded = () =>{
    student.map((s, i) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${i+1}</td>
            <td>${s.firstName}</td>
            <td>${s.lastName}</td>
            <td colspan="2">${s.phone}</td>
            <td>${s.class}</td>
            <td><button class="btn text-red-700 font-semibold" id="deleteBtn" onclick="deleteTr(this)"><i class="fa-solid fa-trash"></i></button></td>
        `;

        tBodyStudentsTable.append(row);
    });
};

const deleteAllTableFunc = () =>{
    closeModalFunc();
    tBodyStudentsTable.innerHTML = "";
}
deleteAllTable.onclick = () => deleteAllTableFunc();

