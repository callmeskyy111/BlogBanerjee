import { Skeleton } from "@/components/ui/skeleton";
//loading -> only static-UI file used as a fallback.
export default function LoadingDashboard() {
  return <Skeleton className="w-full h-[400px]" />;
}
