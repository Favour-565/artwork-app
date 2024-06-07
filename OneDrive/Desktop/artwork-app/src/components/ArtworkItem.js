import React, { useState } from 'react';

const ArtworkDetails = ({ artwork }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div>
      <h1 className="text-3xl mb-4">{artwork.title}</h1>
      <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} alt={artwork.title} />
      <button onClick={() => setShowDescription(!showDescription)} className="mt-4 p-2 bg-blue-500 text-white">
        {showDescription ? 'Hide Description' : 'Show Description'}
      </button>
      {showDescription && <p className="mt-2">{artwork.description}</p>}
    </div>

  );
};

export default ArtworkDetails;
