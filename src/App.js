import { useState } from "react";
import FeedbackList from "./Components/FeedbackList";
import Header from "./Components/Header";
import FeedbackData from './data/data'


function App() {
const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header/>
      <div className="container">
        <FeedbackList feedback={feedback}/>
        </div>
    </>
  );
}

export default App;
