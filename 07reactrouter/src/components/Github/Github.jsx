import React, { useEffect } from "react"
import { useLoaderData } from "react-router-dom"

function Github(){

    const data = useLoaderData()

    // const [data, setData] = React.useState([])
    
    // useEffect(() => {
    //     fetch('https://api.github.com/users/abhishekpawar1060')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

    return(

        <div className="text-center m-4 bg-gray-600">
            Github username: {data.login}

            <img src={data.avatar_url} width={300}></img>

        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/abhishekpawar1060')
    return response.json()
}