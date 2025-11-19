import { useBoard } from '../Contexts/BoardContext.jsx'
import { useState, useRef } from 'react'

function AddBoard() {
    const { addBoard } = useBoard();

    const [clicked, setClicked] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputReff = useRef('');



    function handleClick() {
        setClicked(true);
        if (inputValue !== '') { addBoard(inputValue); }
        inputReff.current.value = '';
        setInputValue('');

    }


    return (
        <div>
            <button onClick={handleClick}>Add Board</button>

            {
                clicked && (
                    <input
                        type="text"
                        placeholder="Board Name"
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                        ref={inputReff}
                    />
                )
            }


        </div>

    )
}

export default AddBoard