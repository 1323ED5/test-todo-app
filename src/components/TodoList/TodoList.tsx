import TodoItem from "../TodoItem/TodoItem";
import {ITodoListProps} from "../../types/todo";



function TodoList(props: ITodoListProps) {
    const items = props.data.map(item => <TodoItem {...item}/>);
    return <div>
        {items}
    </div>;
}

export default TodoList;