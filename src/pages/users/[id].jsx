import axios from "axios";
import Link from "next/link";

export async function getStaticPaths() {
    const fecth = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = await fecth.data;

    const paths = data.map(user => ({ params: { id: `${user.id}` } }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const fecth = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await fecth.data;

    const formatDate = () => {
        const time = new Date();
        const hour = time.getHours().toString().length == 2 ? time.getHours() : '0' + time.getHours();
        const min = time.getMinutes().toString().length == 2 ? time.getMinutes() : '0' + time.getMinutes();
        const seconds = time.getSeconds().toString().length == 2 ? time.getSeconds() : '0' + time.getSeconds();

        return `${hour}:${min}:${seconds}`;
    }

    return {
        props: {data, date: formatDate()},
        revalidate: 60 * 60 * 1
    };
}

const Users = (props) => {
    return (
        <div>
            <p>Last time when the page was loaded: {props.date}</p>
            <i>This content is regenerated every 60 mins or by calling the revalidate function from API call</i>
            <div className="card">
                <div className="card-header">
                    User Details
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.data.name} {props.data.username}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.data.email}</h6>
                    <p className="card-text">Company: {props.data.company.name}.</p>
                    <Link href="/users" passHref>
                        <a>Back</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Users;