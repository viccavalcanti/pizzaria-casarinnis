import "./styles.css";

const Product = (props) => {
  return (
    <div className="product col-3">
      <img style={{ boxShadow: '0px 4px 15px 1px rgba(0,0,0,0.52)' }} src={props.img} />
      <button className="btn btn-secondary rounded-circle">+</button>
      <h4>
        <label className="badge badge-secondary">R$ 25,99</label>
      </h4>
      <small>
        <b className="texto">
          Tomato Sauce · Mozzarella · Chicken · Beef · Pepperoni · Onions ·
          Rosemary
        </b>
      </small>
    </div>
  );
};


export default Product;
