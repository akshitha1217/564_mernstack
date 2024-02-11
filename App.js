import logo from "./logo.svg";
import "./App.css";
import Akshitha from "./images/Akashitha.jpg";
function App() {
  return ( 
    <div className="App">

<h1>Hello World...
</h1>
<h2>Name: T.Akshitha</h2>
<br></br>
<h2>
Ht.No: 2211CS010564
</h2><br></br>
<h2>Group: 7B
</h2>
<hr></hr>
<img src={Akshitha}
style={{width:'450px',height:'450px',borderRadius:'50%'}} alt="Akshitha" />
<h2> About Myself</h2>
<p>I am Akshitha,from Hyderabad.
   I completed my schooling in New era High School and
   my intermediate in Narayana Collage at Hyderabad.
   Present iam pursuing my graduation in MallaReddyUniversity. 
</p>

    </div>
  );
}

export default App;
