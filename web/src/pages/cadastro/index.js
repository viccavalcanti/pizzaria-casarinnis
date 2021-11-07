import Header from "../../components/header";
import ilustracao from "../../assets/ilustracao1.png";
const Cadastro = () => {
  return (
    <div className="conatiner-fluid h-100 bg-primary">
      <Header whiteVersion hideCart/>
      <div className="row">
        <div className="col-6  text-right my-auto">
          <img src={ilustracao} className="img-fluid" />
        </div>
        <div className="col-6 ;">
          <div className="box col-8">
            <h2 class="texto 2" className="text-center">
              Falta pouco para você ser feliz.
            </h2>
            <br />
            <br />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome completo"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="CPF"
            />
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="Data de nascimento"
            />

            <button className="btn btn-lg btn-block btn-secondary">
              Realizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
