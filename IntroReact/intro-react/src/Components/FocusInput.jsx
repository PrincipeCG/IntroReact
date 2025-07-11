import React, {useRef} from "react";

export default function FocusInput(){
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
        console.log(`el input tiene guardado: ${inputRef.current.value}`);
        
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={() => handleClick()}> Escribir en el input </button>
        </div>
    )
}