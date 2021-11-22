import {useParams} from "react-router-dom";

const Welcome = () => {
    const params = useParams()
    console.log(params.new)
    return (
        <section>
            <h1> The Welcome Page </h1>
            {params.new && <p>Welcome new User</p>}
        </section>
    )
}

export default Welcome