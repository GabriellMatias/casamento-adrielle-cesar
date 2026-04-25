const QR_FILLED = new Set([
  0, 1, 3, 4, 5, 6, 7, 9, 11, 12, 13, 17, 20, 21, 23, 24,
]);
const QR_CELLS = Array.from({ length: 25 }, (_, i) => ({
  i,
  filled: QR_FILLED.has(i),
}));

export default function QrCodePlaceholder({
  label = "Acesse o cardápio digital",
}: {
  readonly label?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* QR frame */}
      <div
        className="relative w-28 h-28 border-2 border-gold rounded-lg flex items-center justify-center bg-surface"
        aria-label={label}
      >
        {/* Corner accents */}
        <span className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-gold rounded-sm" />
        <span className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-gold rounded-sm" />
        <span className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-gold rounded-sm" />
        <span className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-gold rounded-sm" />

        {/* Inner placeholder grid — mimics QR texture */}
        <div
          className="grid grid-cols-5 grid-rows-5 gap-0.5 w-16 h-16 opacity-30"
          aria-hidden="true"
        >
          {QR_CELLS.map(({ i, filled }) => (
            <div
              key={i}
              className={`rounded-[1px] ${
                filled ? "bg-gold" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-text-muted text-xs tracking-wider uppercase text-center max-w-[8rem]">
        {label}
      </p>
    </div>
  );
}
