

import axios from 'axios';
import { useState } from 'react';
import { Route} from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };
  console.log("1111",questions);
  const ques = questions
  console.log("ques===",ques);
  return (
    <BrowserRouter>
     <div className="app" style={{backgroundImage: "URL(https://raw.githubusercontent.com/piyush-eon/Reactjs-Quiz-App/master/public/ques1.png"}}>
      <Header/>
      <Footer />
      <Switch>
        <Route path="/" exact>
          <Home name={name} setName={setName} fetchQuestions={fetchQuestions}/> 
        </Route>
        <Route path="/quiz">
            <Quiz questions={questions}
            setQuestions={setQuestions}
            name={name}
            score={score}
            setScore={setScore}

            
            /> </Route>
            <Route path="/result">
              <Result name={name} score={score} />

            </Route>
      </Switch>
    </div>
    
    </BrowserRouter>
   
  );
}

export default App;
