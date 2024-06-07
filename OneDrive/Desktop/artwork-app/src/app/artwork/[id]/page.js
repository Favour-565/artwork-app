"use client"
import React from 'react'
import ArtworkDetails from '@/components/ArtworkDetails'

const page = ({params}) => {
  return (
    <div>
        <ArtworkDetails id={params.id}/>
    </div>
  )
}

export default page






// "use client"
// import React from 'react';
// import { useRouter } from 'next/router';
// import ArtworkDetails from '@/components/ArtworkDetails';
// import { fetchArtworkById, fetchAllArtworks } from '@/services/artworkServices';

// const page = ({ artwork }) => {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   return <ArtworkDetails artwork={artwork.data} />;
// };

// export async function getStaticPaths() {
//   const data = await fetchAllArtworks();
//   const paths = data.data.map(artwork => ({
//     params: { id: artwork.id.toString() }
//   }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const data = await fetchArtworkById(params.id);
//   return { props: { artwork: data } };
// }

// export default page;

