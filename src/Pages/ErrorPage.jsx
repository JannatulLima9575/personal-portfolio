import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h0screen'>
            <img src="https://i.ibb.co/zHSXTy91/image.png" alt="" />
           <div>
             <p className='block'>OPPSS! Page Not Found</p>
             <button className=''>Go to Home</button>
           </div>
        </div>
    );
};

export default ErrorPage;