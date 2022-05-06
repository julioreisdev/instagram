function SidebarFooter() {
    return (
        <div className="sidebar-footer">
            <div>
                <a href="/sobre">Sobre</a>
                <a href="/ajuda">Ajuda</a>
                <a href="/imprensa">Imprensa</a>
                <a href="/api">API</a>
                <a href="/carreiras">Carreiras</a>
                <a href="/privacidade">Privacidade</a>
                <a href="/termos">Termos</a>
                <a href="/localizacoes">Localizações</a>
                <a href="/contas-mais-relevantes">Contas mais relevantes</a>
                <a href="/hashtags">Hashtags</a>
                <a href="/idiomas">Idiomas</a>
            </div>
            <p>&copy;2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    );
}

function SidebarHeader() {
    return (
        <div className="sidebar-header">
            <img src="static/img/julio.webp" alt="" />
            <div>
                <p className="user-name">julioreisdev</p>
                <p className="name">Júlio</p>
            </div>
        </div>
    );
}

function SidebarMain() {
    return (
        <div className="sidebar-content">
            <div class="sidebar-content-title">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
            <div class="sidebar-content-sugestion">
            <img src="static/img/diolinux-logo.png" alt="" />
                <div class="sidebar-content-sugestion-names">
                    <div>
                    <p>diolinux</p>
                    <p class="sugestion-status">Segue você</p>
                    </div>
                    <p class="sugestion-action">Seguir</p>
                </div>
            </div>
        </div>
    );
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarHeader />
            <SidebarMain />
            <SidebarFooter />
        </div>
    );
}