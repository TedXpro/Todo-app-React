import { useParams, Link } from 'react-router-dom'

function WelcomeComponent() {

    const { username } = useParams()

    function callHelloWorldRestApi() {
        console.log("called") 

        // axios used to call rest api

    }

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div >
                Manage Your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>
                    Call Hello World</button>
            </div>
        </div>
    )
}

export default WelcomeComponent