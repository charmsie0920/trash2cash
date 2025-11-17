"use client";

import { LineChart as RLChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", kg: 2.1 },
  { month: "Feb", kg: 3.4 },
  { month: "Mar", kg: 4.2 },
  { month: "Apr", kg: 5.0 },
];

export function LineChart() {
  return (
    <div className="w-full h-full">
      <h2 className="text-lg font-semibold mb-2">Monthly Recycling Trend</h2>

      <ResponsiveContainer width="100%" height="85%">
        <RLChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="kg" 
            stroke="#16a34a" 
            strokeWidth={3} 
            dot={false} 
          />
        </RLChart>
      </ResponsiveContainer>
    </div>
  );
}
