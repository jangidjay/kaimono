import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 90px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "Center" })}
`;

const Input = styled.input`
  font-size: 16px;
  border: none;
  outline: none;
  padding: 5px;
  margin: 0px 10px 0 10px;
  ${mobile({ width: "50px" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 5px;
  border-radius: 25px;
`;

const SignIn = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;
`;

const Language = styled.span`
  font-size: 14;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ display: "none" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>KAIMONO.</Logo>
        </Left>
        <Center>
          <MenuItem>HOME</MenuItem>
          <MenuItem>COLLECTIONS</MenuItem>
          <MenuItem>ABOUT</MenuItem>
        </Center>
        <Right>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray" }} />
          </SearchContainer>
          <SignIn>SIGN IN</SignIn>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
          <Language>EN</Language>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
