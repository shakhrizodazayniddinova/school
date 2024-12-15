const sections = [
    {title: "Teachers", link: "./pages/teachers.html"},
    {title: "Students", link: "./pages/student.html"},
    {title: "Employees", link: "./pages/employees.html"},
    {title: "Sciences", link: "./pages/science.html"},
    {title: "Rooms", link: "./pages/rooms.html"},
    {title: "Lesson schedules", link: "./pages/lessons.html"},
];

const setCards = () => {
    cards.innerHTML = "";

    sections.map((section) => {
        const cardChildDiv = document.createElement("div");
        cardChildDiv.className = "flex justify-center items-center text-xl font-semibold text-white bg-cyan-950 w-72 h-36 rounded-xl shadow-xl cursor-pointer transition ease-in-out delay-150 hover:scale-110 hover: duration-300";

        const link = document.createElement("a");
        link.href = section.link;
        link.innerHTML = section.title;

        cardChildDiv.appendChild(link);
        cards.appendChild(cardChildDiv);
    });
}
setCards();