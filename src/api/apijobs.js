import supabaseClient from "@/utils/supabase";
import { data } from "autoprefixer";

export async function getJobs(token, {}) {
  const supabase = await supabaseClient(token);

  let query = supabase.from("jobs").select("*");


  const {data,error} =  await query;

  if(error) {
    console.error("Error getting jobs:", error);
    return null;

  }
  return data;
}
