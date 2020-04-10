import React from 'react';
import {  FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const toBottom = keyframes`
  0% {
    transform: translateX(100%);
  };
  100% {
    transform: translateX(0);
  };
`;

const WrapperMenu = styled.div`
  background: ${({ theme }) => theme.color.dark};
  text-align: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 50px;
  left: 0;
  /* padding: 2rem; */
  animation: ${toBottom} 0.5s ease-in;

  ul {
    width: 80%;
    margin: auto;

    li {
      margin-bottom: 1.5rem;
      padding: 0.55rem 0;
      width: 100%;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.5) inset;
      border-radius: 50px;

      a {
        color: ${({ theme }) => theme.color.tercero};
        text-transform: uppercase;
        font-size: 0.85em;
        display: inline-block;
        width: inherit;
        animation: ${toBottom} 1s ease;
      }
    }

    svg {
      color: ${({ theme }) => theme.color.primary};
      font-size: 1.35rem;
      margin-top: 1rem;
      margin-left: 1rem;
    }
  }
`;

export default function MenuMobile({ children }) {
  return (
    <WrapperMenu>
      <ul>
        {children}
        <a
          href="https://www.twitter.com/myke_roly"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/myke_roly"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebbok.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.youtube.com/myke-roly"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaYoutube />
        </a>
      </ul>
    </WrapperMenu>
  );
}