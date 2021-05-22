import logo from '../images/logo.svg'

function Header() {
    return (
        <header className="header">
            <a href="https://dalvine.github.io/mesto/index.html" className="header__logo" target="_self">
                <img className="header__image" src={logo} alt="Логотип" />
            </a>
        </header>
    )
}

export default Header