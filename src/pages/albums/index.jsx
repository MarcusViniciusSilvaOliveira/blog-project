import axios from "axios";

export async function getServerSideProps () {
    const fecth = await axios.get('https://jsonplaceholder.typicode.com/albums');
    const data = await fecth.data;

    return {
        props: {
            albums: data
        }
    }
}

const Albums = (props) => {

    const listOfAlbums = () => {
        return <ol>
            {props.albums.map((user, index) => {
                return (
                    <li key={index}>
                        <p>{user.title}</p>
                    </li>
                )
            })}
        </ol>
    }

    return (
        <div>
            <h2>This page is loaded with SSR</h2>
            <hr/>
            <i>This page does a API fetch and generate the content from the server side on every page request.</i>
            <br />
            <br />
            <h4>List of Albums: </h4>
            {listOfAlbums()}
        </div>
    )
}

export default Albums;