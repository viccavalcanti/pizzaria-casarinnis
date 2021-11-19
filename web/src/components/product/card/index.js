import "./styles.css";

const Product = (props) => {
  return (
    <div className="product col-3">
      <img src={props.img}/>
      <button className="btn btn-secondary rounded-circle">+</button>
      <h4>
        <label className="badge badge-secondary">R$ 25,99</label>
      </h4>
      <small>
        <b class="texto">
          Tomato Sauce · Mozzarella · Chicken · Beef · Pepperoni · Onions ·
          Rosemary
        </b>
      </small>
    </div>
  );
};


export default Product;
