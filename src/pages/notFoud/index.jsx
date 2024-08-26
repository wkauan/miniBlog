import styles from "./notFound.module.css";

import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className={styles.not_found}>
      <h1>404</h1>
      <p>
        Parece que você se perdeu... Não encontramos a página que você
        procurava.
      </p>
      <Link to="/" className="btn btn-dark">
        Voltar
      </Link>
    </div>
  );
};
