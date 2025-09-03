
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


export async function saveFile(resumeFile) {
  alert('save resume api')
  // console.log("in application saving api");
  let resumeUrl = null;

  // file needs a path + actual File object
  const fileName = `${Date.now()}_${resumeFile.name}`;
  const { data, error } = await supabase.storage
    .from("application_pdf") // 👈 bucket name
    .upload(fileName, resumeFile);

  if (error) {
    console.log("File Upload Error:", error);
    alert('save resume api failed',data)
    throw error;
  }
if(data){
  console.log("data recieved from saveResume",data);
  alert("saveResume api hit succesfully");
  
  return data;
}
  
}


export async function saveApplication(data){

  alert('save info api')
    
  console.log("in application info saving api",data);
const { res, err } = await supabase
  .from('applications')
  .insert([
    { post: data.post, 
      name: data.name,
      fatherName: data.fatherName, 
      phone:data.phone, 
      email:data.email,
      address:data.address,
      qualification: data.qualification,
      institute: data.institute,
      year: data.year,
      percentage: data.percentage,
      degreeStatus: data.degreeStatus,
      resumeURL:data.resumeURL,
      link: data.link,
    },
  ])
  .select()

  if(err){
    console.log("error from saveapp",err);
    
  }
  return res;
}

export async function saveCourseEnquiry(enquiryData){

  
const { res, error } = await supabase
  .from('course_inquiry')
  .insert([
    { course: enquiryData.course, name: enquiryData.name, contact:enquiryData.phone, email:enquiryData.email },
  ])
  .select()
  if(res){
    return res;     
  }

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
