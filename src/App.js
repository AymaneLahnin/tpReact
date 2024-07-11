import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
function App() {
  //use state with integer
  // const [count,setCount]=useState(0)
  // function hadd(){
  //   setCount(count => count+1);
  //   setCount(count => count+1);

  //   setCount(count => count+1);

  // }

  // function hsub(){
  //   if(count ==0){
  //     alert("count is already set to 0")
  //   }
  //   else{
  //     setCount(count-1);
  //   }
    
  // }

  // function hreset(){
  //   setCount(0)
  // }
  // return (
  //   <div className="box">
  //     <div className="control">
  //       <p>{count}</p>
  //       <button onClick={hadd} className="add">add</button>
  //       <button onClick={hsub} className="sub">sub</button>
  //       <button onClick={hreset} className="reset">reset</button>
  //     </div>
  //   </div>
  // );

  
    return(
    <div className="App">
      <Header />
      <TaskList yohoho='1'/>
    </div>
  );
}

export default App;
