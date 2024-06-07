import { fetchArtworkById } from '@/services/artworkServices';
import React, { useState, useEffect } from 'react';

const ArtworkDetails = ({id}) => {
    
  const [showDescription, setShowDescription] = useState(false);
  const [data, setData] = useState(null);
  function fetchData(){
    const response =  fetchArtworkById(id)
    .then((res)=>{
        return res;


    })
    return response;
  }
  useEffect(() => {
    const data = fetchData()
    if(data){
        setData(data)
    }else{
        console.log(data);
    }
    
    

  }, [id])

  return (
    <div>
      <h1 className="text-3xl mb-4">{data?.title}</h1>
      <img src={`https://www.artic.edu/iiif/2/${data?.image_id}/full/843,/0/default.jpg`} alt={data?.title} />
      <button onClick={() => setShowDescription(!showDescription)} className="mt-4 p-2 bg-blue-500 text-white">
        {showDescription ? 'Hide Description' : 'Show Description'}
      </button>
      {showDescription && <p className="mt-2">{data?.description}</p>}
    </div>
  );
};

export default ArtworkDetails;
