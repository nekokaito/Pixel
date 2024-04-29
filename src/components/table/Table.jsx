/* eslint-disable react/prop-types */
import TableBody from "./TableBody";

const Table = ({items}) => {
    return (
        <div className="w-[70%] md:w-full">
            <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr className="font-pixel">
        
        <th>User</th>
        <th>Item Name</th>
        <th>Subcategory</th>
        <th>Price</th>
        <th>Stock</th>
        <th></th>
      </tr>
    </thead>
    {
        items.map(item => <TableBody key={item._id} item={item}></TableBody>)
    }
    
    
  </table>
</div>
        </div>
    );
};

export default Table;