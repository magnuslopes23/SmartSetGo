import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../lib/firebase";
import "./style.css";
const LectureNotes = ({ classData }) => {
  const [lectureNotes, setLectureNotes] = useState([]);

  useEffect(() => {
    if (classData) {
      let unsubscribe = db
        .collection("notes")
        .doc("classes")
        .collection(classData.id)
        .onSnapshot((snap) => {
          setLectureNotes(snap.docs.map((doc) => doc.data()));
        });
      return () => unsubscribe();
    }
  }, [classData]);
  console.log(lectureNotes);
  return (
    <div>
      {lectureNotes.map((item) => (
        <div className="amt">
          <div className="amt__Cnt">
            <div className="amt__top">
              <Avatar />
              <div>{item.sender}</div>
            </div>
            <p className="amt__txt">{item.text}</p>
            <img className="amt__img" src={item.imageUrl} alt={item.text} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LectureNotes;
