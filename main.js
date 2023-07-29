const App = {
  $: {
    openNavBar: document.querySelector('[data-id="open-nav-bar"]'),
    showNav: document.querySelector('[data-id="show-nav"]'),
    hideNav: document.querySelector('[data-id="hide-nav"]'),
    navClick: document.querySelectorAll('[data-id="nav-click"]'),
  },

  init() {
    App.$.openNavBar.addEventListener("click", (event) => {
      App.$.hideNav.classList.remove("hidden");
    });

    App.$.showNav.addEventListener("click", (event) => {
      App.$.hideNav.classList.add("hidden");
    });

    App.$.navClick.forEach((event) => {
      event.addEventListener("click", (event) => {
        App.$.hideNav.classList.add("hidden");
      });
    });
  },
};

window.addEventListener("load", App.init);
