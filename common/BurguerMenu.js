import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  width: 20px;
  height: 20px;
  margin: .5rem;
  cursor: pointer;
  position: relative;

  span {
    width: 15px;
    position: absolute;
    top: .35rem;
    height: ${(props) => (props.menuMobile ? '0px' : '.135rem')};
    background: ${({ theme }) => theme.color.dark};
    transition: all 0.3s ease;
    border-radius: 50px;

    &::before {
      content: '';
      position: absolute;
      top: ${(props) => (props.menuMobile ? 0 : '-.45rem')};
      height: 0.135rem;
      background: inherit;
      width: 20px;
      transform: ${(props) => (props.menuMobile ? 'rotate(-225deg)' : 0)};
      transition: all 0.3s ease;
      border-radius: 50px;
    }

    &::after {
      content: '';
      position: absolute;
      top: ${(props) => (props.menuMobile ? 0 : '.45rem')};
      width: ${(props) => (props.menuMobile ? '20px' : '10px')};;
      height: 0.135rem;
      background: inherit;
      transform: ${(props) => (props.menuMobile ? 'rotate(45deg)' : 0)};
      transition: all 0.3s ease;
      border-radius: 50px;
    }
  }
`;

export default function BurguerMenu({ menuMobile, toggleMenuMobile }) {
  return (
    <Menu
      arial-label="button"
      role="button"
      menuMobile={menuMobile}
      onClick={toggleMenuMobile}
    >
      <span></span>
    </Menu>
  );
}
