
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lbrpchqamjuzxlhleksn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxicnBjaHFhbWp1enhsaGxla3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MjUwODQsImV4cCI6MjA1NjQwMTA4NH0.445KuLQSsJhtAu97ixNGfPnwH9wMqfJU-enoc5UVtmE'
export const supabase = createClient(supabaseUrl, supabaseKey);