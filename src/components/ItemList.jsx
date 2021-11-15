import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} />)
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemList;