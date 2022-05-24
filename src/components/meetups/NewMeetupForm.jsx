import React, { useRef } from "react";
import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const titleReference = useRef();
  const imageReference = useRef();
  const addressReference = useRef();
  const descriptionReference = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredTitle = titleReference.current.value;
    const enteredImage = imageReference.current.value;
    const enteredAddress = addressReference.current.value;
    const enteredDescription = descriptionReference.current.value;
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleReference} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageReference} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressReference} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionReference}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add New Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
