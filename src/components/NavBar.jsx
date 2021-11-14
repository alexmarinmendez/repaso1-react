import { AppBar, Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="fixed">
            <Wrapper>
                <Left>
                    <Logo>COD.ER $HO.P</Logo>
                </Left>
                <Center>
                    <MenuItem>CATEGORÍA 1</MenuItem>
                    <MenuItem>CATEGORÍA 2</MenuItem>
                    <MenuItem>CATEGORÍA 3</MenuItem>                    
                    <MenuItem>CATEGORÍA 4</MenuItem>                    
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;