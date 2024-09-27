import { useRouter } from "next/router"
export default function Page(){
    const Router = useRouter()
    return <>
        <p>Post: {Router.query.id}</p>
    </>
}