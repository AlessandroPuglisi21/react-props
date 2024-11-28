import style from "../components/card.module.css";
import posts from "../components/posts";
export default function Card() {
  return (
    <>
      <main className={style.background}>
        <div className={style.container}>
          {posts.map((post) => (
            <div key={post.id} className={`${style.cardbody}`}>
              <h3>{post.title}</h3>
              <h5>Tag: {post.tags}</h5>
              <p>Contenuto: {post.content}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
