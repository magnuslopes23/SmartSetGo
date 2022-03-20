// import { Avatar, Button, TextField } from "@material-ui/core";
// import React, { useState } from "react";
import "./style.css";
// import { useLocalContext } from "../../context/context";
//import EditorBody from "./CodeEditor/components/EditorBody";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const CodeIde = ({ classData }) => {
  return (
    <div>
      {/* <EditorBody/> */}
      <Grid container justify="center">
        <Button
          variant="contained"
          color="primary"
          href="https://sh-codesharerealtime.firebaseapp.com/"
        >
          Code Here
        </Button>
      </Grid>
    </div>
  );
};

export default CodeIde;
