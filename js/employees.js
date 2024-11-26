const employees = [
    {
        firstName: "Peter",
        lastName: "Griffin",
        phone: "+7 09842993712",
        jobTitle: "Teacher",
    },
    {
        firstName: "Lois",
        lastName: "Griffin",
        phone: "+7 09842993712",
        jobTitle: "Director",
    },
    {
        firstName: "Adam",
        lastName: "Peter",
        phone: "+7 09842993712",
        jobTitle: "Accountant",
    }
];

const employeesTable = document.getElementById("employeesTable");
const tBodyEmployeesTable = employeesTable.children[1];

const loaded = () => {
    employees.map((e, i) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${i+1}</td>
            <td>${e.firstName}</td>
            <td>${e.lastName}</td>
            <td colspan="2">${e.phone}</td>
            <td>${e.jobTitle}</td>
            <td><button class="btn text-red-700 font-semibold" id="deleteBtn" onclick="deleteTr(this)"><i class="fa-solid fa-trash"></i></button></td>
        `;

        tBodyEmployeesTable.append(row);
    });
};

const deleteAllTableFunc = () =>{
    closeModalFunc();
    tBodyEmployeesTable.innerHTML = "";
}
deleteAllTable.onclick = () => deleteAllTableFunc();