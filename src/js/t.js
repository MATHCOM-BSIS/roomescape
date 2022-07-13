const check_Ans = () => {
    const input = document.getElementsByClassName("answer")[0].value;
    if (input == 5) window.location.href = `/solvedt.html`;
    else alert("Try Again");
}