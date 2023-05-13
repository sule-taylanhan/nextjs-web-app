import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList"
import { Fragment } from "react";
// import { GetStaticProps } from "next";
// import { GetServerSideProps } from "next";
// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'First Meetup',
//         image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
//         adress: "Adres1",
//         description: "a1"
//     },
//     {
//         id: 'm2',
//         title: 'Second Meetup',
//         image: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//         adress: "Adres2",
//         description: "a2"
//     }
// ]
function HomePage(props) {
    return (
        <>
        <Fragment>
            <Head>
                <title>Next Meetup</title>
                <meta name="description" content="Find a instructors, teachers, mentor, course,class,english,free,online, website,bootcamp, mentoring" />
            </Head>
        </Fragment><MeetupList meetups={props.meetups} />
        </>
    );
}


export async function getStaticProps() {  //should wait until data coming from server. this function using only for static generation . will not never  execute their machine for  end users 
    // fetch dtat from an API;
const client = await MongoClient.connect(
    "mongodb+srv://rcptay:mongodB-1983@nextjsapp.8efe9pg.mongodb.net/nextApp?retryWrites=true&w=majority");
const db = client.db();

const meeetupsCollection = db.collection('nextApp'); 

const meetups = await meeetupsCollection.find().toArray();
// console.log(meetups);
client.close();
    return {   // we always need to return an object
        // if data does not change frequently we can use like PERSONAL BLOG ,BUT if data change frequebtly will add one more props into return stattement
      props: {
        meetups: meetups.map((meetup) => ({
             title: meetup.title,
             address: meetup.address,
             image: meetup.image,
             id: meetup._id.toString(),
        })), // meetups are we are fetching from mongodB database from users requests.
      },
      revalidate: 1, // updateing our page based on server response. if our data changing everytime we can set 1 second if not we can not set any time slot.
    };
}
export default HomePage;

