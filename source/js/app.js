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

jsMode();
// window.addEventListener('resize', jsMode);
window.addEventListener('scroll', scrollMode);
// burger.addEventListener('click', openSiteMenu);
// crosses.forEach(function (item) {
//   item.addEventListener('click', closeSiteMenu);
// });

// submitButton.addEventListener('click', showErrorMessage);
// email.addEventListener('click', hideErrorMessage);
// email.addEventListener('blur', showPlaceholder);

// function showErrorMessage(evt) {
//   if (!email.checkValidity()) {
//     evt.preventDefault();
//     email.placeholder = '';
//     email.value = '';
//     errorMessage.classList.remove('hidden-entity');
//   }
// }

// function hideErrorMessage(evt) {
//   evt.preventDefault();
//   if (!errorMessage.classList.contains('hidden-entity')) {
//     errorMessage.classList.add('hidden-entity');
//   }
// }

// function showPlaceholder() {
//   email.placeholder = 'E-mail';
// }

function jsMode() {
  // const elements = [
  //   pageBody,
  //   generalHeader,
  //   container,
  //   logoLink,
  //   logoPrime,
  //   logoAux,
  //   toggle,
  //   burger,
  //   burgerRect,
  //   crosses,
  //   navigation,
  //   authorization,
  //   contactsGroup,
  //   socials,
  //   main
  // ];

  // console.log(elements);

  generalHeader.classList.add("general-header--js");
  main.classList.add("main--js");

  if (screenWidth < 1440) {
    if (generalHeader.classList.contains("general-header--index")) {
      generalHeader.classList.add("general-header--index-js");
    }

    logoAux.classList.remove("hidden-before-desktop");
    toggle.classList.remove("hidden-entity");

    if (screenWidth < 768) {
      authorization.classList.add("hidden-entity");
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
}

function scrollMode() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    generalHeader.classList.add("general-header--scrolled");

    if (!logoAux.classList.contains("hidden-before-desktop")) {
      logoAux.classList.add("hidden-before-desktop");
    }

    if (logoPrime.classList.contains("hidden-entity")) {
      logoPrime.classList.remove("hidden-entity");
    }

    if (screenWidth < 1440) {
      burgerRect.forEach((item) => {
        item.classList.add("general-header__burger-rect--scrolled");
      });
    }

    if (screenWidth > 1439) {
      logoAux.classList.add("hidden-entity");

      if (logoPrime.classList.contains("hidden-on-desktop")) {
        logoPrime.classList.remove("hidden-on-desktop");
      }

      navigation.classList.add("general-header__site-navigation--scrolled");
      contactsGroup.classList.add("general-header__contacts-group--scrolled");
    }

  } else {
    generalHeader.classList.remove("general-header--scrolled");

    if (logoAux.classList.contains("hidden-before-desktop")) {
      logoAux.classList.remove("hidden-before-desktop");
    }

    if (!logoPrime.classList.contains("hidden-entity")) {
      logoPrime.classList.add("hidden-entity");
    }

    if (screenWidth < 1440) {
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
























// function jsMode() {
//   const elements = [
//     pageBody,
//     generalHeader,
//     wrapper,
//     logoPrime,
//     logoAux,
//     toggle,
//     burger,
//     crosses,
//     navigation,
//     authorization,
//     authorizationText,
//     contactsGroup,
//     initialContactIcons,
//     inlineContactIcons,
//     contactsContent,
//     socials
//   ];

//   console.log(elements);

//   if (screenWidth < 1440) {
    // generalHeader.classList.add('general-header--js');

    // if (generalHeader.classList.contains('general-header--index')) {
    //   generalHeader.classList.add('general-header--index-js');
    // }

//     logoLink.classList.add('general-header__logo--js');
//     logoAux.classList.remove('hidden-before-desktop');
//     toggle.classList.remove('hidden-entity');
//     toggle.classList.add('general-header__toggle--js');
//     burger.classList.add('general-header__burger-svg--js');
//     authorization.classList.add('authorization--js');
//     authorizationText.classList.add('authorization__text--js');

//     const hiddenElements = [
//       logoPrime,
//       navigation,
//       socials
//     ];

//     hiddenElements.forEach(function (item) {
//       item.classList.add('hidden-entity');
//     });

//     const collapsedElements = [
//       authorization,
//       contactsGroup
//     ];

//     collapsedElements.forEach(function (item) {
//       item.classList.add('general-header__element');
//       item.classList.add('general-header__element--js');
//     });

//     initialContactIcons.forEach(function (item) {
//       item.classList.add('hidden-entity');
//     });

//     contactsContent.forEach(function (item) {
//       item.classList.add('hidden-entity');
//     });

//     inlineContactIcons.forEach(function (item) {
//       item.classList.add('contacts-group__svg--js');
//     });
//   }

//   if (screenWidth > 1439) {
//     if (authorization.classList.contains('authorization--js')) {
//       generalHeader.classList.remove('authorization--js');
//     }

//     if (navigation.classList.contains('hidden-entity')) {
//       navigation.classList.remove('hidden-entity');
//     }

//     if (contactsGroup.classList.contains('general-header__element')) {
//       contactsGroup.classList.remove('general-header__element');
//     }

//     if (contactsGroup.classList.contains('general-header__element--js')) {
//       contactsGroup.classList.remove('general-header__element--js');
//     }

//     // for creating turn-effect of site navigation text
//     const navLinks = document.querySelectorAll('[data-nav-link]');
//     const navItems = [];

//     for (let i = 0; i < navLinks.length; i++) {
//       let navItem = navLinks[i].closest('.general-header__nav-item');
//       navItems.push(navItem);
//       navItems[i].addEventListener('mouseenter', function (evt) {
//         evt.preventDefault();
//         navLinks[i].classList.remove('translate-down');
//         navLinks[i].classList.add('translate-up');
//       });

//       navItems[i].addEventListener('mouseleave', function (evt) {
//         evt.preventDefault();
//         navLinks[i].classList.remove('translate-up');
//         navLinks[i].classList.add('translate-down');
//       });
//     }
//   }

//   if (pageBody.classList.contains('page__body--index')) {
//     const businesTariffs = document.querySelector('.busines-tariffs');
//     const tariffsOpenning = document.querySelector('.profile__busines-tariff');
//     const tariffsClosing = businesTariffs.querySelector('.busines-tariffs__close');

//     tariffsOpenning.addEventListener('click', function (evt) {
//       evt.preventDefault();
//       businesTariffs.classList.remove('hidden-entity');
//     });

//     tariffsClosing.addEventListener('click', function (evt) {
//       evt.preventDefault();
//       businesTariffs.classList.add('hidden-entity');
//     });
//   }
// }

// function scrollMode() {
  // if (screenWidth < 1440) {
  //   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
  //     generalHeader.classList.add('generalHeader--scrolled');
  //     wrapper.classList.add('general-header__wrapper--scrolled');

      // if (!logoAux.classList.contains('hidden-before-desktop')) {
      //   logoAux.classList.add('hidden-before-desktop');
      // }

      // if (logoPrime.classList.contains('hidden-entity')) {
      //   logoPrime.classList.remove('hidden-entity');
      // }

      // burgerRect.forEach(function (item) {
      //   item.classList.add('general-header__burger-rect--scrolled');
      // });

//     } else {
//       generalHeader.classList.remove('general-header--scrolled');
//       wrapper.classList.remove('general-header__wrapper--scrolled');

//       if (!burger.classList.contains('hidden-entity')) {
//         logoPrime.classList.add('hidden-entity');
//         logoAux.classList.remove('hidden-before-desktop');
//       }

//       burgerRect.forEach(function (item) {
//         item.classList.remove('general-header__burger-rect--scrolled');
//       });
//     }
//   }

//   if (screenWidth > 1439) {
//     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//       generalHeader.classList.add('general-header--scrolled');
//       logoAux.classList.add('hidden-entity');

//       if (logoPrime.classList.contains('hidden-entity')) {
//         logoPrime.classList.remove('hidden-entity');
//       }
//       logoPrime.classList.remove('hidden-on-desktop');

//       if (navigation.classList.contains('hidden-entity')) {
//         navigation.classList.remove('hidden-entity');
//       }
//       navigation.classList.add('general-header__site-navigation--scrolled');

//       inlineContactIcons.forEach(function (item) {
//         if (item.classList.contains('contacts-group__svg--js')) {
//           item.classList.remove('contacts-group__svg--js');
//         }
//         item.classList.add('contacts-group__svg--scrolled');
//       });

//     } else {
//       generalHeader.classList.remove('general-header--scrolled');
//       logoAux.classList.remove('hidden-entity');
//       logoPrime.classList.add('hidden-on-desktop');
//       navigation.classList.remove('general-header__site-navigation--scrolled');
//       inlineContactIcons.forEach(function (item) {
//         item.classList.remove('contacts-group__svg--scrolled');
//       });
//     }
//   }
// }

// function openSiteMenu() {
//   generalHeader.classList.remove('general-header--js');

//   if (generalHeader.classList.contains('general-header--index')) {
//     generalHeader.classList.remove('general-header--index-js');
//   }

//   lowerContainer.classList.add('general-header__container--js');

//   logoLink.classList.remove('general-header__logo--js');

//   if (!logoAux.classList.contains('hidden-before-desktop')) {
//     logoAux.classList.add('hidden-before-desktop');
//   }

//   burger.classList.add('hidden-entity');
//   crosses.forEach(function (item) {
//     item.classList.remove('hidden-entity');
//   });
//   authorization.classList.remove('authorization--js');
//   authorizationText.classList.remove('authorization__text--js');

//   const hiddenElements = [
//     logoPrime,
//     navigation,
//     socials
//   ];

//   hiddenElements.forEach(function (item) {
//     item.classList.remove('hidden-entity');
//   });

//   const collapsedElements = [
//     authorization,
//     contactsGroup
//   ];

//   collapsedElements.forEach(function (item) {
//     item.classList.remove('general-header__element');
//     item.classList.remove('general-header__element--js');
//   });

//   initialContactIcons.forEach(function (item) {
//     item.classList.remove('hidden-entity');
//   });

//   contactsContent.forEach(function (item) {
//     item.classList.remove('hidden-entity');
//   });

//   inlineContactIcons.forEach(function (item) {
//     item.classList.remove('contacts-group__svg--js');
//   });
// }

// function closeSiteMenu() {
//   generalHeader.classList.add('general-header--js');

//   if (generalHeader.classList.contains('general-header--index')) {
//     generalHeader.classList.add('general-header--index-js');
//   }

//   if (!generalHeader.classList.contains('general-header--index')) {
//     generalHeader.classList.add('general-header--index-js');
//   }

//   lowerContainer.classList.remove('general-header__container--js');

//   logoLink.classList.add('general-header__logo--js');

//   if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
//     if (logoAux.classList.contains('hidden-before-desktop')) {
//       logoAux.classList.remove('hidden-before-desktop');
//     }
//   }

//   burger.classList.remove('hidden-entity');
//   crosses.forEach(function (item) {
//     item.classList.add('hidden-entity');
//   });
//   authorization.classList.add('authorization--js');
//   authorizationText.classList.add('authorization__text--js');

//   if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
//     if (!logoPrime.classList.contains('hidden-entity')) {
//       logoPrime.classList.add('hidden-entity');
//     }
//   }

//   const hiddenElements = [
//     // logoPrime,
//     navigation,
//     socials
//   ];

//   hiddenElements.forEach(function (item) {
//     item.classList.add('hidden-entity');
//   });

//   const collapsedElements = [
//     authorization,
//     contactsGroup
//   ];

//   collapsedElements.forEach(function (item) {
//     item.classList.add('general-header__element');
//     item.classList.add('general-header__element--js');
//   });

//   initialContactIcons.forEach(function (item) {
//     item.classList.add('hidden-entity');
//   });

//   contactsContent.forEach(function (item) {
//     item.classList.add('hidden-entity');
//   });

//   inlineContactIcons.forEach(function (item) {
//     item.classList.add('contacts-group__svg--js');
//   });
// }
