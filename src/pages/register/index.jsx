// CSS
import styles from "./register.module.css";

export function Register() {
  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe as suas histórias</p>
      <form>
        {/* nome */}
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuario"
          />
        </label>

        {/* email */}
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuario"
          />
        </label>

        {/* senha */}
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
          />
        </label>

        {/* confirmar senha */}
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a sua senha"
          />
        </label>

        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
}
