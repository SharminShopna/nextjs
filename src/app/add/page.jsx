"use client"
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"; // toast import kora hoyeche

const page = () => {
   const handleFromSubmit = async (e)=>{
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const time = new Date();
    const dateOnly = time.toISOString().split('T')[0];
    const user = form.user.value;
    const email = form.email.value;
    const data = { title, description, category, photo, dateOnly, user, email };

    axios
    .post("http://localhost:3001/api/menus", data)
    .then((res)=>{
        if (res.data?.insertedId || res.data?.success) {
          toast.success("Menu added successfully!"); // Success toast
        } else {
          toast.error("Something went wrong!"); // Error toast
        }
      })
    .catch((e)=>{
        toast.error(`Error: ${e.message}`); //  Error toast
      });
   }
      
      return (
        <div>
             <Toaster /> {/* Important for showing toast */}
           <div className=" p-24">
          <h2 className="text-4xl mt-24 mb-24 font-extrabold text-center text-[#D2B48C]">----Add Menu----</h2>
          <form className="space-y-8" onSubmit={handleFromSubmit}>
            {/* form name and quantity row */}
            <div className="md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Menu Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="title"
                    placeholder="add menu title"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
    
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    placeholder="description"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form category row */}
            <div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    placeholder="category"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form user name and email row */}
            <div className="md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">User Name </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="user"
                    placeholder="user name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
    
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">User Email </span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form row */}
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Send Img URL (ONLY img bb) URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
    
            <input type="submit" value="Add menu" className="btn btn-block bg-[#D2B48C] text-xl italic"/>
          </form>
        </div>
        </div>
      )
};

export default page;