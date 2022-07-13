const check_Ans = () => {
    const input = document.getElementsByClassName("answer")[0].value;
    if (input == 9) window.location.href = `/solvede.html`;
    else alert("Try Again");
}