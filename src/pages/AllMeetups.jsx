import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadMeetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://meetup-d50f4-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => res.json())
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          meetups.push({
            ...data[key],
            id: key,
          });
        }
        setIsLoading(false);
        setMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <h1>AllMeetups</h1>
      <MeetupList meetups={loadMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
