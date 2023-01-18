import React, { useState } from 'react';
import '../css/App.css'
import Header from './Header'

const App = () => {

  const [problem, setProblem] = useState('');
  const [ans, setAns] = useState('');
  const [pre, setPre] = useState(false);


  const clear = () => {
    setProblem('');
    setAns('')
  }

  const backspace = () => {
    if (problem.length > 0) {
      let s = problem.substring(0, problem.length - 1)
      setProblem(s)
    }
  }

  const op = (e) => {
    try {
      if (e.target.innerHTML === '-' || pre) {
        let s = problem;
        s += (e.target.innerHTML === 'X' ? '*' : e.target.innerHTML)
        setProblem(s);
        setPre(false)
      }
    }
    catch (e) {
      console.log('error')
    }

  }

  const num = (e) => {
    let s = problem;
    s += e.target.innerHTML;

    setProblem(s);
    setPre(true)
  }

  const equals = () => {
    let a = eval(problem)
    setAns(a)
  }


  return (
    <>
      {/* header */}
      <Header />

      {/* main app */}


      <div className='outer-con'>
        <div className='app'>
          <div className='display'>
            <div id='problem'>{problem}</div>
            <div id='ans'>{ans}</div>
          </div>

          <hr />
          <div className='inputs'>
            <div onClick={clear}>C</div>
            <div onClick={backspace}><img src={'./images/backspace.png'} alt='B' width='20px' /></div>
            <div onClick={op}>%</div>
            <div onClick={op}>/</div>

            <div onClick={num}>7</div>
            <div onClick={num}>8</div>
            <div onClick={num}>9</div>
            <div onClick={op}>X</div>

            <div onClick={num}>4</div>
            <div onClick={num}>5</div>
            <div onClick={num}>6</div>
            <div onClick={op}>-</div>

            <div onClick={num}>1</div>
            <div onClick={num}>2</div>
            <div onClick={num}>3</div>
            <div onClick={op}>+</div>

            <div z></div>
            <div onClick={num}>0</div>
            <div onClick={op}>.</div>
            <div onClick={equals}>=</div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App;
