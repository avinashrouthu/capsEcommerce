import styled, { keyframes } from 'styled-components';

const animateSearch = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

export const LabelIcon = styled.label`
  position: relative;
  top: 0;
`;

export const SearchWrapper = styled.div`
  height: ${({ modeMobile }) => (modeMobile ? '8vh' : '')};
  width: ${({ modeMobile }) => (modeMobile ? '100%' : '')};;
  background: ${({ theme }) => theme.color.primary};
  position: ${({ modeMobile }) => (modeMobile ? 'fixed' : '')};
  top: 8vh;
  left: 0;

  input {
    width: ${({ modeMobile }) => (modeMobile ? '90%' : '300px')};
    margin: auto;
    padding: 0.4rem 0.5rem;
    background: ${({ theme }) => theme.color.gray};
    font-size: 0.9em;
    /* border: 1px solid ${({ theme }) => theme.color.default}; */
    animation: ${animateSearch} 0.8s ease-in-out;
    --moz-animation: ${animateSearch} 0.8s ease-in-out;
    border-radius: 5px;
    border: none;
  }
`;

export const ResultSearch = styled.section`
  position: fixed;
  top: ${({ modeMobile }) => (modeMobile ? '16vh' : '8vh')};
  left: 0;
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.color.primary};
  animation: ${animateSearch} 0.5s ease;

  a {
    widtH: 90%;
    margin: auto;
    display: block;
    font-weight: 400;
    font-size: 0.8em;
    /* text-align: center; */
    text-transform: uppercase;
    padding: 0.6rem 0;
    color: ${({ theme }) => theme.color.dark};
    --moz-animation: ${animateSearch} 0.8s ease-in-out;

    &:hover {
      background: ${({ theme }) => theme.color.gray};
    }
  }
`;
