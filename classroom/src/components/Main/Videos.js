import { Avatar, Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import db, { storage } from "../../lib/firebase";
import "./style.css";
import firebase from "firebase";
import { useLocalContext } from "../../context/context";
import { PostVideo } from "..";

const Videos = ({ classData }) => {
    const { loggedInMail } = useLocalContext();

    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInput] = useState("");
    const [image, setImage] = useState(null);
    // const [value, setValue] = React.useState(0);
    const handleUpload = () => {
        const uploadImage = storage.ref(`images/${image.name}`).put(image);

        uploadImage.on("state_changed", () => {
            storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then((url) => {
                    db.collection("videos")
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
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
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
                            <div>Post Videos to class</div>
                        </div>
                    )}
                </div>
            </div>
            <PostVideo classData={classData} />
        </div>
    );
}

export default Videos;