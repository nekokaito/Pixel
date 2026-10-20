/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Avatar from "../Avatar";

const TableBody = ({ item }) => {
  const {
    _id,
    item_name,
    username,
    email,
    subcategory_Name,
    stockStatus,
    price,
    userPhoto,
  } = item;

  return (
    <tbody className="font-roboto">
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <Avatar src={userPhoto} name={username} email={email} />

            <div className="min-w-0">
              <div className="font-bold truncate max-w-[180px]">
                {username}
              </div>
              <div className="text-sm opacity-50 truncate max-w-[220px]">
                {email}
              </div>
            </div>
          </div>
        </td>

        <td>
          <span className="font-bold">{item_name}</span>
        </td>

        <td>{subcategory_Name}</td>
        <td>{price}</td>
        <td>{stockStatus}</td>

        <th>
          <Link to={`/${_id}`}>
            <button type="button" className="btn btn-ghost">
              View Details
            </button>
          </Link>
        </th>
      </tr>
    </tbody>
  );
};

export default TableBody;
