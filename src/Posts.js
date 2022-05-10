import React from "react";

function PostHeader({userName, image}) {
  return (
    <div className="post-header">
      <div>
        <img src={image} alt={userName} />
        <p>{userName}</p>
      </div>
      <p className="post-header-menu"></p>
    </div>
  );
}

function PostMain({imagePost, type}) {
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
        {
          type === "image"
          ? 
          <img
          onDoubleClick={liked}
          src={imagePost}
          alt=""
          className="post-main-media"/>
          : 
          <video muted autoPlay loop>
            <source src={imagePost} type="video/mp4" />
            <source src={imagePost} type="video/ogg" />
          </video>
        }
        
      </div>
      <PostFooter functio={likedButtonRun} icon={iconLike} />
    </div>
  );
}

function PostFooter({functio, icon}) {
  return (
    <div className="post-footer">
      <div className="action">
        <div>
          <span onClick={functio}>{icon}</span>
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

function Post({userName, imagePost, image, type}) {
  return (
    <div className="post">
      <PostHeader userName={userName} image={image} />
      <PostMain imagePost={imagePost} type={type} />
    </div>
  );
}

const postData = [
  {
    userName: "slash",
    image: "/static/img/slash.jpeg",
    imagePost: "/static/img/slash.jpeg",
    type: "image"
  },
  {
    userName: "dann",
    image: "/static/img/dann.jpeg",
    imagePost: "/static/img/dann.jpeg",
    type: "image"
  },
  {
    userName: "dann",
    image: "/static/img/dann.jpeg",
    imagePost: "/static/video/video.ogv",
    type: "video"
  },
];

export default function Posts() {
  return <div className="posts">{postData.map(Post)}</div>;
}
