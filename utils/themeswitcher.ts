let defaultTheme = true;

const switcher: any = () => {
  const root = document.querySelector('html') as HTMLHtmlElement;
  const button = document.querySelector('#switcher') as HTMLButtonElement;
  const buttonImage = document.querySelector('#btnImg') as HTMLImageElement;
  const githubLogo = document.querySelector('#logo') as HTMLImageElement;

  if (defaultTheme) {
    localStorage.setItem('theme', 'dark');
    githubLogo.src = '/GitHub-Mark-Light-64px.png';
    defaultTheme = !defaultTheme;
  }

  const theme = localStorage.getItem('theme');

  if (theme === 'dark') {
    root.style.colorScheme = 'dark';
    button.style.backgroundColor = '#111';
    buttonImage.src = '/moon.svg';
    githubLogo.src = '/GitHub-Mark-Light-64px.png';
  } else {
    root.style.colorScheme = 'light';
    button.style.backgroundColor = '#f6f6f6';
    buttonImage.src = '/sun.svg';
    githubLogo.src = '/GitHub-Mark-64px.png';
  }

  button.addEventListener('click', () => {
    if (root.style.colorScheme != 'dark') {
      buttonImage.src = '/moon.svg';
      root.style.colorScheme = 'dark';
      button.style.backgroundColor = '#111';
      githubLogo.src = '/GitHub-Mark-Light-64px.png'
      localStorage.setItem('theme', 'dark');
    } else {
      buttonImage.src = '/sun.svg';
      root.style.colorScheme = 'light';
      button.style.backgroundColor = '#f6f6f6';
      githubLogo.src = '/GitHub-Mark-64px.png'
      localStorage.setItem('theme', 'light');
    }
  });
};

export { switcher };
