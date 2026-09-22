function FormularioSuporte() {
  return (
    <form className="auth-form">
      <div className="row g-3">
        <div className="col-md-7 field">
          <label htmlFor="nome">Nome Completo</label>
          <input type="text" id="nome" name="nome" placeholder="Nome completo" required />
        </div>

        <div className="col-md-5 field">
          <label htmlFor="empresa">Empresa (Opcional)</label>
          <input type="text" id="empresa" name="empresa" placeholder="Empresa" />
        </div>

        <div className="col-md-12 field">
          <label htmlFor="email">E-mail de Contato</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="seuemail@empresa.com"
            required
          />
        </div>

        <div className="col-12">
          <p className="form-label text-white small mb-2">Prioridade do Atendimento:</p>
          <div className="d-flex flex-wrap gap-3 mb-3">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="prio"
                id="p1"
                value="normal"
                className="form-check-input"
                defaultChecked
              />
              <label htmlFor="p1" className="form-check-label text-white-50">
                Normal
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="prio"
                id="p2"
                value="urgente"
                className="form-check-input"
              />
              <label htmlFor="p2" className="form-check-label text-white-50">
                Urgente
              </label>
            </div>
          </div>
        </div>

        <div className="col-12 field">
          <label htmlFor="mensagem">Sua Mensagem</label>
          <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" required />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input type="checkbox" id="termos" className="form-check-input" required />
            <label htmlFor="termos" className="form-check-label text-white small">
              Aceito os termos de processamento de dados.
            </label>
          </div>
        </div>

        <div className="col-12 mt-4 button-stack">
          <button type="submit" className="btn btn-enviar">
            Enviar Solicitação
          </button>
          <button type="reset" className="btn btn-limpar">
            Limpar
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormularioSuporte;
