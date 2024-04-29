import { useContext, useEffect, useState } from "react";
import MyCard from "../../../components/cards/MyCard";
import { AuthContext } from "../../../provider/AuthProvider";


const MyItems = () => {

    const {user, theme} = useContext(AuthContext) || {};

    const [myItems, setMyItems] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/items/${user?.email}`)
        .then (res => res.json())
        .then (data => {
            console.log(data)
            setMyItems(data);
        })
    },[])

    return (
        <div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 justify-center p-5 gap-10">
            {
                myItems.map(myItem => <MyCard key={myItem._id} myItem={myItem} theme={theme}></MyCard>)
            }
            </div>
           
            
        </div>
    );
};

export default MyItems;