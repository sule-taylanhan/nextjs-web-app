//our-domain.com/new-meetup
import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";

function NewMeetupPage(){
   const router =  useRouter();
   async  function addMeetupHandler(enteredMeetupData){
     const response =  await fetch("/api/new-meetup",{
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
            "Content-Type": "application/json"
        }
     }); // veya noemal bir url de girebiliriz. new-mmetup file adi degisirse burda da degistirmemiz lazim ,path olarak.
        const data = await response.json();
        // console.log(enteredMeetupData)
        router.push("/");  // or we can use router.replace("/")  method to back a new page navigation
    }
   return (
    <Fragment>
      <Head>
         <title>Nextjs Application</title>
         <meta name="description" content="Find a instructors, teachers, mentor, course,class,english,free,online, website,bootcamp, mentoring" />
      </Head>
    <NewMeetupForm  onAddMeetup={addMeetupHandler}/>
    </Fragment>
   ); 
} 
export default NewMeetupPage;  