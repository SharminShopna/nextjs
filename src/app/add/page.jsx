import React from 'react';

const page = () => {
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const title = form.title.value;
    //     const description = form.description.value;
    //     const category = form.category.value;
    //     const photo = form.photo.value;
    //     const time = new Date();
    //     const dateOnly = time.toISOString().split('T')[0];
    //     const user = form.user.value;
    //     const details = form.details.value;
      
    //     const data = { title, description, category, photo, dateOnly, user, details };
      
      
    //     axios
    //       .post("http://localhost:3000/api/products", data)
    //       .then((res) => console.log(res.data))
    //       .catch((e) => console.error("error:", e.message));
          
    //   };
      
      return (
        <div>
           <div className=" p-24">
          <h2 className="text-4xl mt-24 mb-24 font-extrabold text-center text-[#D2B48C]">----Add Menu----</h2>
          <form className="space-y-8">
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
            {/* form supplier and taste row */}
            <div className="">
             
    
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
            {/* form category and details row */}
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
                    type="text"
                    name="details"
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