import Link from "next/link";

export default function Todo({ params }) {

    return (
        <>
        <Link href={'/'}>Voltar</Link>
        <h1>Exibindo o todo: {params.todoId}</h1>
        <p>Comentário: la la la <Link href={`/todo/${params.todoId}/comments/1`}>Detalhes</Link></p>
        <p>Comentário: le le le <Link href={`/todo/${params.todoId}/comments/2`}>Detalhes</Link></p>
        <p>Comentário: li li li <Link href={`/todo/${params.todoId}/comments/3`}>Detalhes</Link></p>
        </>
    )
}