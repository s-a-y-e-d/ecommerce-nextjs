import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string;
  icon?: LucideIcon;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  trend?: string;
  trendIcon?: LucideIcon;
  description?: string;
}

export function DashboardCard({
  title,
  value,
  icon: MainIcon,
  change,
  changeType,
  trend,
  trendIcon: Icon,
  description,
}: DashboardCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm">
      <div className="p-6 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
          {MainIcon && !change && (
            <MainIcon className="h-4 w-4 text-muted-foreground" />
          )}
          {change && changeType && (
            <div
              className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${changeType === "positive"
                ? "bg-emerald-500/10 text-emerald-500"
                : changeType === "negative"
                  ? "bg-rose-500/10 text-rose-500"
                  : "bg-muted text-muted-foreground"
                }`}
            >
              {changeType === "positive" ? "+" : ""}
              {change}
            </div>
          )}
        </div>
        <div className="text-2xl font-bold">{value}</div>
        {(trend || description) && (
          <div className="mt-4 flex flex-col gap-1">
            {trend && Icon && (
              <div className="flex items-center gap-2 text-sm font-medium">
                <span>{trend}</span>
                <Icon className="h-4 w-4" />
              </div>
            )}
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
