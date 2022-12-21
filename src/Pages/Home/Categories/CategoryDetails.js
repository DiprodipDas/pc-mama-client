import React from 'react';

const CategoryDetails = ({single,setOrder}) => {
    const {name,img,location,rePrice,orPrice,usetime}=single;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className='text-sm font-semibold'>Location:{location}</p>
          <p className='text-sm font-semibold'>Original Price:{orPrice}TK</p>
          <p className='text-sm font-semibold'>Resale Price:{rePrice}TK</p>
          <p className='text-sm font-semibold'>Resale Price:{rePrice}</p>
          <p className='text-sm font-semibold'>Using Time:{usetime}</p>
          <div className="card-actions">
            <label 
            htmlFor="booking-modal" 
            className="btn btn-success"
            onClick={()=>setOrder(single)}
            >Buy Now</label>
          </div>
        </div>
      </div>
    );
};

export default CategoryDetails;