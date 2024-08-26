import { Link } from "react-router-dom";
import styles from "./postDetails.module.css";

export const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      {/* TODO: Criar CSS Global para o tamanho da imagem fixa */}
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdBy}>{post.createdBy}</p>

      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>

      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};
