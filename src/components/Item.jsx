const Item = ({ id, title, price, pictureUrl }) => {
    return (
        <>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>price: {price}</p>
            <p>pictureUrl: {pictureUrl}</p>
        </>
    );
}

export default Item;