let defaultTheme = true;

const switcher: any = () => {
  const root = document.querySelector('html') as HTMLHtmlElement;
  const button = document.querySelector('#switcher') as HTMLButtonElement;
  
  if (defaultTheme) {
    localStorage.setItem('theme', 'dark');
    defaultTheme = !defaultTheme;
  }
  
  const theme = localStorage.getItem('theme');

  if (theme === 'dark') {
    root.style.colorScheme = 'dark';
    button.style.colorScheme = 'dark';
    button.textContent = '🌙';
  } else {
    root.style.colorScheme = 'light';
    button.style.colorScheme = 'light';
    button.textContent = '🔆';
  }

  button.addEventListener('click', () => {
    if (button.textContent != '🌙') {
      button.textContent = '🌙';
      root.style.colorScheme = 'dark';
      button.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      button.textContent = '🔆';
      root.style.colorScheme = 'light';
      button.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    }
  });
};

export { switcher };
