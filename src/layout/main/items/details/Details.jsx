import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    const items = useLoaderData();
    const { _id } = useParams();
    const item = items.find(item => item._id == _id);
     
    const {photo_url, item_name,  username, email, customization, subcategory_Name, stockStatus,description, price, processing_time, rating, userPhoto} = item;

    return (
        <div>
           
        </div>
    );
};

export default Details;