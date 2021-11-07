import './styles.css'
import Header from '../../components/header'
import Pizzaria from '../../components/pizzaria'
import Map from '../../components/map'

const Home = ()=> {
    return(
        <div className="h-100">

        <Header/>    
        <div className="container-fluid pizzaria-list-container">
            <div className="col-12 px-4 text-center">
                <h5>Mais Próximos de Você </h5>
            </div>
            <ul className="col-12 pizzaria-list">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map ((p => 
                     <Pizzaria/>
                     ))}

                     

                     
                
                </ul>
            <Map/>
            
        </div>
        </div>
    );
};

export default Home;