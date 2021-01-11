"use strict";

let screenWidth = document.documentElement.clientWidth;
const pageBody = document.querySelector(".page__body");
const generalHeader = document.querySelector(".general-header");
const container = generalHeader.querySelector(".general-header__container");
const logoLink = generalHeader.querySelector(".general-header__logo");
const logoPrime = generalHeader.querySelector(".logo__image--primary");
const logoAux = generalHeader.querySelector(".logo__image--auxiliary");
const toggle = generalHeader.querySelector(".general-header__toggle");
const burger = toggle.querySelector(".general-header__burger-svg");
const burgerRect = burger.querySelectorAll(".general-header__burger-rect");
const crosses = toggle.querySelectorAll(".general-header__cross-svg");
const navigation = generalHeader.querySelector(".general-header__site-navigation");
const authorization = generalHeader.querySelector(".general-header__authorization");
const contactsGroup = generalHeader.querySelector(".general-header__contacts-group");
const socials = generalHeader.querySelector(".general-header__socials");
const main = document.querySelector(".main");
const email = document.querySelector("#email");
const errorMessage = document.querySelector("#error-message");
const submitButton = document.querySelector("#submit");
const businesTariffsOpenningButton = document.querySelector(".profile__busines-tariffs");
const businesTariffsClosingButton = document.querySelector(".busines-tariffs__close");
const businesTariffs = document.querySelector(".busines-tariffs");

const menuStateIndicator = {
  isOpen: false,
  isScrolled: false
}

jsMode();
window.addEventListener('resize', jsMode);
window.addEventListener('scroll', scrollMode);

burger.addEventListener('click', openSiteMenu);
crosses.forEach((item) => {
  item.addEventListener('click', closeSiteMenu);
});

submitButton.addEventListener('click', showErrorMessage);
email.addEventListener('click', hideErrorMessage);
email.addEventListener('blur', showPlaceholder);

businesTariffsOpenningButton.addEventListener("click", openBusinesTariffs);
businesTariffsClosingButton.addEventListener("click", closeBusinesTariffs);

function jsMode() {
  screenWidth = document.documentElement.clientWidth;

  generalHeader.classList.add("general-header--js");

  generalHeader.classList.add("general-header--bg-js");
  if (generalHeader.classList.contains("general-header--index")) {
    if (screenWidth > 1439) {
      generalHeader.classList.remove("general-header--bg-js");
    }
  }

  main.classList.add("main--js");

  if (screenWidth < 1440) {
    if (generalHeader.classList.contains("general-header--index")) {
      generalHeader.classList.add("general-header--index-bg-js");
    }

    logoAux.classList.remove("hidden-before-desktop");
    toggle.classList.remove("hidden-entity");

    if (screenWidth < 768) {
      authorization.classList.add("hidden-entity");

      if (!logoLink.classList.contains("general-header__logo--js")) {
        logoLink.classList.add("general-header__logo--js");
      }

      if (!toggle.classList.contains("general-header__toggle--js")) {
        toggle.classList.add("general-header__toggle--js");
      }
    }

    if (screenWidth > 767) {
      if (authorization.classList.contains("hidden-entity")) {
        authorization.classList.remove("hidden-entity");
      }

      authorization.classList.remove("authorization--modified");
    }

    const hiddenElements = [
      logoPrime,
      navigation,
      contactsGroup,
      socials
    ];

    hiddenElements.forEach((item) => {
      item.classList.add("hidden-entity");
    });
  }

  if (screenWidth > 1439) {
    const elements = [
      logoPrime,
      navigation,
      contactsGroup
    ];

    elements.forEach((item) => {
      if (item.classList.contains("hidden-entity")) {
        item.classList.remove("hidden-entity");
      }
    });

    // for creating turn-effect of site navigation text
    const navLinks = document.querySelectorAll('[data-nav-link]');
    const navItems = [];

    for (let i = 0; i < navLinks.length; i++) {
      let navItem = navLinks[i].closest('.general-header__nav-item');
      navItems.push(navItem);

      navItems[i].addEventListener('mouseenter', (evt) => {
        evt.preventDefault();
        navLinks[i].classList.remove('translate-down');
        navLinks[i].classList.add('translate-up');
      });

      navItems[i].addEventListener('mouseleave', (evt) => {
        evt.preventDefault();
        navLinks[i].classList.remove('translate-up');
        navLinks[i].classList.add('translate-down');
      });
    }
  }
}

