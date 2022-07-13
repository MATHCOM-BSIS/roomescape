const check_Ans = () => {
    if(page='q'){
        if(input == 4)
            window.location.href=`/solved${page}.html`;
        else
            alert('Try Again');
    }
    else if(page='w'){
        if(input == 21)
            window.location.href=`/solved${page}.html`;
        else
            alert('Try Again');
    }
    else if(page='e'){
        if(input == 9)
            window.location.href=`/solved${page}.html`;
        else
            alert('Try Again');
    }
    else if(page='r'){
        if(input == '일과학고등학교')
            window.location.href=`/solved${page}.html`;
        else
            alert('Try Again');
    }
    else if(page='t'){
        if(input == 5)
            window.location.href=`/solved${page}.html`;
        else
            alert('Try Again');
    }
}