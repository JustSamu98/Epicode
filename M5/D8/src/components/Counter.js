import React, {useState} from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0); //funzione react che restituisce lo stato e la funzione per cambiare questo stato
    //lo abbiamo destrutturato così, per usarlo abbiamo modificato linea 1 aggiungendo ', {useState}'

    const [formState, setFormState] = useState({}); 
    console.log(formState);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(0);
    }

  return (
    <div>
        <h1>Il conteggio è: {counter}</h1>
        <button onClick={increment}>Incrementa</button>
        <button onClick={decrement}>Decrementa</button>
        <button onClick={reset}>Resetta</button>

        <form>
            <input 
                type='text' 
                name='firstName'
                onChange={(e) => setFormState({ //onChange salva qualsiasi cambiamento di stato
                    ...formState, // prendo tutto quello che c'è in formState grazie alla rest e aggiungici firstName
                    firstName: e.target.value
                })}
            />
            <input 
                type='text' 
                name='lastName'
                onChange={(e) => setFormState({ 
                    ...formState,
                    lastName: e.target.value
                })}
            />
            <button type='submit'>Invia</button>
        </form>
    </div>
  )
}

export default Counter