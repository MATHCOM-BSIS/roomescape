const check_Ans = () => {
    const input = document.getElementsByClassName("answer")[0].value;
    if (input == '일과학고등학교') window.location.href = `/solvedr.html`;
    else alert("Try Again");
}