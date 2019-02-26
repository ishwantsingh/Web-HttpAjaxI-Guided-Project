import React from 'react';
import styled from 'styled-components';
import Section from './Section';


const StyledContainer = styled.div`
  padding: 20px;
  height: 100%;

  nav {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
`;

export default function Container() {
  return (
    <StyledContainer>Http Ajax</StyledContainer>
  );
}
