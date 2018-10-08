import React, { Component } from "react";
import styled, { css, ThemeProvider } from "styled-components";

const mainColor = "#9D79BC";

const Title = styled.h1`
  color: ${props => props.color || "goldenrod"};
  font-size: 2.8em;
  margin: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${mainColor};
  display: inline-block;
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const border = css`
  ${props => {
    if (props.showBorder) {
      return `
        border: 1px solid ${mainColor};
        border-radius: 8px;
      `;
    }
  }};
`;

const Thumbnail = styled.img`
  flex-grow: 1;
  width: 300px;
  height: 250px;
  padding: 5px;
  margin: 15px;
  ${border};
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.main};
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        main: "ghostwhite"
      }
    };
  }

  render() {
    console.log(this.props);
    const thumbnails = Array.from({ length: 4 }, (_, index) => {
      const showBorder = index % 2 === 0;
      return (
        <Thumbnail
          key={index + 1}
          src={require(`../assets/thumbnail-${index + 1}.jpg`)}
          showBorder={showBorder}
        />
      );
    });

    return (
      <ThemeProvider theme={this.state.theme}>
        <Wrapper className={this.props.className}>
          <Title color={mainColor}>Compustagram</Title>
          <Gallery>{thumbnails}</Gallery>
          Change Themes :-
          <select
            onChange={event => {
              this.setState({ theme: { main: event.target.value } });
            }}
          >
            <option value="ghostwhite">Light</option>
            <option value="#3A3E3B">Dark</option>
            <option value="#EFBCD5">Pink</option>
            <option value="#0F8B8D">Blue</option>
            <option value="#E54B4B">Red</option>
            <option value="#43C59E">Green</option>
          </select>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default styled(App)`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

// Note that when you style a component, you need to make sure that your component has this.props.className attached to its DOM. Because after Style-Components generated a unique class name, it will pass the class name to your component. If you are not sure whether a third party component has this.props.className or not, you can simply wrap it up in your own <div className={this.props.className}> tag.
