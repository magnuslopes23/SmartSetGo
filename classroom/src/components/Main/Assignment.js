import { Avatar, Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import db, { storage } from "../../lib/firebase";
import "./style.css";
import firebase from "firebase";
import { useLocalContext } from "../../context/context";
import { Assignments } from "..";

const Assignment = ({ classData }) => {
    const { loggedInMail } = useLocalContext();

    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInput] = useState("");
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadImage = storage.ref(`images/${image.name}`).put(image);
        console.log("images", uploadImage);
        uploadImage.on("state_changed", () => {
            storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then((url) => {
                    db.collection("Assignments")
                        .doc("classes")
                        .collection(classData.id)
                        .add({
                            timstamp: firebase.firestore.FieldValue.serverTimestamp(),
                            imageUrl: url,
                            text: inputValue,
                            sender: loggedInMail,
                        });
                });
        });
    };

    return (

        <div className="main__announcements">
            <div className="main__announcementsWrapper">
                <div className="main__ancContent">
                    {showInput ? (
                        <div className="main__form">
                            <TextField
                                id="filled-multiline-flexible"
                                multiline
                                label="Announce Something to class"
                                variant="filled"
                                value={inputValue}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <div className="main__buttons">
                                <input
                                    onChange={handleChange}
                                    variant="outlined"
                                    color="primary"
                                    type="file"
                                />

                                <div>
                                    <Button onClick={() => setShowInput(false)}>
                                        Cancel
                                    </Button>

                                    <Button
                                        onClick={handleUpload}
                                        color="primary"
                                        variant="contained"
                                    >
                                        Post
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div
                            className="main__wrapper100"
                            onClick={() => setShowInput(true)}
                        >
                            <Avatar />
                            <div>Post Your Assignment</div>
                        </div>
                    )}
                </div>
            </div>
            <Assignments classData={classData} />
        </div>
    );
}

export default Assignment;