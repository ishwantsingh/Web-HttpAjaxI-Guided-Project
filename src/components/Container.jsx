import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import axios from 'axios';


const StyledContainer = styled.div`
  padding: 20px;
  height: 100%;

  nav {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
`;

const doFakeAjax = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((Math.floor(Math.random() * 2)) % 2 === 0) {
        resolve({ id: '1', name: 'Samar', age: 25 });
      } else {
        reject({ message: 'No joy.' });
      }
    }, 1000);
  });
};

export default class Container extends React.Component {
  state = {
    person: null,
    error: null,
    loading: false,
  }

  componentDidMount() {
    this.fakeFetchPerson();
  }

  fetchPerson = () => {
    this.resetError();
    this.startSpinner();
    // fetch('http://demo6368739.mockable.io/')
    //   .then(data => data.json())
    //   .then(this.setPerson)
    //   .catch(this.setError);

    // axios.get('http://demo6368739.mockable.io/')
    //   .then(res => this.setPerson(res.data))
    //   .catch(this.setError);

    // $.ajax({
    //   url: 'http://demo6368739.mockable.io/',
    //   success: this.setPerson,
    //   error: err => this.setError({ message: err.statusText }),
    // });
  }

  fakeFetchPerson = () => {
    this.startSpinner();
    this.resetError();
    doFakeAjax('http://demo6368739.mockable.io/')
      .then(this.setPerson)
      .catch(this.setError);
  }

  setPerson = person => {
    this.stopSpinner();
    this.setState({ person });
  }

  setError = error => {
    // debugger
    this.stopSpinner();
    this.setState({ error });
  }

  resetError = () => {
    this.setState({ error: null });
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
          <button onClick={this.fakeFetchPerson}>fetch again</button>
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
              <button onClick={this.fakeFetchPerson}>fetch again</button>
            </div>
          )
        }
      </StyledContainer>
    );
  }
}
