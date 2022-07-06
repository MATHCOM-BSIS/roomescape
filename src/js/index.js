const ans = [0, 4, 21, 9, '부산일과학고등학교'];

const check_Ans = () => {
    var path = window.location.pathname;
    var page = path.split("/").pop()[0];
    const input = document.getElementsByClassName('answer')[0].value;
    if(input == ans[page])
        window.location.href=`/solved${page}.html`;
    else
        alert('Try Again');
}