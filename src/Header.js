export default function Header() {
  return (
    <header>
        <div className="header-content no-mobile">
            <div className="logo">
                <img className="logo-img" src="static/img/logo-instagram.svg" alt="" />
                <div className="vertical-border-icon"></div>
                <img className="logo-name" src="static/img/logo.png" alt="" />
            </div>
            <div className="search">
                <input type="text" placeholder="Pesquisar" />
            </div>
            <div className="header-nav">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
        <div className="header-content-mobile">
            <img className="header-content-mobile-logo" src="static/img/logo-instagram.svg" alt="" />
            <img src="static/img/logo.png" alt="" />
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    </header>
  );
}
