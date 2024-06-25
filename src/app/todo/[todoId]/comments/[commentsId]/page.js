import Link from "next/link";

export default function Comments({ params }) {

    return (
        <>
        <Link href={`/todo/${params.todoId}`}>Voltar</Link>
        <h1>Exibindo o comentário de todo: {params.todoId}</h1>
        <p>Comentário: {params.commentsId}</p>
        
        </>
    )
}