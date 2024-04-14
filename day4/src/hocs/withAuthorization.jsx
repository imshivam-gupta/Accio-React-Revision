export const withAuthorization = (WrappedComponent) => {
    return (props)=>{
    const randomVal = () => Math.random()>=0.5
    const userLoggedIn = false; // t or f

    if(userLoggedIn){
        return <WrappedComponent {...props} />
    } else{
        return <h1>Login First</h1>
    }
}
}