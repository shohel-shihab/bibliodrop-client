"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    month: "Jan",
    earnings: 2200,
  },
  {
    month: "Feb",
    earnings: 3400,
  },
  {
    month: "Mar",
    earnings: 2700,
  },
  {
    month: "Apr",
    earnings: 5100,
  },
  {
    month: "May",
    earnings: 4200,
  },
  {
    month: "Jun",
    earnings: 6100,
  },
];

export default function EarningsChart() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Monthly Earnings
        </h2>

        <p className="text-sm text-gray-500">
          Earnings generated from book deliveries.
        </p>
      </div>

      <div className="h-[350px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Bar
              dataKey="earnings"
              fill="#7c3aed"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}