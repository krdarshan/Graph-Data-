import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatusCardProps {
  title: string;
  value: string;
  status: string;
  trend: string;
}

export function StatusCard({ title, value, status, trend }: StatusCardProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "text-green-500";
      case "warning":
        return "text-yellow-500";
      case "error":
        return "text-red-500";
      default:
        return "text-blue-500";
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">{value}</h3>
            <span className={cn("text-sm font-medium", getStatusColor(status))}>
              {status}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            {trend}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
