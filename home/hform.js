import { useState } from 'react';
import '../main/sign.css';
function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved successfully");
            setEmail("");
            setName("");
            setDate("");
        }
    }
    return (
        <>
            <h1>This is React WebApp </h1>
            <form class="form-group" action="">

                <div>
                <input type="text" placeholder="name" 
                value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                <input type="email" placeholder="email" 
                value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                <input type="date" placeholder="Date" 
                value={date} onChange={(e) => setDate(e.target.value)} />
                </div>

                <div>
                <button type="submit" className="btn" 
                onClick={handleOnSubmit}>submit</button>
                </div>

            </form>

        </>
    );
}

export default App;