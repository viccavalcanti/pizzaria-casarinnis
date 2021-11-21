import './styles.css';


const Pizzaria = () => {
  return (
    <li className="pizzaria d-inline-block">
      <div className="d-inline-block">
        <img
          src="https://previews.123rf.com/images/butenkow/butenkow1702/butenkow170202221/75894409-pizza-template-design-logo-vector-illustration-of-icon.jpg"
          className="img-fluid "
        />
      </div>
      <div className="d-inline-block">
        <b className="texto"> Pizzaria Casarinnis </b>
        <div className="pizzaria-infos">
          <div>
            <span className="mdi mdi-star"></span>
            <span>
              <b className="texto">4,8</b>
            </span>
          </div>
          <div>
            <span className="mdi mdi-cash-usd-outline"></span>
            <span className="texto">$$$</span>
          </div>
          <div>
            <span className="mdi mdi-crosshairs-gps"></span>
            <span>
              <b className="texto">2,9KM </b>
            </span>
          </div>
        </div>
        <label className="badge badge-primary">Frete Grátis</label>
      </div>
    </li>
  );
}

export default Pizzaria;