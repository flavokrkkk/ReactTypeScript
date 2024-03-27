import React, { FC, useRef, useState } from "react";

const EventExample: FC = () => {

    //Состояние для управляемого инпута

    const [value, setValue] = useState <string> ('')
    const [isDrag, setIsDrag] = useState <boolean>(false)

    //Состояние для не управляемого инпута
    const inputRef = useRef<HTMLInputElement>(null)

    //Состояние для события
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
        console.log(value, e);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
       console.log('DRAG', e);
    }

    const dragWithPrevent = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('DROP');
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} placeholder="Управляемый"/>
            <input ref={inputRef} placeholder="Неуправляемый"/>
            <button onClick={clickHandler}>Подписаться</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div 
                onDrop={dropHandler} 
                onDragLeave={leaveHandler} 
                onDragOver={dragWithPrevent}
                style={{width: 200, height: 200, background: isDrag ? 'yellow ': 'red', marginTop: 15}}></div>
        </div>
    );
};

export default EventExample;