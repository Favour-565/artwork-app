"use server";

export async function fetchAllArtworks() {
  const response = await fetch("https://api.artic.edu/api/v1/artworks");
  return response.json();
}

export async function fetchArtworkById(id) {
  const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
  return response.json();
}
