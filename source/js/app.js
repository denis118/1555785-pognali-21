'use strict'

const generalHeader = document.querySelector( '.general-header' );
const upperPart = generalHeader.querySelector( '.general-header__upper-part' );
const underPart = generalHeader.querySelector( '.general-header__under-part' );
const logoPrimary = upperPart.querySelector( '.logo__svg-primary' );
const logoAuxiliary = upperPart.querySelector( '.logo__svg-auxiliary' );
const navButton = upperPart.querySelector( '.general-header__site-navigation-button' );
const burger = navButton.querySelector( '.general-header__burger-svg' );
const cross = navButton.querySelector( '.general-header__cross-svg' );

const switchLayout = function() {
  if ( generalHeader.classList.contains( 'general-header--form' ) ||
        generalHeader.classList.contains( 'general-header--catalog' )  ) {
          generalHeader.classList.add( 'general-header--repainted' );
  } else {
    generalHeader.classList.add( 'general-header--repainted-index' );
  }

  underPart.classList.add( 'invisible' );
  logoPrimary.classList.add( 'invisible' );
  logoAuxiliary.classList.remove( 'invisible' );
  navButton.classList.remove( 'invisible' );
  burger.classList.remove( 'invisible' );
}

switchLayout();

navButton.addEventListener( 'click', function() {
  if ( generalHeader.classList.contains( 'general-header--form' )  ) {
    generalHeader.classList.toggle( 'general-header--repainted' );
  }

  if ( generalHeader.classList.contains( 'general-header--catalog' )  ) {
    generalHeader.classList.toggle( 'general-header--repainted' );
  }

  if ( !generalHeader.classList.contains( 'general-header--form' )
      && !generalHeader.classList.contains( 'general-header--catalog' ) ) {
        generalHeader.classList.toggle( 'general-header--repainted-index' );
  }

  underPart.classList.toggle( 'invisible' );
  underPart.classList.toggle( 'general-header__under-part--visible' );
  logoPrimary.classList.toggle( 'invisible' );
  logoAuxiliary.classList.toggle( 'invisible' );
  burger.classList.toggle( 'invisible' );
  cross.classList.toggle( 'invisible' );
} );
