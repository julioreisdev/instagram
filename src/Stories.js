function Story(object) {
  return (
    <div className="story">
      <div>
        <img src={object.image} alt="" />
      </div>
      <p>{object.userName}</p>
    </div>
  );
}

const usersDataSimple = [
  {
    userName: "dann",
    image: "/static/img/dann.jpeg",
  },
  {
    userName: "bill",
    image: "/static/img/bill.jpg",
  },
  {
    userName: "anonymous",
    image: "/static/img/anonymous.png",
  },
  {
    userName: "guanabr",
    image: "/static/img/guanabara.png",
  },
  {
    userName: "igor",
    image: "/static/img/igor.jpg",
  },
  {
    userName: "gabriel",
    image: "/static/img/gabriel.jpg",
  },
  {
    userName: "jobs",
    image: "/static/img/Steve_Jobs.jpg",
  },
  {
    userName: "vanessa",
    image: "/static/img/vanessa.jpeg",
  },
  {
    userName: "messi",
    image: "/static/img/messi.webp",
  },
  {
    userName: "fallen",
    image: "/static/img/fallen.webp",
  },
  {
    userName: "slash",
    image: "/static/img/slash.jpeg",
  },
  {
    userName: "mark",
    image: "/static/img/mark.jpg",
  },
  {
    userName: "myles",
    image: "/static/img/myles.webp",
  },
];

export default function Stories() {
  return (
    <div className="stories">
      {usersDataSimple.map(Story)}
      <ion-icon name="chevron-forward-outline"></ion-icon>
    </div>
  );
}
