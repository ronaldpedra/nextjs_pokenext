import Link from "next/link";

const getData = async (params) => {

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params}`)

    const todo = await data.json()

    return todo

}

export async function getStaticPaths() {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    const data = await response.json()

    const paths = data.map((todo) => {
        return {
            params: {
                todoId: `${todo.id}`,
            },
        }
    })
    return { paths, fallback: false}
}

export default async function Todo({ params }) {

    const todo = await getData(params.todoId)

    return (
        <>
            <Link href={'/todo'}>Voltar</Link>
            <h1>Exibindo o todo: {todo.id}</h1>
            <h3>Texto: {todo.title}</h3>
            <p>Comentário: la la la <Link href={`/todo/${params.todoId}/comments/1`}>Detalhes</Link></p>
            <p>Comentário: le le le <Link href={`/todo/${params.todoId}/comments/2`}>Detalhes</Link></p>
            <p>Comentário: li li li <Link href={`/todo/${params.todoId}/comments/3`}>Detalhes</Link></p>
        </>
    )
}