import axios from "axios";
import Link from 'next/link'

export async function getStaticProps() {
    const fecth = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = await fecth.data;

    const formatDate = () => {
        const time = new Date();
        const hour = time.getHours().toString().length == 2 ? time.getHours() : '0' + time.getHours();
        const min = time.getMinutes().toString().length == 2 ? time.getMinutes() : '0' + time.getMinutes();
        const seconds = time.getSeconds().toString().length == 2 ? time.getSeconds() : '0' + time.getSeconds();

        return `${hour}:${min}:${seconds}`;
    }

    return {
        props: {
            users: data,
            date: formatDate()
        },
        revalidate: 60 * 60 * 1
    }
}

const Users = (props) => {

    const listOfUsers = () => {
        return <ol>
            {props.users.map((user, index) => {
                return (
                    <li key={index}>
                        <p>
                            <span>
                                <Link href={`/users/${user.id}`}>
                                    {user.name}
                                </Link>
                            </span>
                        </p>
                    </li>
                )
            })}
        </ol>
    }

    return (
        <div>
            <h2>This page is loaded with ISR</h2>
            <hr/>
            <p>Last time when the page was loaded: {props.date}</p>
            <i>This content is regenerated every 60 mins or by calling the revalidate function from API call.</i>
            <br />
            <br />
            <h4>List of Users: </h4>
            {listOfUsers()}
        </div>
    )
}

export default Users;