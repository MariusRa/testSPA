import {useEffect, useState} from "react";
import {useMsal} from "@azure/msal-react";

import {Button} from "react-bootstrap";


import {loginRequest} from "../authConfig";

export const ClassroomManage = () => {

    const { instance, accounts} = useMsal();
    const [accessToken, setAccessToken] = useState(null);
    const [users, setUsers] = useState(null);
    const name = accounts[0] && accounts[0].name;

    const apiEndpoint = "https://graph.microsoft.com/beta/users?$top=50"

    const bearer =`Bearer ${accessToken}`;

    const options = {
        method: "GET",
        headers: {
            'Authorization': bearer}
    };
    const request = {
        ...loginRequest,
        account: accounts[0]
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    useEffect (()=>{
        instance.acquireTokenSilent(request).then((response) => {
            setAccessToken(response.accessToken);
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                setAccessToken(response.accessToken);
            });
        })
    }, []);

    function RequestAccessToken() {


         return fetch(apiEndpoint, options)
            .then(response => response.json())
            .then(data=>setUsers(data))
            .catch(error => console.log(error));

    }
    console.log(bearer)
    console.log(users)


    return (
        <div>
            {name}
            <Button variant="secondary" onClick={RequestAccessToken}>Request Access Token</Button>
        </div>)

}
