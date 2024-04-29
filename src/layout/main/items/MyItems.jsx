import { useContext, useEffect, useState } from "react";
import MyCard from "../../../components/cards/MyCard";
import { AuthContext } from "../../../provider/AuthProvider";


const MyItems = () => {

    const {user, theme} = useContext(AuthContext) || {};

    const [myItems, setMyItems] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/items/email/${user?.email}`)
        .then (res => res.json())
        .then (data => {
            console.log(data)
            setMyItems(data);
        })
    },[])
  console.log(myItems.length)
    return (
        <div className="m-10 md:m-auto">
            {
                myItems.length === 0 ? (<div className={`mockup-window border min-h-screen my-10 ${theme === 'dark'? 'bg-[#000000c3]': 'bg-[#fffd]'}`}>
                <div className="flex justify-center items-center h-[500px] px-4"> <h1 className="text-2xl md:text-4xl font-roboto font-bold">No Item is Added By You.</h1></div>
              </div>) : (<div className="grid lg:grid-cols-2 xl:grid-cols-4 justify-center p-5 gap-10">
                {
                    myItems.map(myItem => <MyCard key={myItem._id} myItem={myItem} theme={theme}></MyCard>)
                }
                </div>)
            }

            
           
            
        </div>
    );
};

export default MyItems;