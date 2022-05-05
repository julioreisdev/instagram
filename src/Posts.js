export default function Posts() {
    return (
        <div className="posts">
            <div class="post">
                <div class="post-header">
                    <div>
                        <img src="static/img/slash.jpeg" alt="" />
                        <p>slash</p>
                    </div>
                    <p class="post-header-menu"></p>
                </div>
                <div class="post-main">
                    <img src="static/img/slash.jpeg" alt="" class="post-main-media" />
                </div>
                <div class="post-footer">
                    <div class="action">
                        <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    <div class="liked">
                        <img src="static/img/dann.jpeg" alt="" />
                        <p>Curtido por <strong>dann</strong> e <strong>outras 300.000 pessoas</strong></p>
                    </div>
                    <div class="comment">
                        <ul class="list-comments"></ul>
                        <div class="comment-add">
                            <input class="input-comment" type="text" placeholder="Adicione um comentário..." />
                            <button class="button-comment">Publicar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}