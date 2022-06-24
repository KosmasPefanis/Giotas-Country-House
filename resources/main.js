
function changeDisplay(){
    let lang= document.getElementById("dropdownLang");
    if (lang.style.display == "flex"){
        lang.style.display = "none";
    }else if (lang.style.display == "none"){
    lang.style.display = "flex";
    }
}