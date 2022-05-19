
import { Alert, Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Categories from "../Data/Categories";
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {
  
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);

      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  };
  
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30, color: "black" }}>Quiz Settings</span>
        <div className="settings__select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Catagory"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            START QUIZ
          </Button>
          {error && <Alert  severity="error" color="error">
            Please Enter all the Feilds </Alert>}
            
        </div>
      </div>
      <img
        className="banner"
        src="https://raw.githubusercontent.com/piyush-eon/Reactjs-Quiz-App/800cec3ad30b4669df73766564b8b85202f44f41/public/quiz.svg"
      />
    </div>
  );
};

export default Home;
