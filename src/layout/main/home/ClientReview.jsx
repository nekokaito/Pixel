import { useEffect, useState } from "react";
import ReviewCard from "../../../components/cards/ReviewCard";


const ClientReview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
   
         fetch('https://raw.githubusercontent.com/nekokaito/json-data/main/reviews.json')
         .then(res=> res.json())
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