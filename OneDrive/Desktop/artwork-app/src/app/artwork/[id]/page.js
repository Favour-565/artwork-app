import ArtworkDetails from "@/components/ArtworkDetails";
import { fetchArtworkById } from "@/services/artworkServices";

export default async function ArtworkDetailsPage({ params }) {
  const response = await fetchArtworkById(params.id);

  const {
    data: {
      title,
      thumbnail: { lqip: thumbnail, alt_text },
      description,
      image_id,
    },
  } = response;

  return (
    <div>
      <ArtworkDetails
        title={title ?? "No title"}
        image={image_id ?? thumbnail}
        alt_text={alt_text}
        description={description ?? alt_text ?? "No description"}
      />
    </div>
  );
}
