import { CO2Card } from "@/components/dashboard/co2";
import { RewardsCard } from "@/components/dashboard/rewards";
import { UpcomingAppointmentsCard } from "@/components/dashboard/upcoming-appointment";
import { WasteBreakdownCard } from "@/components/dashboard/waste-breakdown";
import { LineChart } from "@/components/dashboard/line-chart";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Large line chart spanning 2 columns */}
        <div className="lg:col-span-2 h-[350px]">
          <LineChart />
        </div>

        {/* Right side cards */}
        <div className="flex flex-col gap-6">
          <CO2Card />
          <RewardsCard />
          <UpcomingAppointmentsCard />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <WasteBreakdownCard />
      </div>

    </div>
  );
}
