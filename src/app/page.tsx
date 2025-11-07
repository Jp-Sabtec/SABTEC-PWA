import { CalendarView } from "@/components/pages/calendar-view";

export default function CalendarPage() {
  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
      </div>
      <CalendarView />
    </main>
  );
}
