import PhotoList from "../components/PhotoList";
export default async function Home() {

  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();

  return (
    <div>
      <PhotoList photos={photos} />
    </div>
  );
}
