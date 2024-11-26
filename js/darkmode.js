const darkMode = () => {
    let dark = document.body;
    dark.classList.toggle("darkMode");
    moonBtn.classList.toggle('dark');

    if(sunBtn.style.display === "none") {
        sunBtn.style.display = "block" 
        moonBtn.style.display = "none";

        (moonBtn.classList.contains('dark')) ? moonBtn.classList.remove('light'):moonBtn.classList.add('light');
    }else{
        sunBtn.style.display = "none";
        moonBtn.style.display = "block";
    }
    
}
sunBtn.onclick = () => darkMode();
moonBtn.onclick = () => darkMode();