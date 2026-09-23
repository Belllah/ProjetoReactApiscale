import { Link } from 'react-router-dom';
import './Cadastro.css';

function Cadastro() {
  return (
    <main className="cadastro-page auth-page">
      <section className="auth-shell signup-shell" aria-labelledby="signup-title">
        <article className="auth-card signup-card">
          <Link className="brand" to="/" aria-label="Voltar ao início da APISCALE">
            <img src="/assets/images/logocortada.png" alt="Logo Apiscale" />
            <span className="brand-text">APISCALE</span>
          </Link>

          <div className="auth-heading">
            <span className="eyebrow">Comece sua jornada</span>
            <h1 id="signup-title">Crie sua conta</h1>
            <p>
              Escolha seu perfil e prepare sua operação para escalar com tecnologia,
              estratégia e segurança.
            </p>
          </div>

          <form className="auth-form signup-form">
            <div className="account-toggle" aria-label="Tipo de conta">
              <input type="radio" id="person-fisica" name="tipo-conta" defaultChecked />
              <input type="radio" id="person-juridica" name="tipo-conta" />

              <div className="toggle-control">
                <label htmlFor="person-fisica">Pessoa Física</label>
                <label htmlFor="person-juridica">Pessoa Jurídica</label>
                <span className="toggle-indicator" aria-hidden="true" />
              </div>

              <div className="signup-panels">
                <div className="fields-panel physical-panel">
                  <div className="field">
                    <label htmlFor="nome-completo">Nome completo</label>
                    <input
                      type="text"
                      id="nome-completo"
                      name="nome-completo"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" />
                  </div>

                  <div className="field">
                    <label htmlFor="email-pf">E-mail</label>
                    <input type="email" id="email-pf" name="email-pf" placeholder="voce@email.com" />
                  </div>

                  <div className="field">
                    <label htmlFor="telefone-pf">Telefone</label>
                    <input
                      type="tel"
                      id="telefone-pf"
                      name="telefone-pf"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="senha-pf">Senha</label>
                    <input type="password" id="senha-pf" name="senha-pf" placeholder="Crie uma senha" />
                  </div>

                  <div className="field">
                    <label htmlFor="confirmar-senha-pf">Confirmar senha</label>
                    <input
                      type="password"
                      id="confirmar-senha-pf"
                      name="confirmar-senha-pf"
                      placeholder="Repita sua senha"
                    />
                  </div>
                </div>

                <div className="fields-panel company-panel">
                  <div className="field">
                    <label htmlFor="razao-social">Razão social</label>
                    <input
                      type="text"
                      id="razao-social"
                      name="razao-social"
                      placeholder="Nome legal da empresa"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="nome-fantasia">Nome fantasia</label>
                    <input
                      type="text"
                      id="nome-fantasia"
                      name="nome-fantasia"
                      placeholder="Marca ou nome comercial"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="cnpj">CNPJ</label>
                    <input type="text" id="cnpj" name="cnpj" placeholder="00.000.000/0000-00" />
                  </div>

                  <div className="field">
                    <label htmlFor="email-pj">E-mail corporativo</label>
                    <input
                      type="email"
                      id="email-pj"
                      name="email-pj"
                      placeholder="contato@empresa.com"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="telefone-pj">Telefone empresarial</label>
                    <input
                      type="tel"
                      id="telefone-pj"
                      name="telefone-pj"
                      placeholder="(00) 0000-0000"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="responsavel">Nome do responsável</label>
                    <input
                      type="text"
                      id="responsavel"
                      name="responsavel"
                      placeholder="Nome do responsável"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="cargo-responsavel">Cargo do responsável</label>
                    <input
                      type="text"
                      id="cargo-responsavel"
                      name="cargo-responsavel"
                      placeholder="Ex: CTO, CEO, Gerente"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="senha-pj">Senha</label>
                    <input type="password" id="senha-pj" name="senha-pj" placeholder="Crie uma senha" />
                  </div>

                  <div className="field">
                    <label htmlFor="confirmar-senha-pj">Confirmar senha</label>
                    <input
                      type="password"
                      id="confirmar-senha-pj"
                      name="confirmar-senha-pj"
                      placeholder="Repita sua senha"
                    />
                  </div>
                </div>
              </div>
            </div>

            <label className="terms">
              <input type="checkbox" name="termos" required />
              <span>Aceito os termos de uso</span>
            </label>

            <button className="auth-btn auth-btn-primary" type="submit">
              Criar conta
            </button>
          </form>

          <p className="auth-footer">
            Já possui acesso? <Link to="/">Entrar na conta</Link>
          </p>
        </article>
      </section>
    </main>
  );
}

export default Cadastro;