function scrollMode() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    menuStateIndicator.isScrolled = true;

    generalHeader.classList.remove("general-header--bg-js");
    if (generalHeader.classList.contains("general-header--index-bg-js")) {
      generalHeader.classList.remove("general-header--index-bg-js");
    }

    if (screenWidth > 1439) {
      if (!generalHeader.classList.contains("general-header--scrolled")) {
        generalHeader.classList.add("general-header--scrolled");
      }
    }

    if (!logoAux.classList.contains("hidden-entity")) {
      logoAux.classList.add("hidden-entity");
    }

    if (logoPrime.classList.contains("hidden-entity")) {
      logoPrime.classList.remove("hidden-entity");
    }

    if (screenWidth < 1440) {
      burgerRect.forEach((item) => {
        item.classList.add("general-header__burger-rect--scrolled");
      });

      if (screenWidth < 768) {
        if (logoLink.classList.contains("general-header__logo--js")) {
          logoLink.classList.remove("general-header__logo--js");
        }

        if (toggle.classList.contains("general-header__toggle--js")) {
          toggle.classList.remove("general-header__toggle--js");
        }
      }
    }

    if (screenWidth > 1439) {
      if (logoPrime.classList.contains("hidden-on-desktop")) {
        logoPrime.classList.remove("hidden-on-desktop");
      }

      navigation.classList.add("general-header__site-navigation--scrolled");
      contactsGroup.classList.add("general-header__contacts-group--scrolled");
    }

  } else {
    menuStateIndicator.isScrolled = false;

    if (!menuStateIndicator.isOpen) {
      generalHeader.classList.add("general-header--bg-js");

      if (generalHeader.classList.contains("general-header--index")) {
        generalHeader.classList.add("general-header--index-bg-js");
      }
    }

    if (screenWidth > 1439) {
      generalHeader.classList.remove("general-header--scrolled");

      if (generalHeader.classList.contains("general-header--index")) {
        generalHeader.classList.remove("general-header--bg-js");
      }
    }

    if (screenWidth < 1440) {
      if (!menuStateIndicator.isOpen) {
        if (logoAux.classList.contains("hidden-entity")) {
          logoAux.classList.remove("hidden-entity");
        }

        if (!logoPrime.classList.contains("hidden-entity")) {
          logoPrime.classList.add("hidden-entity");
        }

        if (screenWidth < 768) {
          if (!logoLink.classList.contains("general-header__logo--js")) {
            logoLink.classList.add("general-header__logo--js");
          }

          if (!toggle.classList.contains("general-header__toggle--js")) {
            toggle.classList.add("general-header__toggle--js");
          }
        }
      }

      burgerRect.forEach((item) => {
        item.classList.remove("general-header__burger-rect--scrolled");
      });
    }

    if (screenWidth > 1439) {
      logoAux.classList.remove("hidden-entity");

      if (!logoPrime.classList.contains("hidden-on-desktop")) {
        logoPrime.classList.add("hidden-on-desktop");
      }

      navigation.classList.remove("general-header__site-navigation--scrolled");
      contactsGroup.classList.remove("general-header__contacts-group--scrolled");
    }
  }
}

