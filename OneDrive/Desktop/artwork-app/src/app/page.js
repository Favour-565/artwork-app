"use client"
import React, { useEffect, useState } from 'react';
import ArtworkList from '@/components/ArtWorkList';
import { fetchAllArtworks } from '@/services/artworkServices';

const Home = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetchAllArtworks().then(data => setArtworks(data.data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl mb-6">Artwork Collection</h1>
      <ArtworkList artworks={artworks} />
    </div>
  );
};

export default Home;
