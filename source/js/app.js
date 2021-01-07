'use strict';

jsMode();
window.addEventListener('resize', jsMode);

function jsMode() {
  let screenWidth = document.documentElement.clientWidth;
  const pageBody = document.querySelector('.page__body');
  const generalHeader = document.querySelector('.general-header');
  const logoLink = generalHeader.querySelector('.general-header__logo');
  const logoPrime = generalHeader.querySelector('.logo__image--primary');
  const logoAux = generalHeader.querySelector('.logo__image--auxiliary');
  const toggle = generalHeader.querySelector('.general-header__toggle');
  const burger = toggle.querySelector('.general-header__burger-svg');
  const crosses = toggle.querySelectorAll('.general-header__cross-svg');
  const navigation = generalHeader.querySelector('.general-header__site-navigation');
  const authorization = generalHeader.querySelector('.general-header__authorization');
  const contactsGroup = generalHeader.querySelector('.general-header__contacts-group');
  const initialContactIcons = contactsGroup.querySelectorAll('.contacts-group__svg--initial');
  const inlineContactIcons = contactsGroup.querySelectorAll('.contacts-group__svg--inline');
  const contactsContent = contactsGroup.querySelectorAll('.contacts-group__span');
  const socials = generalHeader.querySelector('.general-header__socials');

  const elements = [
    pageBody,
    generalHeader,
    logoPrime,
    logoAux,
    toggle,
    burger,
    crosses,
    navigation,
    authorization,
    contactsGroup,
    initialContactIcons,
    inlineContactIcons,
    contactsContent,
    socials
  ];

  console.log(elements);

  if (screenWidth < 1440) {
    generalHeader.classList.add('general-header--js');

    if (generalHeader.classList.contains('general-header--index')) {
      generalHeader.classList.add('general-header--index-js');
    }

    logoLink.classList.add('general-header__logo--js');
    logoAux.classList.remove('hidden-before-desktop');
    toggle.classList.remove('hidden-entity');
    toggle.classList.add('general-header__toggle--js');
    burger.classList.add('general-header__burger-svg--js');
    authorization.classList.add('authorization--js');

    const hiddenElements = [
      logoPrime,
      navigation,
      socials
    ];

    hiddenElements.forEach(function (item) {
      item.classList.add('hidden-entity');
    });

    const collapsedElements = [
      authorization,
      contactsGroup
    ];

    collapsedElements.forEach(function (item) {
      item.classList.add('general-header__element');
      item.classList.add('general-header__element--js');
    });

    initialContactIcons.forEach(function (item) {
      item.classList.add('hidden-entity');
    });

    contactsContent.forEach(function (item) {
      item.classList.add('hidden-entity');
    });

    inlineContactIcons.forEach(function (item) {
      item.classList.add('contacts-group__svg--js');
    });
  }

  if (screenWidth > 1439) {
    if (authorization.classList.contains('authorization--js')) {
      generalHeader.classList.remove('authorization--js');
    }

    if (navigation.classList.contains('hidden-entity')) {
      navigation.classList.remove('authorization--js');
    }

    if (contactsGroup.classList.contains('general-header__element')) {
      contactsGroup.classList.remove('general-header__element');
    }

    if (contactsGroup.classList.contains('general-header__element--js')) {
      contactsGroup.classList.remove('general-header__element--js');
    }

    // for creating turn-effect of site navigation text
    const navLinks = document.querySelectorAll('[data-nav-link]');
    const navItems = [];

    for (let i = 0; i < navLinks.length; i++) {
      let navItem = navLinks[i].closest('.general-header__nav-item');
      navItems.push(navItem);
      navItems[i].addEventListener('mouseenter', function (evt) {
        evt.preventDefault();
        navLinks[i].classList.remove('translate-down');
        navLinks[i].classList.add('translate-up');
      });

      navItems[i].addEventListener('mouseleave', function (evt) {
        evt.preventDefault();
        navLinks[i].classList.remove('translate-up');
        navLinks[i].classList.add('translate-down');
      });
    }
  }

  if (pageBody.classList.contains('page__body--index')) {
    const businesTariffs = document.querySelector('.busines-tariffs');
    const tariffsOpenning = document.querySelector('.profile__busines-tariff');
    const tariffsClosing = businesTariffs.querySelector('.busines-tariffs__close');

    tariffsOpenning.addEventListener('click', function (evt) {
      evt.preventDefault();
      businesTariffs.classList.remove('hidden-entity');
    });

    tariffsClosing.addEventListener('click', function (evt) {
      evt.preventDefault();
      businesTariffs.classList.add('hidden-entity');
    });
  }
}

//  mobile and tablet


// tariffsOpenning.addEventListener( 'click', function( evt ) {
//   evt.preventDefault();
//   businesTariffs.classList.remove( 'hidden-entity' );
// } );

