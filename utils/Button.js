import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const ButtonWrapper = styled.button`
  ${props =>
    props.color === 'primary' && {
      border: '2px solid' + props.theme.color.primary,
      background: props.theme.color.primary
    }};
  ${props =>
    props.color === 'dark' && {
      background: props.theme.color.dark,
      border: '2px solid' + props.theme.color.dark,
      color: props.theme.color.primary
    }};
  ${props =>
    props.color === 'secondary' && {
      background: props.theme.color.secondary,
      border: '2px solid' + props.theme.color.secondary,
      color: props.theme.color.primary
    }};
  ${props =>
    props.color === 'tercero' && {
      background: props.theme.color.tercero,
      border: '2px solid' + props.theme.color.tercero,
      color: props.theme.color.primary
    }};
  ${props =>
    props.color === 'default' && {
      background: props.theme.color.default,
      border: '2px solid' + props.theme.color.default,
      color: props.theme.color.primary
    }};
  border-radius: 50px;
  padding: .5rem 1.2rem;
  cursor: pointer;
  font-size: .9em;
  transition: all 0.3s ease;
  box-shadow: -5px 0 7px rgba(0, 0, 0, .5);
  letter-spacing: 1.5px;
  opacity: ${props => props.disabled ? '.5' : '1' };

  &:hover {
    opacity: ${props => props.disabled ? '.5' : '.7' };
  }
`;

export default function Button({ color, text, children, type, disabled }) {
  return (
    <ButtonWrapper color={color} type={type} role="button" disabled={disabled}>
      {text} {children}
    </ButtonWrapper>
  );
}
