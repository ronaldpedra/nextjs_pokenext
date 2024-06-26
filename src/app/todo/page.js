import Link from "next/link"
import styles from "../../css/pages/Todo.module.css"

const getData = async () => {

    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    return data.json()

}

export default async function Todo() {

    const todos = await getData()

    return (
        <>
        <h1>Tarefas a fazer</h1>
        <ul className={styles.todo_list}>
            {todos.map((todo) => (
                <li key={todo.id}><Link href={`/todo/${todo.id}`}>{todo.id} - {todo.title}</Link></li>
            ))}
        </ul>
        </>
    )
}