import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kackztztzbfzhfamiett.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthY2t6dHp0emJmemhmYW1pZXR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwNzI3NTYsImV4cCI6MTk4ODY0ODc1Nn0.5_DFJ7LI61E21s_us--m0FzKQxnLOxok8AEtP-9rd7Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase; //to tell app.js about its existence
