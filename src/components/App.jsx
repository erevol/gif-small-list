import React, { useState } from 'react';
import styled from '@emotion/styled';
import GifGrid from './GifGrid';
import Search from './Search';
import Header from './Header';

const StyledContainer = styled.div`
  margin: 20px;
  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid gainsboro;
  }
`;

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const getGifs = async () => {
    const api = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=10&api_key=${process.env.REACT_APP_GIPHY_APIKEY}`;
    const response = await fetch(api);
    const { data } = await response.json();
    const gifs = data.length > 0 && data.map(({
      id, url, title, images: img,
    }) => ({
      id,
      url,
      title,
      image: img?.downsized_medium.url,
    }));
    setImages(gifs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query && query.trim().length > 3) {
      getGifs();
      setQuery('');
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <StyledContainer>
      <Header title="List of gifs" />
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={query}
        placeholder="Search a gif"
      />
      <GifGrid images={images} />
    </StyledContainer>
  );
};

export default App;
