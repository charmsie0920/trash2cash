export function WasteBreakdownCard() {
  return (
    <div className="rounded-xl border bg-white/25 border-white/30 backdrop-blur-xl shadow-lg
 p-4">
      <h2 className="text-lg font-semibold mb-4">Waste Breakdown</h2>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span>Plastic</span>
          <span>2.4 kg</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Paper</span>
          <span>1.8 kg</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Glass</span>
          <span>0.9 kg</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>E-waste</span>
          <span>0.4 kg</span>
        </div>
      </div>
    </div>
  );
}
