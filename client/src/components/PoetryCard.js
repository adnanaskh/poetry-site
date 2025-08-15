import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding: 20px;
  background-color: #fcfaf5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  text-align: center;
`;
const Title = styled.h3` font-size: 1.5em; color: #333; margin-bottom: 10px; `;
const UrduText = styled.p` font-size: 1.2em; color: #555; white-space: pre-wrap; line-height: 1.6; `;
const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 4px;
`;

const PoetryCard = ({ title, urduText, image }) => (
  <Card>
    {image && <Image src={image} alt={title} />}
    <Title>{title}</Title>
    <UrduText>{urduText}</UrduText>
  </Card>
);
export default PoetryCard;