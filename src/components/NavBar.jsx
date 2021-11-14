import { AppBar } from "@material-ui/core";
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
                <Right />
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;