const GRID_SIZE = 64;

export function BlueprintGrid() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, #11111108 1px, transparent 1px),
          linear-gradient(to bottom, #11111108 1px, transparent 1px)
        `,
        backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
      }}
      aria-hidden="true"
    />
  );
}
