function SidebarHeader({name, userName, image}) {
  return (
    <div className="sidebar-header">
      <img src={image} alt="" />
      <div>
        <p className="user-name">{userName}</p>
        <p className="name">{name}</p>
      </div>
    </div>
  );
}

function SidebarMainSugestion({name, image, status}) {
  return (
    <div class="sidebar-content-sugestion">
      <img src={image} alt="" />
      <div class="sidebar-content-sugestion-names">
        <div>
          <p>{name}</p>
          <p class="sugestion-status">{status}</p>
        </div>
        <p class="sugestion-action">Seguir</p>
      </div>
    </div>
  );
}

const sugestionsData = [
  {
    name: "diolinux",
    image: "/static/img/diolinux-logo.png",
    status: "Segue você",
  },
  {
    name: "filipe",
    image: "/static/img/filipe.jpeg",
    status: "Segue você",
  },
  {
    name: "lele",
    image: "/static/img/lele.jpeg",
    status: "Segue você",
  },
];

function SidebarMain() {
  return (
    <div className="sidebar-content">
      <div class="sidebar-content-title">
        <p>Sugestões para você</p>
        <p>Ver tudo</p>
      </div>
      {sugestionsData.map(SidebarMainSugestion)}
    </div>
  );
}

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

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarHeader
        name="Júlio"
        userName="julioreisdev"
        image="/static/img/julio.webp"
      />
      <SidebarMain />
      <SidebarFooter />
    </div>
  );
}
