import React, { useState, useEffect } from "react";
import "../css/App.css";
import Header from "./Header";

const App = () => {
  const [display, setDisplay] = useState('');
  const [pre, setPre] = useState(false);
  const [dot, setDot] = useState(true);
  const [countNum, setCountNum] = useState(0);

  useEffect(() => {
    let messageBody = document.getElementById('dis')
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  }, [display]);

  const getType = (a) => {

    if (a === '.') {
      return 'dot';
    }
    else if (['+', '-', '*', '/'].includes(a)) {
      return 'op'
    }
    else {
      return 'num'
    }
  }

  const clear = () => {
    setDisplay('');
    setDot(true)
    setPre(false)
    setCountNum(0);
  };

  const backspace = () => {
    if (display.length > 0) {
      let s = display.substring(0, display.length - 1);
      let last = display.at(display.length - 1);

      if (display === 'error') {
        setDisplay('');
        return;
      }
      if (getType(last) === 'dot') {
        setDot(true)
      }
      else if (getType(last) === 'op') {
        setPre(true)
      }
      else {
        setCountNum(a => a - 1)
      }
      setDisplay(s);


    }
  };

  const op = (e) => {
    try {
      if (pre || (display.length === 0 && e === '-')) {
        let s = display + e;
        setDisplay(s);
        setDot(true)
        setPre(false)
        setCountNum(0)
      }
      else if (e === '-') {
        let o = display.at(display.length - 1);
        if (o === '*' || o === '/' || o === '+') {
          let s = display + e;
          setDisplay(s);
          setDot(true)
          setPre(false)
          setCountNum(0)
        }
      }
    } catch (e) {
      alert('something went wrong!');
    }
  };

  const rational = () => {
    if (dot) {
      if (display.length === 0 || getType(display.at(display.length - 1)) === 'op') {
        let s = display + '0.';
        setDisplay(s);
        setDot(false)
        setCountNum(0)
      }
      else {
        let s = display + '.';
        setDisplay(s);
        setDot(false)
        setCountNum(0)
      }
    }
  }

  const num = (e) => {
    if (countNum <= 15) {
      let s = display
      s += e.target.innerHTML;
      setDisplay(s);
      setPre(true);
      setCountNum(a => a + 1)
    }
  };

  const equals = () => {
    try {
      // eslint-disable-next-line no-eval
      let a = eval(display);
      a = a.toFixed(6);
      setDisplay(a)
      setDot(false)

    }
    catch (e) {
      setDisplay('error')
    }

  };

  return (
    <>
      {/* header */}
      <Header />

      {/* main app */}

      <div className="outer-con">
        <div className="app">

          <div className="display" id="dis">
            {display.length === 0 ? '0' : display}
          </div>



          <div className="inputs">
            <div
              onClick={clear}
              style={{ gridColumn: "1/3", fontWeight: "bold" }}
              className={"highlight"}
            >
              Clear
            </div>
            <div onClick={backspace} className={"highlight"}>
              <img src="./backspace.png" alt="c" width={"20px"} />
            </div>
            <div onClick={() => { op('/') }} className={"highlight"}>
              <img src="./divide.png" alt="/" width={"20px"} />
            </div>

            <div onClick={num}>7</div>
            <div onClick={num}>8</div>
            <div onClick={num}>9</div>
            <div onClick={() => { op('*') }} className={"highlight"}>
              <img src="./mul.png" alt="✖" width={"20px"} />
            </div>

            <div onClick={num}>4</div>
            <div onClick={num}>5</div>
            <div onClick={num}>6</div>
            <div onClick={() => { op('-') }} className={"highlight"}>
              <img src="./minus.png" alt="-" width={"20px"} />
            </div>

            <div onClick={num}>1</div>
            <div onClick={num}>2</div>
            <div onClick={num}>3</div>
            <div onClick={() => { op('+') }} className={"highlight"}>
              <img src="./plus.png" alt="+" width={"20px"} />
            </div>

            <div onClick={rational}>.</div>
            <div onClick={num}>0</div>
            <div onClick={equals} style={{ gridColumn: "3/5", backgroundColor: 'orange' }}>
              =
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
