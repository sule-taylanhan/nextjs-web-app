import { MongoClient,ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { Fragment } from "react";
import Head from "next/head";

function MeetupDetails(props){
    return(
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
        <MeetupDetail  
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
        />
        </Fragment>
    )
}
export async function getStaticPaths(){


    
    const client = await MongoClient.connect("mongodb+srv://rcptay:gcdLc2efFKueFW2M@cluster0.dbcix6t.mongodb.net/nextApp?retryWrites=true&w=majority");




    const db = client.db();
    
    const meeetupsCollection = db.collection("nextApp"); 
    const meetups = await meeetupsCollection.find({},{_id:1}).toArray();
    client.close();
    return {
        fallback: "blocking",  // we can set 'blocking' or true  will generate new meetup and will not show 404 page any more.
        paths: meetups.map((meetup) => ({
            params: {meetupId: meetup._id.toString()},
        })),
    };
}

export async function getStaticProps(context){
    //fetch data for a single meetup
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect("mongodb+srv://rcptay:gcdLc2efFKueFW2M@cluster0.dbcix6t.mongodb.net/nextApp?retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection('nextApp'); 
    const selectedMeetup = await meetupsCollection.findOne({
        _id:  new ObjectId(meetupId),
    });
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image:selectedMeetup.image,
                description: selectedMeetup.description,
            },
        },
    };
}
export default MeetupDetails;