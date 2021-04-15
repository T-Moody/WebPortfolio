function toggleBlur() 
{
    var blur = document.getElementsByClassName("blur");
    for(var i = 0; i < blur.length; i++)
    {
        blur[i].classList.toggle("active")
    }
}

function toggle1() {
    toggleBlur();
    var popup = document.getElementById("popup1");
    popup.classList.toggle("active");
}

function toggle2() {
    toggleBlur();
    var popup = document.getElementById("popup2");
    popup.classList.toggle("active");
}

function toggle3() {
    toggleBlur();
    var popup = document.getElementById("popup3");
    popup.classList.toggle("active");
}
