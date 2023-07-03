/* eslint-disable no-constant-condition */
import { useState } from 'react'
import './App.css'
import data from './data.json';

function App() {
  const [arr, setArr] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const [value, setValue] = useState('')
  const [show, setShow] = useState(false);
  const [error, setError] = useState(2);
  const [loading, setLoading] = useState(false);
  const [random, setRandom] = useState(Math.floor(Math.random() * data.length));


  const handleSubmit = () => {
    let newRandom = Math.floor(Math.random() * data.length);
    if (value.toLowerCase() !== data[random].paragraph_english.toLowerCase()) {
      if (error !== 0) {
        setError(error - 1);
      } 
    }

    if (value.toLowerCase() === data[random].paragraph_english.toLowerCase()) {
      setLoading(true);
      console.log('data', data, 'arr', arr);
      if (data.length - 1 === arr.length) {
        setDone(true);
      }
      
      while (data.length !== arr.length && newRandom !== random) {
        console.log('random', newRandom);
        if (newRandom !== random && !arr.includes(newRandom)) {
          setArr([ ...arr, newRandom ])
          setRandom(newRandom)
          setValue('');
          setError(2)
          setShow(false);
          break;
        } else {
          newRandom = Math.floor(Math.random() * data.length);
        }
      }
    }
    setLoading(false);
  };

  
  const handleSound = (value?: string) => {
    const msg = new SpeechSynthesisUtterance(value || data[random].paragraph_english)
    window.speechSynthesis.speak(msg)
  }

  return (
    <div className="flex justify-center items-center">
      <div style={{
        width: '60vw',
        position: 'relative',
      }}>
        
        <h1 style={{ fontSize: 40, marginBottom: 0 }}>{ !done ? data[random].paragraph_vietnamese : 'Đã hoàn thành tất cả các câu' }</h1>
        
        {
          done && (
            <p onClick={() => {
          setArr([])
          setRandom(Math.floor(Math.random() * data.length))
          setValue('');
          setError(2)
          setShow(false);
          setDone(false);
        }} style={{ marginTop: 10, fontSize: 14, cursor: 'pointer' }}>Thử lại hennn</p>
          )
        }
        
        {
          loading && (
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 'calc(50% - 50px)',
            }}>
              <div className="loader-5 center"><span></span></div>
            </div>
          )
        }
        
        {
          !done && (
            <>
              <p style={{ marginTop: 10 }}>Keyword: <span style={{ fontWeight: 700 }}>{data[random].keyword}</span>
        {
          !show && (
            <button onClick={() => setShow(true)} style={{
          fontSize: 12,
          marginLeft: 4,
          background: '#6ef36e',
          color: 'white',
          padding: '5px 10px'
        }}>hiện nghĩa</button>
          )
        }
          {
            show && <span style={{ marginLeft: 4, color: 'green', fontSize: 12 }}>({data[random].translate})</span>
          }
        </p>
        <form>
          <input 
            style={{
              border: 'none',
              borderBottom: '1px solid grey',
              paddingBottom: '10px',
              paddingLeft: '10px',
              width: '100%',
              color: '#333',
              fontWeight: '500',
              fontSize: '16px',
              fontFamily: 'Comfortaa'
            }}
            placeholder="Type"
            onChange={(e) => setValue(e.target.value)}
            className="text-[20px]"
            type="text" value={value} />
            {
              error === 1 && <p style={{ color: 'red', fontSize: 14 }}>Hông đúng òi, thử lại lần nữa nghenn</p>
            }
             {
                  error === 0 && <p style={{ color: 'red', fontSize: 14, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{data[random].paragraph_english}
                <img onClick={() => handleSound(data[random].paragraph_english)} style={{ cursor: 'pointer', marginLeft: 5 }} src="/public/sound.png" />
                <span style={{ color: 'blue', fontSize: 12, marginLeft: 20, cursor: 'pointer', fontWeight: 600 }} onClick={() => navigator.clipboard.writeText(data[random].paragraph_english)}>
                  Copy
                </span>
                </p>
                }

              
            
        </form>
        <div style={{ marginTop: 40, fontWeight: '700' }}>
          <p>More Information</p>
          {
            data[random].phrases.map((el) => (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 10,
              }}>
                <div 
                  style={{
                    paddingLeft: '10px',
                    width: '50%',
                    color: '#333',
                    fontWeight: '700',
                    fontSize: '16px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                    {el.title}
                    <img onClick={() => handleSound(el.title)} style={{ cursor: 'pointer', marginLeft: 5 }} src="/public/sound.png" />
                    {/* <span  style={{ fontSize: 12, color: 'blue', fontWeight: 600, marginLeft: 5, cursor: 'pointer' }}>Sound</span> */}
                  </div>
                <div
                  style={{
                    width: '50%',
                    textAlign: 'center',
                    fontWeight: '800',
                  }}
                >{el.content}</div>
              </div>
            ))
          }
        </div>
        <div style={{paddingTop: 60}}>
        <button disabled={loading} onClick={handleSubmit} style={{
          background: 'green',
          color: 'white',
        }}>Submit</button>
      </div>
            </>
          )
        }

        
      </div>
      
    </div>
  )
}

export default App
