import Header from "../../components/header";
import Product from "../../components/product/card";
import ilustracao from "../../assets/ilustracao1.png";
import "./styles.css";

const Pizzaria = () => {
  return (
    <div className="h-100">
      <Header whiteVersion />
      <div className="container">
				<div className="row">
					<div className="col-2">
					<img src={ilustracao} className="img-fluid" />
						<b class="texto"> Pizzaria Casarinni</b>
						<div className="pizzaria-infos">
							<span className="mdi mdi-star"></span>
							<text>
								<b class="texto">4,9</b>
							</text>
							<span class="texto" className="mdi mdi-cash-usd-outline"></span>
							<text class="texto">$$$</text>
							<span class="texto"className="mdi mdi-crosshairs-gps"></span>
							<text class="texto">2.9 KM</text>
						</div>
						<label className="badge badge-primary">Frete Grátis</label>
					</div>
					<div className="col-10">
						<h5 >Produtos</h5>
						<br />
						<div className="row">
						{[1,2,3,4,5,6,7,8,9].map(p => <Product/>)}
						</div>
					</div>
				</div>
			</div>
			</div>
	);
};

export default Pizzaria;