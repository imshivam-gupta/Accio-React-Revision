export default function ChildComp({toast}){
    const notify = () =>toast("WOw so easy!");

    return(
        <div>
            <h1> I m child</h1>
            <button onClick={notify}>Notify!</button>
        </div>
    )
}