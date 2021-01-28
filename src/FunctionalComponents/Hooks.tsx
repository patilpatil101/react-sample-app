import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fetchRandomData = (pageNumber: number) => {
    return axios.get(`https://randomuser.me/api?page=${pageNumber}`).then((res) => {
        console.log(res)
        return res;
    }).catch((err) => {
        console.log(err)
    })
}

const HooksTest = () => {
    const [name, setName] = useState('Rohit');
    const [surname, setSurname] = useState('Patil');
    const [width, setWidth] = useState(window.innerWidth);
    const [counter, setCounter] = useState(0);
    const [randomUserDataJSON, setRandomUserDataJSON] = useState("");
    const [userInfos, setUserInfos] = useState<any>([]);
    const [nextPageNumber, setNextPageNumber] = useState(1);
    /**
     *  1. Create a counter for me
     *  2. fetch the data from api & show it to the console  https://randomuser.me/api 
     *  3. Could you just start dumping into the screen as like a string I wanna see the JSON. (On Page Load)
     *  4. I saw there will be a name in it & picture is also present. Could you please print his name & his picture? List of user with name & picture
     *  5. Could you add load more button and append your data.
     */
    function handleNameChange(e: any) {
        setName(e.target.value);
    }

    function handleSurnameChange(e: any) {
        setSurname(e.target.value);
    }

    useEffect(() => {
        document.title = name + ' ' + surname;
    })

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    const fetchNextUser = () => {
        fetchRandomData(nextPageNumber).then((randomData: any) => {
            // setRandomUserDataJSON(JSON.stringify(randomData, null, 2) || 'No user data found.');
            if (randomData === undefined) return;
            const newResults = [...userInfos, ...randomData.data.results]
            setUserInfos(newResults);
            setNextPageNumber(randomData.data.info.page + 1);
        })
    }

    useEffect(() => {
        fetchNextUser();
        // fetchRandomData(nextPageNumber).then((randomData: any) => {
        //     setRandomUserDataJSON(JSON.stringify(randomData, null, 2) || 'No user data found.');
        //     setUserInfos(randomData.data.results);
        //     setNextPageNumber(randomData.info.page + 1);
        // })
    }, []) // empty array means it will call only once


    const getFullUserName = (userInfo: UserInfo) => {
        const { name: { first, last } } = userInfo;
        return `${first} ${last}`;
    }

    interface UserName {
        first: string;
        last: string;
        title: string;
    }

    interface UserPicture {
        thumbnail: string;
    }

    interface UserInfo {
        name: UserName;
        picture: UserPicture;
    }

    return (
        <div>
            <h1>==================================================================</h1>
            <h2>Welcome to Hooks</h2>
            <div>Screen Width: {width}</div>
            <input
                value={name}
                onChange={handleNameChange}
            />
            <input
                value={surname}
                onChange={handleSurnameChange}
            />

            <p>{counter}</p>
            <button onClick={() => { setCounter(counter + 1) }}>Increment Count</button>

            {/* <button onClick={() => { fetchRandomData() }}>Fetch Random Data</button> */}

            <button onClick={() => { fetchNextUser() }}>Load More</button>

            {
                userInfos.map((userInfo: UserInfo, idx: number) =>
                    <div key={idx}>
                        <h1>{getFullUserName(userInfo)}</h1>
                        <img src={userInfo.picture.thumbnail} alt="No Image" />
                    </div>
                )
            }
            <pre>{randomUserDataJSON}</pre>
        </div>
    )
}
export default HooksTest;