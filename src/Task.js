
export const Task=(props)=>{

    return (

        
        <div className="task"
        style={{backgroundColor:props.completed ?"#98FB98 " : "#FFC0CB" ,borderRadius:"10px"}}>
         
          <h1 >{props.taskName}</h1>
          <button style={{}} onClick={() => props.completeTask(props.id)}>Complete</button>
          <button  onClick={() => props.deleteTask(props.id)}>D</button>
        </div>
      );

};