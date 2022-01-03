export const ACTIVE_THEME = 'ACTIVE_THEME';
export const setThemeMode = (value) => {
    localStorage.setItem(ACTIVE_THEME, value)
}

export const getThemeMode = () =>{
    return localStorage.getItem(ACTIVE_THEME);
}

export const getFullYear = (UNIX_timestamp) => {
    console.log(UNIX_timestamp);
    var a = new Date(parseInt(UNIX_timestamp));
        var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time =  date + '-' + month + '-' + year;
        return time;
}

export const getMonthYear = (UNIX_timestamp) => {
    console.log(UNIX_timestamp);
    var a = new Date(parseInt(UNIX_timestamp));
        var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time =  month + '-' + year;
        return time;
}