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
    loading: false,
  }

  componentDidMount() {
    this.fetchPerson();
  }

  fetchPerson = () => {
    this.startSpinner();
    fetch('http://demo6368739.mockable.i/')
      .then(data => data.json())
      .then(this.setPerson)
      .catch(this.setError);
  }

  setPerson = person => {
    this.stopSpinner();
    this.setState({ person });
  }

  setError = error => {
    console.dir(error);
    this.stopSpinner();
    this.setState({ error });
  }

  startSpinner = () => this.setState({ loading: true })

  stopSpinner = () => this.setState({ loading: false })

  render() {
    if (this.state.loading) {
      return (
        <StyledContainer>
          Loading...
        </StyledContainer>
      );
    }

    if (this.state.error) {
      return (
        <StyledContainer>
          Argh! This failed rather miserably. {this.state.error.message}
        </StyledContainer>
      );
    }

    return (
      <StyledContainer>
        {
          this.state.person && (
            <div>
              <div>Name: {this.state.person.name}</div>
              <div>Age: {this.state.person.age}</div>
              <button onClick={this.fetchPerson}>fetch again</button>
            </div>
          )
        }
      </StyledContainer>
    );
  }
}