function openSiteMenu() {
  if (screenWidth < 1440) {
    menuStateIndicator.isOpen = true;

    if (!menuStateIndicator.isScrolled) {
      generalHeader.classList.remove("general-header--bg-js");

      if (generalHeader.classList.contains("general-header--index-bg-js")) {
        generalHeader.classList.remove("general-header--index-bg-js");
      }

      if (!logoAux.classList.contains("hidden-entity")) {
        logoAux.classList.add("hidden-entity");
      }

      if (logoPrime.classList.contains("hidden-entity")) {
        logoPrime.classList.remove("hidden-entity");
      }
    }

    if (screenWidth < 768) {
      if (logoLink.classList.contains("general-header__logo--js")) {
        logoLink.classList.remove("general-header__logo--js");
      }

      if (toggle.classList.contains("general-header__toggle--js")) {
        toggle.classList.remove("general-header__toggle--js");
      }
    }

    burger.classList.add("hidden-entity");

    crosses.forEach((item) => {
      item.classList.remove("hidden-entity");
    });

    if (authorization.classList.contains("hidden-entity")) {
      authorization.classList.remove("hidden-entity");
    }

    if (screenWidth > 767) {
      if (!authorization.classList.contains("authorization--modified")) {
        authorization.classList.add("authorization--modified");
      }
    }

    const hiddenElements = [
      navigation,
      contactsGroup,
      socials
    ];

    hiddenElements.forEach((item) => {
      if (item.classList.contains("hidden-entity")) {
        item.classList.remove("hidden-entity");
      }
    });
  }
}

function closeSiteMenu() {
  if (screenWidth < 1440) {
    menuStateIndicator.isOpen = false;

    if (!menuStateIndicator.isScrolled) {
      generalHeader.classList.add("general-header--bg-js");

      if (generalHeader.classList.contains("general-header--index")) {
        generalHeader.classList.add("general-header--index-bg-js");
      }

      if (logoAux.classList.contains("hidden-entity")) {
        logoAux.classList.remove("hidden-entity");
      }

      if (!logoPrime.classList.contains("hidden-entity")) {
        logoPrime.classList.add("hidden-entity");
      }

      if (screenWidth < 768) {
        if (!logoLink.classList.contains("general-header__logo--js")) {
          logoLink.classList.add("general-header__logo--js");
        }

        if (!toggle.classList.contains("general-header__toggle--js")) {
          toggle.classList.add("general-header__toggle--js");
        }
      }
    }

    burger.classList.remove("hidden-entity");

    crosses.forEach((item) => {
      item.classList.add("hidden-entity");
    });

    if (screenWidth < 768) {
      if (!authorization.classList.contains("hidden-entity")) {
        authorization.classList.add("hidden-entity");
      }
    }

    if (screenWidth > 767) {
      console.log("ok");
      if (authorization.classList.contains("authorization--modified")) {
        authorization.classList.remove("authorization--modified");
      }
    }

    const hiddenElements = [
      navigation,
      contactsGroup,
      socials
    ];

    hiddenElements.forEach((item) => {
      if (!item.classList.contains("hidden-entity")) {
        item.classList.add("hidden-entity");
      }
    });
  }
}

function showErrorMessage(evt) {
  if (!email.checkValidity()) {
    evt.preventDefault();
    email.placeholder = '';
    email.value = '';
    errorMessage.classList.remove('hidden-entity');
  }
}

function hideErrorMessage(evt) {
  evt.preventDefault();
  if (!errorMessage.classList.contains('hidden-entity')) {
    errorMessage.classList.add('hidden-entity');
  }
}

function showPlaceholder() {
  email.placeholder = 'E-mail';
}

function openBusinesTariffs(evt) {
  evt.preventDefault();
  if (businesTariffs.classList.contains("hidden-entity")) {
    businesTariffs.classList.remove("hidden-entity");
  }
}

function closeBusinesTariffs(evt) {
  evt.preventDefault();
  if (!businesTariffs.classList.contains("hidden-entity")) {
    businesTariffs.classList.add("hidden-entity");
  }
}
