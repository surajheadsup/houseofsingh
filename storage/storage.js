export const ACTIVE_THEME = 'ACTIVE_THEME';
export const setThemeMode = (value) => {
    localStorage.setItem(ACTIVE_THEME, value)
}

export const getThemeMode = () =>{
    return localStorage.getItem(ACTIVE_THEME);
}
