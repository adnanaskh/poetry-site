import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PoetryCard from '../components/PoetryCard';

const PageContainer = styled.div` padding: 20px; `;
const HeroSection = styled.header`
  width: 100%;
  height: 60vh;
  background: url(https://images.unsplash.com/photo-1517404215712-099a54b34c26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  text-align: center;
`;
const AboutSection = styled.section`
  padding: 40px;
  background-color: #f9f9f9;
  text-align: center;
`;
const FeaturedPoetry = styled.section`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;
const Home = () => {
  const [poetry, setPoetry] = useState([]);
  useEffect(() => {
    const fetchPoetry = async () => {
      const response = await fetch('/api/poetry');
      const data = await response.json();
      setPoetry(data);
    };
    fetchPoetry();
  }, []);
  return (
    <>
      <HeroSection>{/* ... content ... */}</HeroSection>
      <AboutSection>{/* ... content ... */}</AboutSection>
      <FeaturedPoetry>
        {poetry.slice(0, 3).map(p => (
          <PoetryCard key={p._id} title={p.title} urduText={p.urduText} image={p.image} />
        ))}
      </FeaturedPoetry>
    </>
  );
};
export default Home;