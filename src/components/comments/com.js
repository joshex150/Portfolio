import Particle from "../Particle";
import Comments from "./Comments";
import './index.css';
import Trace from "./Tra";


function Com() {

  return (
    <div>
      <Particle className="Particle"></Particle>
      <div className="App">
       <Trace></Trace> 
       <Comments
        commentsUrl="https://josh-folio.web.app/comments"
        currentUserId= "userid"
      />
      </div>
    </div>
  );
  
}


export default Com;
