import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons'
import SocialIcon from './Icon'

const Wrapper = styled.div`
  width: 450px;
  display: grid;
  grid-auto-flow: row;
  padding: 40px 50px;
  background: white;
  border-radius: 2px;
`;

const Quote = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 12px;
  color: ${props => props.color};
  transition: all 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
`;

const Text = styled.div`
  font-weight: 600;
  text-align: center;
  font-size: 1.75em;
  display: flex;
  position: relative;

  & svg {
    position: relative;
    left: -15px;
  }
`;

const Author = styled.p`
  font-size: 0.95em;
  text-align: right;
`
const StyledDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  & .iconWrapper {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-gap: 10px;
  }
`
const Button = styled.button`
  color: white;
  background: ${props => props.color};
  border: none;
  padding: 0 12px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);

  &:focus {
    border:none;
    outline: none;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const QuoteBox = (props) => {

  const twitterUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='${encodeURIComponent(`${props.quote.text}${props.quote.author}`)}`;
  const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='${encodeURIComponent(`${props.quote.text}`)}&content=${encodeURIComponent(`${props.quote.author}`)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;

  return (
    <Wrapper>
      <Quote color={props.color}>
        <Text>
          <FontAwesomeIcon icon={faQuoteLeft} />
          <p id="text">{props.quote.text}</p>
        </Text>
        <Author id="author">- {props.quote.author ? props.quote.author : 'Unknown'}</Author>
      </Quote>
      <StyledDiv>
        <div className="iconWrapper">
          <SocialIcon id="tweet-quote" color={props.color} icon={faTwitter} url={twitterUrl} />
          <SocialIcon color={props.color} icon={faTumblr} url={tumblrUrl} />
        </div>
        <Button id="new-quote" color={props.color} onClick={props.click}>New Quote</Button>
      </StyledDiv>
    </Wrapper>
  )
}

export default QuoteBox;