import React from 'react';
import Link from 'next/link';
import ArtworkItem from './ArtworkItem';

const ArtworkList = ({ artworks }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {artworks.map(artwork => (
      <Link key={artwork.id} href={`/artwork/${artwork.id}`}>
        <ArtworkItem artwork={artwork} />
      </Link>
    ))}
  </div>
);

export default ArtworkList;
