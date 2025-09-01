
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
const URL='https://duibhlaskyirtpugqdbd.supabase.co';
const KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1aWJobGFza3lpcnRwdWdxZGJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MzkyNDUsImV4cCI6MjA3MjMxNTI0NX0.IY0ias2UVF1vEBO-0V3mk7YPQJkxlGH7qT0TD_cwrDw'

const supabase = createClient(URL, KEY);

export async function saveContact(data){

    
const { res, err } = await supabase
  .from('contactUs')
  .insert([
    { name: data.name, contact:data.phone, email:data.email,message:data.message },
  ])
  .select()

  return res;
          
}

// function DbConnection() {
//   const [instruments, setInstruments] = useState([]);

//   useEffect(() => {
//     getInstruments();
//   }, []);

//   async function getInstruments() {
//     const { data } = await supabase.from("contactUs").select('*');
//     setInstruments(data);
//   }

//   return (
//     <ul>
//       {instruments.map((instrument) => (
//         <li key={instrument.name}>{instrument.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default DbConnection;
