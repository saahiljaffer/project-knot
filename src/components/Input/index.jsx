import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { S2 } from "../Fonts";

const Container = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled(S2)`
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  width: fill-available;
  height: 2rem;
  padding: 0.25rem;
  background-color: ${(props) => props.theme.colors.foreground.quintenary};
  font-size: ${(props) => props.theme.fonts.b1.size};
  font-weight: ${(props) => props.theme.fonts.b1.weight};
  color: ${(props) => props.theme.colors.foreground.secondary};
  border: none;
  border-radius: 0.25rem;
  ::placeholder {
    color: ${(props) => props.theme.colors.foreground.tertiary};
  }
`;

function Input({ label, placeholder, input, type }) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <StyledInput type={type} {...input} placeholder={placeholder} />
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.shape.isRequired,
  type: PropTypes.shape.isRequired,
};

export default Input;
