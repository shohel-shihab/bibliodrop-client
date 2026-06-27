"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    month: "Jan",
    books: 2,
  },
  {
    month: "Feb",
    books: 4,
  },
  {
    month: "Mar",
    books: 3,
  },
  {
    month: "Apr",
    books: 7,
  },
  {
    month: "May",
    books: 5,
  },
  {
    month: "Jun",
    books: 8,
  },
];

export default function ReadingChart() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Reading Activity
          </h2>

          <p className="text-sm text-gray-500">
            Books completed over the last six months.
          </p>
        </div>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="4 4"
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

            <Line
              type="monotone"
              dataKey="books"
              stroke="#7c3aed"
              strokeWidth={4}
              dot={{
                r: 5,
              }}
              activeDot={{
                r: 8,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}