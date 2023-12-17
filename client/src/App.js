import React, { useState } from 'react';
import './App.css';

function App() {
  const [timestamp1, setTimestamp1] = useState({ date: '', time: '' });
  const [timestamp2, setTimestamp2] = useState({ date: '', time: '' });
  const [differenceInSeconds, setDifferenceInSeconds] = useState(null);

  const calculateDifference = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/calculateDifference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp1: new Date(`${timestamp1.date}T${timestamp1.time}`).toISOString(),
          timestamp2: new Date(`${timestamp2.date}T${timestamp2.time}`).toISOString(),
        }),
      });

      const data = await response.json();
      setDifferenceInSeconds(data.differenceInSeconds);
    } catch (error) {
      console.error('Error calculating difference:', error);
    }
  };

  return (
    <div className="App" style={{height:"100%",backgroundColor:"",width:"100%"}} >
      <div style={{height:"100%",backgroundColor:"burlywood",display:"flex", flexDirection:"column",justifyContent:"space-between"}}>
      <p style={{ fontSize:"50px",fontWeight:"600"}}>Timestamp Difference Calculator</p>
      <label style={{fontWeight:900 , fontSize:"50px", gap:"20px", margin:"20px",backgroundColor:"blanchedalmond"}}>
        Timestamp 1:
        <br />
        <label style={{gap:"20px"}}>Date:</label>
        <input
        style={{  fontSize:"20px",marginRight:"10%",border:"none",marginTop:"60px",padding:"3px"}}
          type="date"
          value={timestamp1.date}
          onChange={(e) => setTimestamp1({ ...timestamp1, date: e.target.value })}
        />
        <label>Time:</label>
        <input
        style={{fontSize:"20px",border:"none",marginTop:"60px",padding:"3px"}}
          type="time"
          value={timestamp1.time}
          onChange={(e) => setTimestamp1({ ...timestamp1, time: e.target.value })}
        />
      </label>
      <br />
      <label  style={{fontWeight:900 , fontSize:"50px", gap:"20px", margin:"20px",backgroundColor:"blanchedalmond"}}>
        Timestamp 2:
        <br />
        <label>Date:</label>
        <input
      style={{  fontSize:"20px",marginRight:"10%",border:"none",marginTop:"60px",padding:"3px"}}
          type="date"
          value={timestamp2.date}
          onChange={(e) => setTimestamp2({ ...timestamp2, date: e.target.value })}
        />
        <label>Time:</label>
        <input
        style={{fontSize:"20px",border:"none",marginTop:"70px",padding:"3px",}}
          type="time"
          value={timestamp2.time}
          onChange={(e) => setTimestamp2({ ...timestamp2, time: e.target.value })}
        />
      </label>
      <br />
      <button style={{padding:"1%" , width:"20%",border:"none" ,backgroundColor:"blanchedalmond", marginLeft:"40%", marginTop:"40px" , marginBottom:"40px" , fontSize:"20px" ,fontWeight:500}} onClick={calculateDifference}>Calculate Difference</button>
      {differenceInSeconds !== null && (
        <p style={{fontSize:"30px",marginRight:"1%",fontWeight:600,color:""}}>Difference in seconds: {differenceInSeconds}</p>
      )}
      </div>
    </div>
  );
}

export default App;