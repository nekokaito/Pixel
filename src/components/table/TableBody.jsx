/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const TableBody = ({item}) => {

    const {_id, item_name, username, email, 
        subcategory_Name, stockStatus, price, userPhoto} = item;
    return (
        
            <tbody className="font-roboto">
      {/* row 1 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={userPhoto} alt={`${username}'s avatar`} />
              </div>
            </div>
            <div>
              <div className="font-bold">{username}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
         <span className=" font-bold">{item_name}</span> 
          
         
        </td>
        <td>{subcategory_Name}</td>
        <td>{price}</td>
        <td>{stockStatus}</td>
        <th>
        <Link to={`/${_id}`}> <button className="btn btn-ghost ">View Details</button></Link>
        </th>
      </tr>
   
    </tbody>
       
    );
};

export default TableBody;