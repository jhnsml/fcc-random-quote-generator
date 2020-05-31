import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  width: 2em;
  background: ${props => props.color};
  color: white;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
`;

const SocialIcon = (props) => {
  return (
    <Icon id={props.id} href={props.url} color={props.color} target="_blank">
      <FontAwesomeIcon icon={props.icon} className="icon" />
    </Icon>
  )
}

export default SocialIcon;