import { useState, useEffect } from 'react';

import './styles.css';
import Dock from 'react-dock';

import Product from '../product/list';

const Sidebar = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    window.addEventListener('openCart', () => {
      setOpened(true);
    });
  }, []);

  return (
    <Dock
      isVisible={opened}
      onVisibleChange={(visible) => {
        setOpened(visible);
      }}
      position="right"
    >
      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>Minha Sacola (5)</h5>
        <div className="row products">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
            <Product key={p} />
          ))}
        </div>
      </div>

      <div className="row align-itens-end footer">
        <div className="col-12 d-flex justify-content-between aline-itens-center">
          <b className="d-inline-block">Total</b>
          <h3>R$90,00</h3>
        </div>
        <button className="btn btn-block btn-lg btn-primary rounded-0 h-50 align-itens-center">
          Finalizar Compra
        </button>
      </div>
    </Dock>
  );
};

export default Sidebar;