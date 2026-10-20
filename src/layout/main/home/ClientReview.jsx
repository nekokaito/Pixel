import { useEffect, useState } from "react";
import ReviewCard from "../../../components/cards/ReviewCard";
import { cachedFetchJson } from "../../../lib/apiCache";


const ClientReview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
   
         cachedFetchJson('https://raw.githubusercontent.com/nekokaito/json-data/main/reviews.json', { ttl: 86400000 })
         .then(data => setReviews(data))

    },[])


    return (
        <div className="my-36">
        <h1 className="text-center font-jersey  text-white font-bold text-2xl lg:text-5xl my-20">Client Review</h1>
        
        <div className="flex flex-col justify-center p-5 gap-10">

            {
                reviews.map(rev=> <ReviewCard key={rev.id} rev={rev} ></ReviewCard>)
            }
        
        </div>
        
         
    </div>
    );
};

export default ClientReview;