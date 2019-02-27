import React from 'react';
import styled from 'styled-components';
// import $ from 'jquery';
// import axios from 'axios';


const StyledContainer = styled.div`
  padding: 20px;
  height: 100%;

  nav {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
`;

export default class Container extends React.Component {
  state = {
    person: null,
    error: null,
    loading: true,
  }

  componentDidMount() {
    this.fetchPerson();
  }

  fetchPerson = () => {
    console.log('fetching!');
  }

  setPerson = person => {
    this.setState({ person });
  }

  setError = error => {
    this.setState({ error });
  }

  startSpinner = () => this.setState({ loading: true })

  stopSpinner = () => this.setState({ loading: false })

  render() {
    return (
      <StyledContainer>
        HTTP/AJAX
      </StyledContainer>
    );
  }
}
