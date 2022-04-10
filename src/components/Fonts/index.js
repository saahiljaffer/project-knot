import styled from "styled-components";

export const S1 = styled.p`
  font-size: ${(props) => props.theme.fonts.s1.size};
  font-weight: ${(props) => props.theme.fonts.s1.weight};
  color: ${(props) => props.theme.colors.foreground.default};
`;

export const S2 = styled.p`
  font-size: ${(props) => props.theme.fonts.s2.size};
  font-weight: 300;
  color: ${(props) => props.theme.colors.foreground.default};
`;

export const Button = styled.span`
  font-size: ${(props) => props.theme.fonts.button.size};
  font-weight: 300;
  color: ${(props) => props.theme.colors.foreground.default};
  text-transform: uppercase;
`;
