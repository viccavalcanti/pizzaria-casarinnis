import './styles.css';


const Pizzaria = () => {
return (
    <li className="pizzaria d-inline-block">
        <div className="d-inline-block"><img
              src="https://previews.123rf.com/images/butenkow/butenkow1702/butenkow170202221/75894409-pizza-template-design-logo-vector-illustration-of-icon.jpg"
              className="img-fluid "></img>
              </div>
              <div className="d-inline-block">
                  <b class="texto"> Pizzaria Casarinnis </b>
            <div className="pizzaria-infos">
            
              <span className="mdi mdi-star"></span>
                    
              <text>
                <b class="texto">2,8</b>
              </text>
              <span className="mdi mdi-cash-usd-outline"></span>
              <text class="texto">$$$</text>
              <span className="mdi mdi-crosshairs-gps"></span>
              <text>
              <b class="texto">2,9KM </b>
              </text>
            </div>
            <label className="badge badge-primary">Frete Grátis</label>
            </div>          
    </li>
);
}

export default Pizzaria;