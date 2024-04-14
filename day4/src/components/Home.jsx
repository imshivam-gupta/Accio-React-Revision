import { withAuthorization } from "../hocs/withAuthorization";

const Home = () => {
    return (
        <h1>Home Page it is</h1>
    )
}

export default withAuthorization(Home);