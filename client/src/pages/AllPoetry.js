import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PoetryCard from '../components/PoetryCard';

const PageContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const AllPoetry = () => {
  const [poetry, setPoetry] = useState([]);
  
  useEffect(() => {
    const fetchAllPoetry = async () => {
      const response = await fetch('/api/poetry');
      const data = await response.json();
      setPoetry(data);
    };
    fetchAllPoetry();
  }, []);
  
  return (
    <PageContainer>
      {poetry.map(p => (
        // The change is here: passing the 'image' prop from the fetched data
        <PoetryCard key={p._id} title={p.title} urduText={p.urduText} image={p.image} />
      ))}
    </PageContainer>
  );
};
export default AllPoetry;