import Link from "next/link";
import { DownloadAppButton } from "@/components/download-app-button";
import { Button } from "@/components/ui/button";
import { Workflow } from "lucide-react";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center gap-8 p-8 rounded-lg shadow-lg bg-card">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-lg bg-primary">
            <Workflow className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-primary">SabtecPWA</h1>
        </div>
        <p className="text-lg text-muted-foreground">Your timesheet and leave management solution.</p>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Button asChild className="w-full">
            <Link href="/dashboard">Enter</Link>
          </Button>
          <DownloadAppButton />
        </div>
      </div>
    </div>
  );
}
