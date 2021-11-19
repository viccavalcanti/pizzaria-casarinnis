import Header from "../../components/header";
import Product from "../../components/product/card";
import ilustracao from "../../assets/ilustracao1.png";
import "./styles.css";
const produtos = [{ id:1,img: "https://parkofideas.com/foodz/demo2/wp-content/uploads/2019/03/demo1-0902421386-1-238x238.jpg"},{ id:2,img: "https://parkofideas.com/foodz/demo2/wp-content/uploads/2019/03/demo1-0901188784-1-238x238.jpg"}, { id:3,img: "https://parkofideas.com/foodz/demo2/wp-content/uploads/2019/03/demo1-0902091382-1-238x238.jpg"},{ id:4,img: "https://parkofideas.com/foodz/demo2/wp-content/uploads/2019/03/demo1-0949356538-1-238x238.jpg"},{ id:5,img: "https://parkofideas.com/foodz/demo2/wp-content/uploads/2019/03/demo1-0902061147-1-238x238.jpg"}, { id:6,img: "https://parkofideas.com/foodz/demo2/wp-content/uploads/2019/03/demo1-0902240709-1-238x238.jpg"},  { id:7,img: "https://parkofideas.com/foodz/demo2/wp-content/uploads/2019/03/demo1-0902744338-1-238x238.jpg"},{ id:8,img: "https://parkofideas.com/foodz/demo2/wp-content/uploads/2019/03/demo1-0902443433-1-238x238.jpg"}]

const produtos2 = [{ id:1,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAN2De9tOtVdJJ9f2XoVL_5HyjSvemDAaIDldscls5bDLSuw9_W7d1KF7FACXhfUv5A8&usqp=CAU"},{ id:2,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7e3W4BYRuSXA-3fDVwaotRTyXi51VapKjAaBKHE8atvKdhDatgGdFDWR3jVzvNAevA4&usqp=CAU"}, { id:3,img: "https://cdn.pigz.app/pigzapp/product/pizza-dois-sabores-6044f6df21ffd.png"},{ id:4,img: "https://duisktnou8b89.cloudfront.net/img/items/60958b124a105.png"},{ id:5,img: "https://static.wixstatic.com/media/d73abe_6e7e0232516841648b1a616dc6314c34~mv2.png/v1/fill/w_408,h_402,al_c,q_85/d73abe_6e7e0232516841648b1a616dc6314c34~mv2.webp"}, { id:6,img: "https://cdn.neemo.com.br/uploads/item/photo/201880/meiameio.png"},  { id:7,img: "https://botusist.com.br/assets/front/img/courses/60b3b7472a7d2.png"},{ id:8,img: "https://criadoresdesite.com.br/cliente/reinopizza/img/pizza_super_familia.png"}]
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
						<h5 >Pizzas Completas</h5>
						<br />
						<div className="row">
						{produtos.map(p => <Product key={p.id}img={p.img}/>)}
						</div>
						<h5 >Meio a Meio</h5>
						<br />
						<div className="row">
						{produtos2.map(p => <Product key={p.id}img={p.img}/>)}
						</div>
					</div>
					
				</div>
			</div>
			</div>
	);
};

export default Pizzaria;