export default function MapEmbed({
  query,
  title,
}: {
  query: string;
  title: string;
}) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    query
  )}&output=embed`;

  return (
    <div className="map-container">
      <iframe
        src={src}
        title={`Mapa - ${title}`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
