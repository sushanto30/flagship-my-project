import { Link } from "react-router";

 

const Phone = ({phone}) => {
    // console.log(phone)
    const {image ,name ,
        description , id }=phone
 


    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {name}</h2>
                <p> {description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/card/${id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Phone;