import React from "react";
import styled from "styled-components";
import $ from "jquery";
import axios from "axios";

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
    loading: false
  };

  componentDidMount() {
    this.fakeFetchPerson();
  }

  fetchPerson = () => {
    this.resetError();
    this.startSpinner();
    // fetch("http://demo3611556.mockable.io/")
    //   .then(data => data.json())
    //   .then(this.setPerson)
    //   .catch(this.setError);
    //using axios

    // axios
    //   .get("http://demo3611556.mockable.io/")
    //   .then(response => this.setPerson(response.data)) //response is foo-bar name
    //   .catch(this.setError);
    //using jquery
    // $.ajax({
    //   url: "http://demo3611556.mockable.io/",
    //   success: this.setPerson,
    //   error: err => this.setError({ message: err.statusText }) //err is foo-bar, and we made a message object so that we didnt have to change our jsx representing the error message. because in jquery the eroor message came in the form of "statusText" rather than "message" like other two methods
    // });
  };

  fakeFetchPerson = () => {
    this.resetError();
    this.startSpinner();
    this.doFakeAjax()
      .then(this.setPerson)
      .catch(this.setError);
  };

  doFakeAjax = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.floor(Math.random() * 2) % 2 === 0) {
          resolve({ id: 1, name: "Samar", age: 21 });
        } else {
          reject({ message: "This did not fly" });
        }
      }, 1000);
    });
  };

  setPerson = person => {
    this.stopSpinner();
    this.setState({ person });
  };

  setError = error => {
    console.dir(error);
    this.stopSpinner();
    this.setState({ error });
  };

  resetError = () => {
    this.setState({ error: null });
  };

  startSpinner = () => this.setState({ loading: true });

  stopSpinner = () => this.setState({ loading: false });

  render() {
    if (this.state.loading) {
      return <StyledContainer>Loading...</StyledContainer>;
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
        {this.state.person && (
          <div>
            <div>Name: {this.state.person.name}</div>
            <div>Age: {this.state.person.age}</div>
            <button onClick={this.fakeFetchPerson}>fetch again</button>
          </div>
        )}
      </StyledContainer>
    );
  }
}
