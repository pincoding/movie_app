import { Link } from "react-router-dom"
import { routes } from "../routes"
import { colors } from "./GlobalStyled";
import styled from "styled-components";

const Container = styled.header`
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
`;
const Logo = styled.div`
    font-size: 28px;
    font-weight: 700;
    a{
        color: ${colors.point};
    }
`;
const Nav = styled.ul`
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    li{
        margin-left: 100px;
    }
`;


export const Header = () => {
    return <Container>

        <Logo>
            <Link to={routes.home}>홈</Link>
        </Logo>

        <Nav>
            <li>
                <Link to={routes.home}>홈</Link>
            </li>
            <li>
                <Link to={routes.search}>SEARCH</Link>
            </li>
        </Nav>

    </Container>
}