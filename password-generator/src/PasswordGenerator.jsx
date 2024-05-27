import React, { useState } from 'react'

const PasswordGenerator = () => {
    const [length, setlength] = useState(8)
    const [upper, setUpper] = useState(true)
    const [lower, setLower] = useState(true)
    const [numbers, setNumbers] = useState(true)
    const [symbols, setSymbols] = useState(true)
    const [password, setPassword] = useState("")

    const generatePassword = (e) => {
        let charSet = "";
        if (upper) {
            charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        if (lower) {
            charSet += "abcdefghijklmnopqrstuvwxyz"
        }
        if (numbers) {
            charSet += "0123456789"
        }
        if (symbols) {
            charSet += "!@#$%^&*()+=?"
        }
        // console.log(charSet);
        let generatedPassword = ""
        for (let i = 0; i < length; i++) {
            const random = Math.floor(Math.random() * charSet.length)
            generatedPassword+=charSet[random]
        }
        setPassword(generatedPassword)
    }
    const copyClipBoard=(e)=>{
        navigator.clipboard.writeText(password)
    }
    return (
        <>
            <div className='password-genertor'>
                <h2>Strong Password Generator</h2>
                <div className="input-group">
                    <label htmlFor="num">Password Length</label>
                    <input type="number" id="num" value={length} onChange={(e) => { setlength(parseInt(e.target.value)) }} />
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="upper" checked={upper} onChange={(e) => { setUpper(e.target.checked) }} />
                    <label htmlFor="upper">Include Uppercase</label>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="lower" checked={lower} onChange={(e) => { setLower(e.target.checked) }} />
                    <label htmlFor="lower">Include Lowercase</label>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="numbers" checked={numbers} onChange={(e) => { setNumbers(e.target.checked) }} />
                    <label htmlFor="numbers">Include Numbers</label>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="symbols" checked={symbols} onChange={(e) => { setSymbols(e.target.checked) }} />
                    <label htmlFor="symbols">Include Symbols</label>
                </div>
                <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
                <div className="generated-password">
                    <input type="text" readOnly value={password}/>
                    <button className="copy-btn" onClick={copyClipBoard}>Copy</button>
                </div>
            </div>
        </>
    )
}

export default PasswordGenerator
