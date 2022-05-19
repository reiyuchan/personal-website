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
    button.style.backgroundColor = '#111'
    button.textContent = '🌙';
  } else {
    root.style.colorScheme = 'light';
    button.style.backgroundColor = '#f6f6f6'
    button.textContent = '🔆';
  }

  button.addEventListener('click', () => {
    if (button.textContent != '🌙') {
      button.textContent = '🌙';
      root.style.colorScheme = 'dark';
      button.style.backgroundColor = '#111'
      localStorage.setItem('theme', 'dark');
    } else {
      button.textContent = '🔆';
      root.style.colorScheme = 'light';
      button.style.backgroundColor = '#f6f6f6'
      localStorage.setItem('theme', 'light');
    }
  });
};

export { switcher };
