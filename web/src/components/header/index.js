
import logo from '../../assets/logo.png';
import logowhite from '../../assets/logo-white.png';

import "./styles.css";

const Header = ({ whiteVersion, hideCart }) => {
    const openDrawer = () => {
        const event = new CustomEvent('openCart');
        window.dispatchEvent(event);
    }
    return (
        <div className="col-12">
            <header className="py-4 px-4 text-center">
            <img src={whiteVersion ? logowhite : logo } className=" img-fluid "/>
           </header>
            {!hideCart && (<button
             oneclick={()=> openDrawer()}
             className= "btn btn-secondary cart-button"
             >
                <span className="mdi mdi-cart"></span> 4 Ítens 
            </button>
        )}    

        </div>
    );
};

export default Header;