import React from 'react';

const AddProduct = () => {

    const handelAddProduct = (event) => {
        event.preventDefault();
        const element = event.target;
        const img = element.img.value;
        const name = element.name.value;
        const categoryName = element.categoryName.value;
        const categoryID = element.categoryID.value;
        const location = element.location.value;
        const resale_price = element.resale_price.value;
        const orginal_price = element.orginal_price.value;
        const used_year = element.used_year.value;
        const post_date = element.post_date.value;
        const sallerName = element.sallerName.value;



        const insertProduct = {
            img, name, categoryName, categoryID, location, resale_price, orginal_price, used_year, post_date, sallerName
        }
        console.log(insertProduct);

        fetch('http://localhost:5000/add-product', {

            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(insertProduct)
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                element.reset();
            }).catch((error) => {
                console.error(error.message);
            })

    }

    return (

        <div className="hero ">
            <div className='hero-content'>
                <h1 className='className="text-center text-5xl font-bold text-yellow-400 p-4'>Add Product</h1>

                <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                    {/*  */}
                    <form onSubmit={handelAddProduct} className='m-4 p-4'>
                        <div className="form-control w-full max-w-xs m-2">
                            <input type="text" name='img' placeholder=" Image URL" className="input input-bordered w-full max-w-xs" required />
                        </div>

                        <div className="form-control w-full max-w-xs m-2">
                            <input type="text" name='name' placeholder="Product Name" className="input input-bordered w-full max-w-xs" required />
                        </div>

                        <div className="form-control w-full max-w-xs m-2">
                            <label for="categoryName" className="label">
                                <span className="label-text">Select Category</span>
                            </label>
                            <select name="categoryName"  className="input input-bordered w-full max-w-xs" id="categoryName">
                                <option value="YAMAHA">YAMAHA</option>
                                <option value="HONDA">HONDA</option>
                                <option value="SUZUKI">SUZUKI</option>
                            </select>
                        </div>

                        <div className="form-control w-full max-w-xs m-2">
                            <input type="text" name='categoryID' placeholder="Category ID" className="input input-bordered w-full max-w-xs" required />
                        </div>

                        <div className="form-control w-full max-w-xs m-2">
                            <input type="text" name='location' placeholder="Location" className="input input-bordered w-full max-w-xs" required />
                        </div>

                        <div className="form-control w-full max-w-xs m-2">
                            <input type="text" name='resale_price' placeholder="Resale Price" className="input input-bordered w-full max-w-xs" required />
                        </div>

                        <div className="form-control w-full max-w-xs m-2">
                            <input type="text" name='orginal_price' placeholder="Orginal Price" className="input input-bordered w-full max-w-xs" required />
                        </div>

                        <div className="form-control w-full max-w-xs m-2">
                            <input type="text" name='used_year' placeholder="Used Year" className="input input-bordered w-full max-w-xs" required />
                        </div>

                        <div className="form-control w-full max-w-xs m-2">
                            <input type="text" name='post_date' placeholder="Post Date" className="input input-bordered w-full max-w-xs" required />
                        </div>

                        <div className="form-control w-full max-w-xs m-2">
                            <input type="text" name='sallerName' placeholder="Saller Name" className="input input-bordered w-full max-w-xs" required />
                        </div>

                        <button className="btn btn-outline btn-primary m-4">Add Product</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;