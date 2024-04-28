import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const AddItems = () => {
    const {user, theme} = useContext(AuthContext);

    const addItem = e => {
            
        e.preventDefault();

           
     //photo_url  item_name   username  email customization subcategory_Name stockStatus description price processing_time rating
     const form = e.target;
     const photo_url = form.photo_url.value;
     const item_name  = form.item_name.value;
     const username = form.username.value;
     const email = form.email.value;
     const customization = form.customization.value;
     const subcategory_Name = form.subcategory_Name.value;
     const stockStatus = form.stockStatus.value;
     const description = form.description.value;
     const price = form.price.value;
     const processing_time = form.processing_time.value;
     const rating = form.rating.value;
     const userPhoto = user?.photoURL;
     const itemData = {photo_url, item_name,  username, email, customization, subcategory_Name, stockStatus,description, price, processing_time, rating, userPhoto}

     console.log(itemData);


     fetch('http://localhost:5000/items', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(itemData)
     })
     .then(res=> res.json())
     .then(data => {
      console.log(data)
      if(data.insertedId) {
        toast.success('Item Added Successfully');
      }
     })

    }


    return (
        <div className="flex justify-center item-center ">
          <div><Toaster></Toaster></div>
            <div className="p-5">
            <div className={`mockup-window border min-h-screen my-10 ${theme === 'dark'? 'bg-[#000000c3]': 'bg-[#fffd]'}`}>
  <div className="flex justify-center px-4 p-5">  <form onSubmit={addItem}>
            <div className="form-control ">
              <label className="label">
                <span className={theme === 'dark'? `label-text text-white font-pixel`: `label-text text-black font-pixel`}>Product Image</span>
              </label>
              <input type="text" name="photo_url" placeholder="URL" className="input border-[#ca678c]  font-pixel" required />
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
              <input type="text" name="username" placeholder={user?.displayName} className="input  input-bordered border-[#ca678c] font-pixel" defaultValue={user?.displayName} disabled/>
                </div>
                <div className="form-control">
                <label className="label">
                <span className={theme === 'dark'? `label-text text-white font-pixel`: `label-text text-black font-pixel`}>Email</span>
              </label>
              <input type="text" name="email" placeholder={user?.email} className="input input-bordered border-[#ca678c] font-pixel" defaultValue={user?.email} disabled />
                </div>
            </div>
            <div className="flex mt-6 flex-col md:flex-row items-center gap-8 font-pixel">
                
                <div className="">
 <select name="customization" className="select select-info w-[478px] md:w-full border-[#ca678c]" required>
  <option disabled selected>Customization</option>
  <option>Yes</option>
  <option>No</option>
  
</select></div>
                <div className="">
                <select name="subcategory_Name" className="select select-info w-[478px] md:w-full border-[#ca678c]" required>
  <option disabled selected>Subcategory</option>
  <option>Landscape Painting</option>
  <option>Portrait Drawing</option>
  <option>Watercolour Painting</option>
  <option>Oil Painting</option>
  <option>Cartoon Drawing</option>
</select> 
                </div>
                <div className="">
                <select name="stockStatus" className="select select-info w-[478px] md:w-full border-[#ca678c]" required>
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
              <textarea name="description" placeholder="Product Description" className="input input-bordered border-[#ca678c] font-pixel h-24" required></textarea>
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
  <input type="radio" name="rating" className="mask mask-star" value={1}/>
  <input type="radio" name="rating" className="mask mask-star"  value={2}/>
  <input type="radio" name="rating" className="mask mask-star" value={3}/>
  <input type="radio" name="rating" className="mask mask-star" value={4}/>
  <input type="radio" name="rating" className="mask mask-star" value={5}/>
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
      </div>
           
 </div>
        
    );
};

export default AddItems;