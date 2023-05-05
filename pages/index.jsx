import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First Meetup',
        image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
        adress: "Adres1",
        description: "a1"
    },
    {
        id: 'm2',
        title: 'Second Meetup',
        image: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        adress: "Adres2",
        description: "a2"
    }
]
function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS}/>
}
export default HomePage;