import "./styles.css";

const Product = () => {
  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img
            src="https://parkofideas.com/foodz/demo2/wp-content/uploads/2019/03/demo1-0902744338-1-238x238.jpg"
            className="img-fluid"
          ></img>
        </div>
        <div className="col-6">
        <h6>
            <label className="badge badge-primary">R$ 80,00</label>
          </h6>
          <small>
            <b class="texto">
              Pizza The Pig Peper----Molho de Tomate · Mozzarella · Pepperoni
              Duplo
            </b>
          </small>
          </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

