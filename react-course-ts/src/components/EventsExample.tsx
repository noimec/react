import { FC, useRef, useState } from "react"


export const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('value');
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('drop');

    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} placeholder="управляемый" />
            <input ref={inputRef} placeholder="не управляемый" />
            <button onClick={clickHandler}>Add</button>
            <div
                onDrag={dragHandler}
                draggable
                style={{ height: 200, width: 200, background: 'red' }}
            >
            </div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{ height: 200, width: 200, background: isDrag ? 'blue' : 'red', marginTop: 15 }}
            >
            </div>
        </div>
    )
}