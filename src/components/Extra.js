import '../App.css';
import React, { useState } from 'react';

function Extra() {
  const [num, setNum] = useState(0);
  const [bgcolor, setBgcolor] = useState("white");
  const Dincrece = () => {
    if (num <= 0) {
      setBgcolor("bg");
      alert("your number is less than zero")
    }
    else if (num == 1) {
      setBgcolor("bg1");
      setNum(num - 1)
    }
    else if (num == 2) {
      setBgcolor("bg2");
      setNum(num - 1)
    }
    else if (num == 3) {
      setBgcolor("bg3");
      setNum(num - 1)
    }
    else if (num == 4) {
      setBgcolor("bg4");
      setNum(num - 1)
    }

    else {
      setNum(num - 1)
      setBgcolor("white");
    }
  }
  const increce = () => {
    if (num >= 5) {

      setBgcolor("bg");
      alert("your number is less than zero")
    }
    else if (num == 1) {
      setBgcolor("bg1");
      setNum(num + 1)
    }
    else if (num == 2) {
      setBgcolor("bg2");
      setNum(num + 1)
    }
    else if (num == 3) {
      setBgcolor("bg3");
      setNum(num + 1)
    }
    else if (num == 4) {
      setBgcolor("bg4");
      setNum(num + 1)
    }
    else {
      setNum(num + 1)
      setBgcolor("white");
    }
  }
  const reset = () => {
    setNum(0)
    setBgcolor("white");
  }

  // const changeColor = () => {
  //   // alert("ok");
  //   setBgcolor("bg1");
  // }




  // const [ratingValue, setRatingValue] = useState(0)
  
  // const handleRating = (rate: number) => {
  //   setRatingValue(rate)
  // }

  return (
    <>
      <div className={bgcolor}>
        <h1>{num}</h1>
        <button onClick={increce}>increce</button>
        <button onClick={Dincrece}>dincrece</button>
        <button onClick={reset}>reset</button>
        {/* <button onClick={changeColor}>changeColor</button> */}
      </div>
      {/* <Rating 
      onClick={handleRating}
      initialValue={2.5}
      ratingValue={ratingValue}
    /> */}
    </>
  );
}

export default Extra;
