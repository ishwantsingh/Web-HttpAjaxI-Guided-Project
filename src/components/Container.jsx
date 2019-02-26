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

export default class Container extends React.Component {
  state = {
    error: null,
    loading: false,
    people: [],
  }

  setPeople = people => {
    this.setState({
      loading: false,
      people,
    });
  }

  setError = error => {
    this.setState({
      loading: false,
      error: error.message,
    });
  }

  doRequest = () => {
    this.setState({ loading: true });
    fetch('http://demo6368739.mockable.io/')
      .then(res => res.json())
      .then(this.setPeople)
      .catch(this.setError);
  }

  componentDidMount() {
    this.doRequest();
  }

  render() {
    if (this.state.loading) {
      return <StyledContainer>Loading...</StyledContainer>;
    }

    if (this.state.error) {
      return (
        <StyledContainer>
          This is horrible! {this.state.error}
          <br />
          <button onClick={this.doRequest}>Retry</button>
        </StyledContainer>
      );
    }

    return (
      <StyledContainer>
        {
          this.state.people.length > 0 &&
          this.state.people.map(person => (
            <div>
              name: {person.name}
              <br />
              age: {person.age}
            </div>
          ))
        }
        <button onClick={this.doRequest}>Fetch again</button>
      </StyledContainer>
    );
  }
}
