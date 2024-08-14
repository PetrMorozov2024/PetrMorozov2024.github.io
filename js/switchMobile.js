document.querySelector('.themetoggleMobile').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
    }
    else {
      localStorage.setItem('theme', 'dark')
    }
    addDarkClassToHTMLMobile()
  });
  

function addDarkClassToHTMLMobile() {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');
        document.querySelector('.themetoggleMobile span').textContent = 'dark_mode';
      }
      else {
        document.querySelector('html').classList.remove('dark');
        document.querySelector('.themetoggleMobile span').textContent = 'wb_sunny';
      }
    } catch (err) { }
}

addDarkClassToHTMLMobile();