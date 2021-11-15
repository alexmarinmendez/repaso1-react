import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { ProductAmountContainer, ProductAmount } from './styledComponents';

const ItemCount = ({ stock, initial,  onAdd }) => {
    return (
        <ProductAmountContainer>
            <Button variant="text"><Add /></Button>
            <ProductAmount>{initial}</ProductAmount>
            <Button variant="text"><Remove /></Button>
            <Button variant="contained" color="primary">Add to Cart</Button>
        </ProductAmountContainer>
    );
}

export default ItemCount;