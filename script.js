function handleThis(e) {
    e.classList.toggle("change");
    if(e.classList.contains('change')) {
        document.getElementsByClassName("menu-links")[0].style.display = 'flex';
    } else {
        document.getElementsByClassName("menu-links")[0].style.display = 'none';
    }
}

// for downloading CV
document.getElementById("about-me").addEventListener('click', () => {
    const link = document.createElement("a");
    link.href = "Images/CV_Arpan_Kumar_Mukherjee.pdf";
    link.download = "CV_Arpan_Mukherjee.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

function delete_menu(e) {
    e.parentNode.style.display = "none";
    document.getElementsByClassName("cont")[0].classList.remove("change");
}