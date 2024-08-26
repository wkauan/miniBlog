import { Link, useNavigate } from "react-router-dom";
import styles from "./home.module.css";

import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { PostDetail } from "../../components/postDetails";

export const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>

      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>

      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrado posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
