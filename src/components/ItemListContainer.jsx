import ItemCount from './ItemCount';
import { Wrapper } from './styledComponents';

const ItemListContainer = ({greeting}) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty);
    }

    return (
        <>
            <Wrapper>{greeting}</Wrapper>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;