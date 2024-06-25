import Link from "next/link";

export default function Comments({ params }) {

    return (
        <>
        <Link href={`/todo/${params.todoId}`}>Voltar</Link>
        <h1>Exibindo o todo: {params.commentsId}</h1>
        <p>Comentário: la la la <Link href={``}>Detalhes</Link></p>
        </>
    )
}