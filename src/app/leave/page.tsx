import { AppLayout } from "@/components/app-layout";
import { LeaveRequestForm } from "@/components/pages/leave-request-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LeavePage() {
  return (
    <AppLayout>
      <main className="flex flex-1 flex-col p-4 md:p-6">
        <div className="flex items-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Request Leave</h1>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>New Leave Request</CardTitle>
              <CardDescription>
                Complete the form below to request time off.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LeaveRequestForm />
            </CardContent>
          </Card>
        </div>
      </main>
    </AppLayout>
  );
}
