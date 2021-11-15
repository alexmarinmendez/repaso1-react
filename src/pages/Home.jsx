import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <div>
            <NavBar />
            {/* <ItemListContainer greeting="Hola Mundo ItemListContainer!!!" /> */}
            <ItemDetailContainer />
        </div>
    );
}

export default Home;