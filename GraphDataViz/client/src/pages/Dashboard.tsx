import { MainNav } from "@/components/MainNav";
import { Sidebar } from "@/components/Sidebar";
import { StatusCard } from "@/components/StatusCard";
import { EquipmentDonut } from "@/components/charts/EquipmentDonut";
import { PerformanceChart } from "@/components/charts/PerformanceChart";
import { TrendChart } from "@/components/charts/TrendChart";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Predictive Maintenance Dashboard</h1>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <StatusCard 
                title="Equipment Status"
                value="85%"
                status="Active"
                trend="+2.5%"
              />
              <StatusCard 
                title="Vibration Levels"
                value="4.2 Hz"
                status="Normal"
                trend="Stable"
              />
              <StatusCard 
                title="Operating Hours"
                value="5,300"
                status="Warning"
                trend="+120h"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <h2 className="text-lg font-semibold mb-4">Equipment Status Distribution</h2>
                <EquipmentDonut />
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h2 className="text-lg font-semibold mb-4">Performance Comparison</h2>
                <PerformanceChart />
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-lg font-semibold mb-4">Trend Analysis</h2>
              <TrendChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
