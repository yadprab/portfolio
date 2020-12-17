const siteFn = () => {
  //get light theme button
  const themeButton = document.querySelector("#light--theme--button");

  const currentIcon = themeButton.innerHTML;

  const navButton = document.querySelector("#nav--button");

  const getTheme = (e) => {
    e.preventDefault();

    const currentTheme = document.body.className;

    themeFn(currentTheme, themeButton, currentIcon);
  };

  const navFn = (e) => {
    e.preventDefault();

    const mobNav = document.querySelector(".mobile--nav");

    mobNav.classList.remove("hide");

    setTimeout(() => {
      mobNav.classList.add("show");
    }, 500);

    closeFn(mobNav);
  };

  setTheme(themeButton);
  //events
  themeButton.addEventListener("click", getTheme);
  navButton.addEventListener("click", navFn);
};

const sunIcon = () => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" style="pointer-events: none;"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>   `;
};

const themeFn = (theme, icon, currentIcon) => {
  const themeObj = {
    theme: "",
    icon: "",
  };
  switch (theme) {
    case "light":
      document.body.className = "dark";

      icon.innerHTML = sunIcon();

      themeObj.theme = document.body.className;

      themeObj.icon = icon.innerHTML;

      localStorage.setItem("siteTheme", JSON.stringify(themeObj));

      break;

    default:
      document.body.className = "light";

      icon.innerHTML = currentIcon;

      themeObj.theme = document.body.className;

      themeObj.icon = icon.innerHTML;

      localStorage.setItem("siteTheme", JSON.stringify(themeObj));

      break;
  }
};

const setTheme = (button) => {
  if (localStorage.getItem("siteTheme") === null) {
    return;
  } else {
    const themeData = JSON.parse(localStorage.getItem("siteTheme"));

    const { theme, icon } = themeData;

    document.body.className = theme;

    button.innerHTML = icon;
  }
};

const closeFn = (nav) => {
  const closeButton = document.querySelector("#close--button");

  const navClose = (e) => {
    e.preventDefault();

    nav.classList.add("hide");
  };

  closeButton.addEventListener("click", navClose);
};

//1.0 main function
window.addEventListener("DOMContentLoaded", siteFn);