// tariffsClosing.addEventListener( 'click', function( evt ) {
//   evt.preventDefault();
//   businesTariffs.classList.add( 'hidden-entity' );
// } );

// if ( screenWidth < 1440 ) {
//   auxiliaryLayout.classList.remove( 'hidden-on-mobile' );
//   auxiliaryLayout.classList.remove( 'hidden-on-tablet' );
//   primaryLayout.classList.add( 'hidden-entity' );
//   cross.classList.remove( 'hidden-entity' );

//   cross.addEventListener( 'click', function( evt ) {
//     evt.preventDefault();
//     primaryLayout.classList.add( 'hidden-entity' );
//     primaryLayout.classList.remove( 'general-header__primary-layout--positioned' );
//   } );

//   burger.addEventListener( 'click', function( evt ) {
//     evt.preventDefault();
//     primaryLayout.classList.remove( 'hidden-entity' );
//     primaryLayout.classList.add( 'general-header__primary-layout--positioned' );
//   } );

//   window.addEventListener( "scroll", function( evt ) {
//     evt.preventDefault();

//     if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
//       generalHeader.classList.add( 'general-header--scrolled' );
//       auxiliaryLayout.classList.add( 'general-header__auxiliary-layout--scrolled' );
//       logoPrime.classList.remove( 'hidden-entity' );
//       logoAux.classList.add( 'hidden-entity' );
//       lining.classList.remove( 'hidden-entity' );


//       for ( let i = 0; i < burgerRect.length; i++ ) {
//         burgerRect[ i ].classList.add( 'general-header__burger-rect--scrolled' );
//       }

//     } else {
//       generalHeader.classList.remove( 'general-header--scrolled' );
//       auxiliaryLayout.classList.remove( 'general-header__auxiliary-layout--scrolled' );
//       logoPrime.classList.add( 'hidden-entity' );
//       logoAux.classList.remove( 'hidden-entity' );
//       lining.classList.add( 'hidden-entity' );

//       for ( let i = 0; i < burgerRect.length; i++ ) {
//         burgerRect[ i ].classList.remove( 'general-header__burger-rect--scrolled' );
//       }

//     }
//   } );
// }


// desktop


// if ( screenWidth > 1439 ) {

//   for creating turn-effect of site navigation text
  // const navLinks = document.querySelectorAll('[data-nav-link]');
  // const navItems = [];

  // for (let i = 0; i < navLinks.length; i++) {
  //   let navItem = navLinks[ i ].closest('.general-header__nav-item');
  //   navItems.push(navItem);
  //   navItems[ i ].addEventListener( 'mouseenter', function( evt ) {
  //     evt.preventDefault();
  //     navLinks[ i ].classList.remove( 'translate-down' );
  //     navLinks[ i ].classList.add( 'translate-up' );
  //   } );
  //   navItems[ i ].addEventListener( 'mouseleave', function( evt ) {
  //     evt.preventDefault();
  //     navLinks[ i ].classList.remove( 'translate-up' );
  //     navLinks[ i ].classList.add( 'translate-down' );
  //   } );
  // }

//   for scrolling
//   const auxiliaryContainer = auxiliaryLayout.querySelector( '.general-header__container--auxiliary' );
//   const siteNav = auxiliaryLayout.querySelector( '.general-header__site-navigation--auxiliary' );

//   window.addEventListener( "scroll", function( evt ) {
//     evt.preventDefault();

//     if ( document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ) {
//       generalHeader.classList.add( 'general-header--scrolled' );
//       auxiliaryLayout.classList.add( 'general-header__auxiliary-layout--scrolled' );
//       auxiliaryContainer.classList.add( 'general-header__container--scrolled' );
//       siteNav.classList.add( 'general-header__site-navigation--scrolled' );
//       logoPrime.classList.remove( 'hidden-entity' );
//       logoAux.classList.add( 'hidden-entity' );
//       lining.classList.remove( 'hidden-entity' );

//       for ( let i = 0; i < navLinks.length; i++ ) {
//         navLinks[ i ].classList.add( 'general-header__nav-link--scrolled' );
//       }
//     } else {
//       generalHeader.classList.remove( 'general-header--scrolled' );
//       auxiliaryLayout.classList.remove( 'general-header__auxiliary-layout--scrolled' );
//       auxiliaryContainer.classList.remove( 'general-header__container--scrolled' );
//       siteNav.classList.remove( 'general-header__site-navigation--scrolled' );
//       logoPrime.classList.add( 'hidden-entity' );
//       logoAux.classList.remove( 'hidden-entity' );
//       lining.classList.add( 'hidden-entity' );

//       for ( let i = 0; i < navLinks.length; i++ ) {
//         navLinks[ i ].classList.remove( 'general-header__nav-link--scrolled' );
//       }
//     }
//   } );
// }
