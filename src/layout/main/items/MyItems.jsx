import { useContext, useEffect } from "react";
import MyCard from "../../../components/cards/MyCard";
import { AuthContext } from "../../../provider/AuthProvider";


const MyItems = () => {

    // const {user, theme} = useContext(AuthContext);

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/items/${}`)
    // },[])

    return (
        <div>
            <MyCard></MyCard>
        </div>
    );
};

export default MyItems;