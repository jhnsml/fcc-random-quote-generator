import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactFCCtest from 'react-fcctest';
import QuoteBox from './Quotebox'


const Wrapper = styled.div`
    background: ${props => props.color};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
`;

const Footer = styled.div`
  margin-top: 30px;
  font-size: 1em;
  color: white;

  & a {
    color: white;
  }
`;

const App = () => {

  const colorsArray = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

  const [currentColor, setCurrentColor] = useState();
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({})
  const [isLoading, setIsLoading] = useState(false);


  const getRandomInt = (min, max) => {
    return (Math.floor(Math.random() * (max - min)) + min);
  }

  useEffect(() => {
    setCurrentColor('#16a085');
  }, [])

  useEffect(() => {
    setIsLoading(true);
    const getQuotes = async () => {
      try {
        const response = await fetch('https://type.fit/api/quotes');
        const result = await response.json();
        const finalResult = await result.splice(0, 100);

        setQuotes(finalResult);
        setCurrentQuote(finalResult[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error)
      }
    }
    getQuotes();
  }, []);

  // console.log(typeof currentQuote)


  const handleClick = () => {
    const quoteIndex = getRandomInt(0, 100);
    const colorIndex = getRandomInt(0, 12);
    setCurrentQuote(quotes[quoteIndex]);
    setCurrentColor(colorsArray[colorIndex]);
  }


  return (
    <>
      <Wrapper id="quote-box" color={currentColor} >
        {isLoading ?
          <div>Loading....</div>
          :
          <>
            <QuoteBox color={currentColor} quote={currentQuote} click={handleClick} />
            <Footer>by <a href="https://www.johnsamuel.dev" target="_blank" >John Samuel</a></Footer>
          </>
        }
      </Wrapper>
      <ReactFCCtest />
    </>
  );
}

export default App;
