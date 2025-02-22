import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { mockEquipmentStatus } from "@/lib/mockData";

export function EquipmentDonut() {
  const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={mockEquipmentStatus}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {mockEquipmentStatus.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
