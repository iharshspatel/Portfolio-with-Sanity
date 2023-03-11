function themeToggler(){
    let root = document.getElementById("root");
    let theme = root.getAttribute('data-theme');

    theme === 'dark' ? root.setAttribute('data-theme', 'light') : root.setAttribute('data-theme', 'dark')
}

export default themeToggler