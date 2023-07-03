import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')

  return (
    <div className="flex justify-center items-center">
      <div style={{
        width: '500px',
      }}>
        <h1 style={{ fontSize: 40, marginBottom: 0 }}>English 1</h1>
        <p style={{ marginTop: 10 }}>Keyword: <span style={{ fontWeight: 700 }}>Board</span></p>
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
            }}
            placeholder="Type"
            onChange={(e) => setValue(e.target.value)}
            className="text-[20px]"
            type="text" value={value} />
        </form>
        <div style={{ marginTop: 40, fontWeight: '700' }}>
          <p>More Information</p>
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
              }}
            >
                asdfasdf
              </div>
            <div
              style={{
                width: '50%',
                textAlign: 'center',
                fontWeight: '800',
              }}
            >Absolutely</div>
          </div>
        </div>
      </div>
      <div style={{paddingTop: 60}}>
        <button style={{
          background: 'green',
          color: 'white',
        }}>Submit</button>
      </div>
    </div>
  )
}

export default App
