import Header from "../../components/header";
import Product from "../../components/product/card";
import ilustracao from "../../assets/ilustracao1.png";
import "./styles.css";
import { produtos, produtos2 } from './mock';
import Map from "../../components/map";
import { useDispatch, useSelector } from "react-redux";

import { requestPizzaria } from '../../store/modules/shop/actions'
import { useEffect } from "react";

const Pizzaria = () => {
	const dispatch = useDispatch();
	const { pizzaria } = useSelector(state => state.shop)

	console.log('pizza', pizzaria);

	useEffect(() => {
		dispatch(requestPizzaria('61998ec14dcf6c08c5f311a1'))
	}, []);

	return (
		<div className="h-100">
			<Header whiteVersion />
			<div className="container">
				<div className="row">
					<div className="col-2">
						<img src={ilustracao} className="img-fluid" />
						<b className="texto"> Pizzaria Casarinni</b>
						<div className="pizzaria-infos" style={{ display: 'flex', gap: '10px' }}>
							<div>
								<span className="mdi mdi-star"></span>
								<span>
									<b className="texto">4,9</b>
								</span>
							</div>
							<div>
								<span className="texto" className="mdi mdi-cash-usd-outline"></span>
								<span className="texto">$$$</span>
							</div>
							<div>
								<span className="texto" className="mdi mdi-crosshairs-gps"></span>
								<span className="texto">2.9 KM</span>
							</div>
						</div>
						<label className="badge badge-primary">Frete Grátis</label>
					</div>
					<div className="col-10">
						<h5 >Pizzas Completas</h5>
						<br />
						<div className="row">
							{produtos.map(p => <Product key={p.id} img={p.img} />)}
						</div>
						<h5 >Meio a Meio</h5>
						<br />
						<div className="row">
							{produtos2.map(p => <Product key={p.id} img={p.img} />)}
						</div>
					</div>
					<div
						style={{
							width: '84%',
							position: 'relative',
							left: '16%',
							boxShadow: '0px 4px 15px 1px #000000',
							marginBottom: '30px'

						}}
					>
						<Map />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pizzaria;