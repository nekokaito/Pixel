import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const AddItems = () => {
    const {user, theme} = useContext(AuthContext);

    const addItem = e => {
            
        
    }


    return (
        <div className="flex justify-center item-center ">
            <div className="p-4">
            <form onSubmit={addItem}>
            <div className="form-control ">
              <label className="label">
                <span className={theme === 'dark'? `label-text text-white font-pixel`: `label-text text-black font-pixel`}>Product Image</span>
              </label>
              <input type="text" name="photo-url" placeholder="URL" className="input border-[#ca678c]  font-pixel" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className={theme === 'dark'? `label-text text-white font-pixel`: `label-text text-black font-pixel`}>Product Name</span>
              </label>
              <input type="text" name="item_name" placeholder="Name of Product" className="input input-bordered border-[#ca678c] font-pixel" required />
            </div>
            <div className="">
                <div className="form-control">
                <label className="label">
                <span className={theme === 'dark'? `label-text text-white font-pixel`: `label-text text-black font-pixel`}>Name</span>
              </label>
              <input type="text" name="username" placeholder={user?.displayName} className="input  input-bordered border-[#ca678c] font-pixel" disabled/>
                </div>
                <div className="form-control">
                <label className="label">
                <span className={theme === 'dark'? `label-text text-white font-pixel`: `label-text text-black font-pixel`}>Email</span>
              </label>
              <input type="text" name="email" placeholder={user?.email} className="input input-bordered border-[#ca678c] font-pixel" disabled />
                </div>
            </div>
            <div className="flex mt-6 flex-col md:flex-row items-center gap-8 font-pixel">
                
                <div className="">
 <select name="customization" className="select select-info w-[478px] md:w-full border-[#ca678c]">
  <option disabled selected>Customization</option>
  <option>Yes</option>
  <option>No</option>
  
</select></div>
                <div className="">
                <select name="subcategory_Name" className="select select-info w-[478px] md:w-full border-[#ca678c]">
  <option disabled selected>Subcategory</option>
  <option>Landscape Painting</option>
  <option>Portrait Drawing</option>
  <option>Watercolour Painting</option>
  <option>Oil Painting</option>
  <option>Cartoon Drawing</option>
</select> 
                </div>
                <div className="">
                <select name="stockStatus" className="select select-info w-[478px] md:w-full border-[#ca678c]">
  <option disabled selected>Stock Status</option>
  <option>In stock</option>
  <option>Made to Order</option>
  <option>Out of Stock</option>
</select> 
                </div>

            </div>

            <div className="form-control mt-6">
              <label className="label">
                <span className={theme === 'dark'? `label-text text-white font-pixel`: `label-text text-black font-pixel`}>Description</span>
              </label>
              <textarea name="description" placeholder="Product Description" className="input input-bordered border-[#ca678c] font-pixel" required></textarea>
            </div>

            <div className="form-control">
              <label className="label">
                <span className={theme === 'dark'? `label-text text-white font-pixel`: `label-text text-black font-pixel`}>Price</span>
              </label>
              <input type="text" name="price" placeholder="Price ৳" className="input input-bordered border-[#ca678c] font-pixel" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className={theme === 'dark'? `label-text text-white font-pixel`: `label-text text-black font-pixel`}>Processing Time</span>
              </label>
              <input type="text" name="processing_time" placeholder="Processing time" className="input input-bordered border-[#ca678c] font-pixel"/>
              <div>
              <label className="label mt-6">
                <span className={theme === 'dark'? `label-text text-white font-pixel`: `label-text text-black font-pixel`}>Rating</span>
                <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star"  />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
              </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#ca678c] border-none text-white font-jersey">Add Product</button>
            </div>

            
            
           </form>
            </div>
        </div>
    );
};

export default AddItems;