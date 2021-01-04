'use strict'

let screenWidth = document.documentElement.clientWidth;
const generalHeader = document.querySelector( '.general-header' );
const primaryLayout = generalHeader.querySelector( '.general-header__primary-layout' );
const auxiliaryLayout = generalHeader.querySelector( '.general-header__auxiliary-layout' );
const logoPrime = auxiliaryLayout.querySelector( '.logo__image--primary' );
const logoAux = auxiliaryLayout.querySelector( '.logo__image--auxiliary' );
const cross = primaryLayout.querySelector( '.general-header__toggle--cross' );
const burger = auxiliaryLayout.querySelector( '.general-header__toggle--burger' );
const burgerRect = auxiliaryLayout.querySelectorAll( '.general-header__burger-rect' );
const lining = document.querySelector( '.page__lining' );
const tariffsOpenning = document.querySelector( '.profile__busines-tariff' );
const businesTariffs = document.querySelector( '.busines-tariffs' );
const tariffsClosing = businesTariffs.querySelector( '.busines-tariffs__close' );

//
//  mobile and tablet
//

tariffsOpenning.addEventListener( 'click', function( evt ) {
  evt.preventDefault();
  businesTariffs.classList.remove( 'hidden-entity' );
} );

tariffsClosing.addEventListener( 'click', function( evt ) {
  evt.preventDefault();
  businesTariffs.classList.add( 'hidden-entity' );
} );

if ( screenWidth < 1440 ) {
  auxiliaryLayout.classList.remove( 'hidden-on-mobile' );
  auxiliaryLayout.classList.remove( 'hidden-on-tablet' );
  primaryLayout.classList.add( 'hidden-entity' );
  cross.classList.remove( 'hidden-entity' );

  cross.addEventListener( 'click', function( evt ) {
    evt.preventDefault();
    primaryLayout.classList.add( 'hidden-entity' );
    primaryLayout.classList.remove( 'general-header__primary-layout--positioned' );
  } );

  burger.addEventListener( 'click', function( evt ) {
    evt.preventDefault();
    primaryLayout.classList.remove( 'hidden-entity' );
    primaryLayout.classList.add( 'general-header__primary-layout--positioned' );
  } );

  window.addEventListener( "scroll", function( evt ) {
    evt.preventDefault();

    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      generalHeader.classList.add( 'general-header--scrolled' );
      auxiliaryLayout.classList.add( 'general-header__auxiliary-layout--scrolled' );
      logoPrime.classList.remove( 'hidden-entity' );
      logoAux.classList.add( 'hidden-entity' );
      lining.classList.remove( 'hidden-entity' );


      for ( let i = 0; i < burgerRect.length; i++ ) {
        burgerRect[ i ].classList.add( 'general-header__burger-rect--scrolled' );
      }

    } else {
      generalHeader.classList.remove( 'general-header--scrolled' );
      auxiliaryLayout.classList.remove( 'general-header__auxiliary-layout--scrolled' );
      logoPrime.classList.add( 'hidden-entity' );
      logoAux.classList.remove( 'hidden-entity' );
      lining.classList.add( 'hidden-entity' );

      for ( let i = 0; i < burgerRect.length; i++ ) {
        burgerRect[ i ].classList.remove( 'general-header__burger-rect--scrolled' );
      }

    }
  } );
}

//
// desktop
//

if ( screenWidth > 1439 ) {

  // for creating turn-effect of site navigation text
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const navItems = [];

  for (let i = 0; i < navLinks.length; i++) {
    let navItem = navLinks[ i ].closest('.general-header__nav-item');
    navItems.push(navItem);
    navItems[ i ].addEventListener( 'mouseenter', function( evt ) {
      evt.preventDefault();
      navLinks[ i ].classList.remove( 'translate-down' );
      navLinks[ i ].classList.add( 'translate-up' );
    } );
    navItems[ i ].addEventListener( 'mouseleave', function( evt ) {
      evt.preventDefault();
      navLinks[ i ].classList.remove( 'translate-up' );
      navLinks[ i ].classList.add( 'translate-down' );
    } );
  }

  // for scrolling
  const auxiliaryContainer = auxiliaryLayout.querySelector( '.general-header__container--auxiliary' );
  const siteNav = auxiliaryLayout.querySelector( '.general-header__site-navigation--auxiliary' );

  window.addEventListener( "scroll", function( evt ) {
    evt.preventDefault();

    if ( document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ) {
      generalHeader.classList.add( 'general-header--scrolled' );
      auxiliaryLayout.classList.add( 'general-header__auxiliary-layout--scrolled' );
      auxiliaryContainer.classList.add( 'general-header__container--scrolled' );
      siteNav.classList.add( 'general-header__site-navigation--scrolled' );
      logoPrime.classList.remove( 'hidden-entity' );
      logoAux.classList.add( 'hidden-entity' );
      lining.classList.remove( 'hidden-entity' );

      for ( let i = 0; i < navLinks.length; i++ ) {
        navLinks[ i ].classList.add( 'general-header__nav-link--scrolled' );
      }
    } else {
      generalHeader.classList.remove( 'general-header--scrolled' );
      auxiliaryLayout.classList.remove( 'general-header__auxiliary-layout--scrolled' );
      auxiliaryContainer.classList.remove( 'general-header__container--scrolled' );
      siteNav.classList.remove( 'general-header__site-navigation--scrolled' );
      logoPrime.classList.add( 'hidden-entity' );
      logoAux.classList.remove( 'hidden-entity' );
      lining.classList.add( 'hidden-entity' );

      for ( let i = 0; i < navLinks.length; i++ ) {
        navLinks[ i ].classList.remove( 'general-header__nav-link--scrolled' );
      }
    }
  } );
}
