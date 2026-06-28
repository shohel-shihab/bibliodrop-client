"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from "recharts";

const data = [
  {
    name: "Programming",
    value: 45,
  },
  {
    name: "Novel",
    value: 30,
  },
  {
    name: "History",
    value: 20,
  },
  {
    name: "Science",
    value: 18,
  },
  {
    name: "Business",
    value: 15,
  },
];

const COLORS = [
  "#7c3aed",
  "#06b6d4",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

export default function CategoryPieChart() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Books by Category
        </h2>

        <p className="text-sm text-gray-500">
          Distribution of books on the platform.
        </p>
      </div>

      <div className="h-[350px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}