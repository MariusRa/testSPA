

export const callApiWithToken = async(accessToken, apiEndpoint) => {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: {
            'Authorization': bearer}
    };


    return fetch(apiEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));

}

export const postApiWithToken = async(accessToken, apiEndpoint) => {
    //const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;


    const appRoleAssignment = {
        principalId: 'fd262146-b53c-47b3-afc2-6484643c68d1',
        resourceId: '070c38b3-d8cd-4aae-97b7-e49d01a98507',
        appRoleId: '2c305373-5d7b-4c11-b134-4b6ffc88999c'
    }

    const options = {
        method: "POST",
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appRoleAssignment)
    };


    return fetch(apiEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export const deleteApiWithToken = async(accessToken, apiEndpoint) => {
    //const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;


    // const appRoleAssignment = {
    //     principalId: 'fd262146-b53c-47b3-afc2-6484643c68d1',
    //     resourceId: '070c38b3-d8cd-4aae-97b7-e49d01a98507',
    //     appRoleId: '2c305373-5d7b-4c11-b134-4b6ffc88999c'
    // }

    const options = {
        method: "DELETE",
        headers: {
            'Authorization': bearer,
        },
    };


    return fetch(apiEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}
