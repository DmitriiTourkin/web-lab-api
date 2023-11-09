function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img className="navbar-image-logo" src="https://papik.pro/grafic/uploads/posts/2023-04/thumbs/1681599034_papik-pro-p-shokoladnitsa-logotip-vektor-2.png" width="30" height="30" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Рестораны</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Акции</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Бонусы</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Для бизнеса</a>
                    </li>
                    <li className="nav-item-active">
                        <a className="nav-link" href="#">Меню</a>
                    </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Подарочные карты</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Доставка</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">О компании</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;