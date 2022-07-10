//const ans = [0, 4, 21, 9, '일과학고등학교', 5];

const check_Ans = () => {
    var path = window.location.pathname;
    var page = path.split("/").pop()[0];
    var ans=0;
    if(page='q') ans=4;
    else if(page='w') ans=21;
    else if(page='e') ans=9;
    else if(page='r') ans='일과학고등학교';
    else if(page='t') ans=5;
    const input = document.getElementsByClassName('answer')[0].value;
    if(input == ans)
        window.location.href=`/solved${page}.html`;
    else
        alert('Try Again');
}