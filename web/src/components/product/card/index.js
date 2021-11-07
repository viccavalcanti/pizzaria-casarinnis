import "./styles.css";

const Product = () => {
  return (
    <div className="product col-3">
      <img src="https://parkofideas.com/foodz/demo2/wp-content/uploads/2019/03/demo1-0901996381-1-238x238.jpg"></img>
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
