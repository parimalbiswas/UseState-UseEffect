import React, { useEffect, useState } from "react";
import "./App.css";

const UseState = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = useState(0);


  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });

  return (
    <>
      <center>
        <div className="center_div">
          <p>Use State & Use Effect</p>
          <p>{myNum}</p>
          <div class="button2" onClick={() => setMyNum(myNum + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
          </div>
          <div
            class="button2"
            onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
          </div>
        </div>
      </center>
    </>
  );
};

export default UseState;