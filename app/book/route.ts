import { redirect } from "next/navigation";

/**
 * /book route handler
 *
 * PHASE 1: Temporary redirect to /contact.
 * PHASE 2: Will serve interactive slot-based booking engine powered by Supabase.
 */
export async function GET() {
  redirect("/contact");
}
