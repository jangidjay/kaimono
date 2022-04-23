import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 90px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
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
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Input = styled.input`
  font-size: 16px;
  border: none;
  outline: none;
  padding: 5px;
  margin: 0px 10px 0 10px;
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
