const check_Ans = () => {
    const input = document.getElementsByClassName("answer")[0].value;
    if (input == 21) window.location.href = `/solvedw.html`;
    else alert("Try Again");
}