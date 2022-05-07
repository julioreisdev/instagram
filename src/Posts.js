import React from "react";

function PostHeader(props) {
  return (
    <div className="post-header">
      <div>
        <img src={props.image} alt={props.userName} />
        <p>{props.userName}</p>
      </div>
      <p className="post-header-menu"></p>
    </div>
  );
}

function PostMain(props) {
  const [likedNow, setLikedNow] = React.useState(false);

  const [iconLike, setIconLike] = React.useState(
    <ion-icon name="heart-outline"></ion-icon>
  );
  function liked() {

    setLikedNow(true);

    setIconLike(
      <img
        className="img-liked"
        src="static/img/Heart-Shadow-icon.png"
        alt=""
      />
    );
  }

  function deslikeButton() {

    setLikedNow(false);

    setIconLike(
      <ion-icon name="heart-outline"></ion-icon>
    );
  }

  function likedButton() {

    setLikedNow(true);

    setIconLike(
      <img
        className="img-liked"
        src="static/img/Heart-Shadow-icon.png"
        alt=""
      />
    );
  }

  function likedButtonRun() {
    if (likedNow === false) {
      likedButton();
    } else {
      deslikeButton();
    }
  }

  return (
    <div>
      <div className="post-main">
        <img
          onClick={liked}
          src={props.imagePost}
          alt=""
          className="post-main-media"
        />
      </div>
      <PostFooter function={likedButtonRun} icon={iconLike} />
    </div>
  );
}

function PostFooter(props) {
  return (
    <div className="post-footer">
      <div className="action">
        <div>
          <span onClick={props.function}>{props.icon}</span>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
      <div className="liked">
        <img src="static/img/dann.jpeg" alt="" />
        <p>
          Curtido por <strong>dann</strong> e{" "}
          <strong>outras 300.000 pessoas</strong>
        </p>
      </div>
      <div className="comment">
        <ul className="list-comments"></ul>
        <div className="comment-add">
          <input
            className="input-comment"
            type="text"
            placeholder="Adicione um comentário..."
          />
          <button className="button-comment">Publicar</button>
        </div>
      </div>
    </div>
  );
}

function Post(object) {
  return (
    <div className="post">
      <PostHeader userName={object.userName} image={object.image} />
      <PostMain imagePost={object.imagePost} />
    </div>
  );
}

const postData = [
  {
    userName: "slash",
    image: "/static/img/slash.jpeg",
    imagePost: "/static/img/slash.jpeg",
  },
  {
    userName: "dann",
    image: "/static/img/dann.jpeg",
    imagePost: "/static/img/dann.jpeg",
  },
];

export default function Posts() {
  return <div className="posts">{postData.map(Post)}</div>;
}
