import { NextResponse } from "next/server";
import { supabase } from "@/app/utils/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase.from("posts").select("*");

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}