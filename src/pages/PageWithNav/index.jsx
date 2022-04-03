import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
// import { H4 } from "../../components/Fonts/Secondary";
import PageContainer from "../../components/PageContainer";
// import Button from "../../components/Button";
// import useStore from "../../store";

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;

const MainTitle = styled.h1`
  text-align: center;
  font-family: "Eu Alonira Personal Use";
  font-weight: normal;
  font-size: 42px;
  color: #967d48;
`;

// const ButtonContainer = styled.div`
//   position: absolute;
//   right: 3rem;
// `;

function PageWithNav({ children }) {
  // const setChosenPartyId = useStore((state) => state.setChosenPartyId);
  // const setName = useStore((state) => state.setName);

  return (
    <>
      <Nav>
        <MainTitle>Maysum and Malika</MainTitle>
        {/* <ButtonContainer>
          <Button
            onClick={() => {
              setChosenPartyId(undefined);
              setName(undefined);
            }}
          >
            Logout
          </Button>
        </ButtonContainer> */}
      </Nav>
      <PageContainer>{children}</PageContainer>
    </>
  );
}

PageWithNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageWithNav;
