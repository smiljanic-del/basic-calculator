import {useState} from 'react';
import {useEffect} from 'react';

function App (){

   const[currentSum,setCurrentSum] = useState(0);
   const[clear,setClear] = useState(false);

   useEffect(()=>{
     document.querySelector('#result').value=""
   },[])

   useEffect(()=>{
    if(clear)
    document.querySelector('#result').value=""
  })

   const Add=(e)=>{
       e.preventDefault();
       if(clear) setClear(false)
       let currentNum = document.querySelector('#num').value;
       if (currentNum=='')
       return;
       let sum = currentSum + parseInt(currentNum);
       setCurrentSum(sum);
       document.querySelector('#num').value="";
   }

   const Clear=(e)=>{
    e.preventDefault();
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
}


     return(
       <div className="container">
         <div className="container-title">
           <h3>Basic form calculator</h3>
         </div>
         <form>
           <input type="text" id="result" value={currentSum} readOnly/>
           <br/>
           <input type="text" id="num" placeholder="enter a number"/>
           <br/>
           <button type="button" class="btn btn-outline-success" onClick={Add}>Add</button>
           <button type="button" class="btn btn-outline-danger" onClick={Clear}>Clear</button>
         </form>
       </div>
     )
}

export default App;