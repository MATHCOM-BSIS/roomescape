const check_Ans = () => {
    const input = document.getElementsByClassName("answer")[0].value;
    if (input == 4) window.location.href = `/solvedq.html`;
    else alert("Try Again");
}