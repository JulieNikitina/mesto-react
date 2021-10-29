import logoPath from '../images/header/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Лого"/>
    </header>
  );
}

export default Header;
