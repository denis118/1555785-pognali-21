'use strict'

const generalHeader = document.querySelector( '.general-header' );
const primaryLayout = generalHeader.querySelector( '.general-header__primary-layout' );
const auxiliaryLayout = generalHeader.querySelector( '.general-header__auxiliary-layout' );
const logoPrime = generalHeader.querySelectorAll( '.logo__svg-primary' );
const logoAux = generalHeader.querySelectorAll( '.logo__svg-auxiliary' );
const cross = primaryLayout.querySelector( '.general-header__cross-button' );
const burger = auxiliaryLayout.querySelector( '.general-header__burger-button' );
const burgerRect = auxiliaryLayout.querySelectorAll( '.general-header__burger-rect' );
const crossSvg = primaryLayout.querySelector( '.general-header__cross-svg' );
const lining = document.querySelector( '.page__lining' );

const switchLayout = function() {
  generalHeader.style.position = 'fixed';
  lining.classList.remove( 'invisible' );
  primaryLayout.classList.add( 'invisible' );
  // auxiliaryLayout.classList.remove( 'invisible' );
  auxiliaryLayout.style.display = 'flex';

  if ( generalHeader.classList.contains( 'general-header--form' ) ) {
    auxiliaryLayout.classList.add( 'general-header__auxiliary-layout--form' );
  }

  if ( generalHeader.classList.contains( 'general-header--catalog' ) ) {
    auxiliaryLayout.classList.add( 'general-header__auxiliary-layout--catalog' );
  }

  cross.classList.remove( 'invisible' );
  crossSvg.classList.remove( 'invisible' );
}

switchLayout();

burger.addEventListener( 'click', function() {
  primaryLayout.classList.remove( 'invisible' );
  primaryLayout.classList.add( 'general-header__primary-layout--positioned' );
} );

cross.addEventListener( 'click', function() {
  primaryLayout.classList.add( 'invisible' );
  primaryLayout.classList.remove( 'general-header__primary-layout--positioned' );
} );

window.onscroll = function() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    auxiliaryLayout.classList.add( 'general-header__auxiliary-layout--scroll' );
    logoPrime[ 0 ].classList.remove( 'invisible' );
    logoAux[ 0 ].classList.add( 'invisible' );
    for ( let i = 0; i < burgerRect.length; i++ ) {
      burgerRect[ i ].classList.add( 'general-header__burger-rect--scroll' );
    }
  } else {
    auxiliaryLayout.classList.remove( 'general-header__auxiliary-layout--scroll' );
    logoPrime[ 0 ].classList.add( 'invisible' );
    logoAux[ 0 ].classList.remove( 'invisible' );
    for ( let i = 0; i < burgerRect.length; i++ ) {
      burgerRect[ i ].classList.remove( 'general-header__burger-rect--scroll' );
    }
  }
};
