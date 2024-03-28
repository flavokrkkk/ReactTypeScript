import { FC, useState } from "react";
import { Button, FormControl } from "react-bootstrap";

const EventExample: FC = () => {

    const [value, setValue] = useState<string>('')
    
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value, event)
    }

    return (
        <div>
            <FormControl placeholder='Поиск' className="mt-3" value={value} onChange={changeHandler}/>
            <Button className="mt-3" onClick={clickHandler}>Reading</Button>
        </div>
    );
};

export default EventExample;