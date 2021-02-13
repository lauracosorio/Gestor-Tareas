import React, { useContext } from 'react';
import { CredentialsContext} from "../App"

function Home() {
 const [credentials] = useContext(CredentialsContext);
    return(
        <h1>Welcome {credentials.email}</h1>
    )
}

export default Home;