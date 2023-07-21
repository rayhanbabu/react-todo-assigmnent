import { useState } from 'react'

import './App.css'

function App() {
  const [item, setItem] = useState('');
  const [list,setList]=useState([]);


  const AddToList=()=>{
             list.push(item);
             setList([...list]);
             //console.log(list);
  }

  const RemoveList=(index)=>{
    list.splice(index,1);
    setList([...list]);
} 


   

  return (
    <>
          <div className='container my-3'>
                    <h1 className='text-center'> To-do List</h1>
                 <div className="row p-4 shadow">
                     <div className="col-sm-4">
                       <input className='form-control'
                           onChange={(e)=>setItem(e.target.value)}></input>
                     </div>
                     <div className="col-sm-4">
                         <button className='btn btn-success' onClick={AddToList} >Add</button>
                      </div>
                      <div className="col-sm-4">
                      
                      </div>
                 </div>

                   <br></br>
                  <table className='table table-bordered'>
                        <body>
                        {
                      list.length!==0?(
                       list.map((item,index)=>{
                           return (
                               <tr key={index.toString()}>
                                   <td >{item}</td>
                                   <td><button className='btn btn-danger' onClick={()=>RemoveList(index)}>Remove</button></td>
                               </tr>
                            )
                         })
                      ):(<tr></tr>)
                     }         
                        </body>
                  </table>

          </div>
       
    </>
  )
}

export default App
