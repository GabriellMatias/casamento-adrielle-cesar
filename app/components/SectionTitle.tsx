export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-gold mb-3">
        {title}
      </h2>
      {subtitle && <p className="text-text-muted text-lg">{subtitle}</p>}
      <div className="gold-line mt-4" />
    </div>
  );
}
