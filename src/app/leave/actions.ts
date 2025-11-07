"use server";

import { leaveRequestSchema } from "@/lib/schemas";
import * as z from "zod";

type LeaveRequestFormValues = z.infer<typeof leaveRequestSchema>;

export async function requestLeave(data: LeaveRequestFormValues) {
  const validationResult = leaveRequestSchema.safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Invalid data provided.",
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  try {
    // In a real application, you would save this to a database.
    console.log("New leave request received:", validationResult.data);
    
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
  } catch (error) {
    console.error("Error processing leave request:", error);
    return {
      success: false,
      message: "Failed to process leave request due to a server error.",
    };
  }
}
