import { FC } from "react";
import { ITodo } from "../types/types";
import { Button, Card, FormCheck } from "react-bootstrap";

interface TodoProps {
    todo: ITodo
}

const TodoItem: FC <TodoProps> = ({todo}) => {
    return (
        <div>
            <Card style={{marginTop: '50px'}}>
                <Card.Title>
                    {todo.id}. {todo.title}
                </Card.Title>
                <Card.Body>
                    <FormCheck checked={todo.completed}/>
                    <hr/>
                </Card.Body>
                <Button variant="outline-dark">Читать</Button>
            </Card>
        </div>
    );
};

export default TodoItem;