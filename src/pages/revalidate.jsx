import axios from "axios";

const Revalidate = () => {
    const RevalidateHanlde = () => {
        axios.get("http://localhost:3000/api/revalidate").then(() =>{
            alert("Content regenerated successfully!");
        }).catch((err) => {
            alert("Something went wrong!");
            console.log(err);
        })
    }

    return (
        <div>
            <h2>Api Calls</h2>
            <hr/>
            <div className="card">
                <div className="card-header">
                Revalidate ISR Content
                </div>
                <div className="card-body">
                    <p className="card-text">This function call a internal API request that revalidate all the ISR content.</p>
                    <button className="btn btn-primary" onClick={() => RevalidateHanlde()}>Revalidate</button>
                </div>
            </div>
        </div>
    )
}

export default Revalidate;