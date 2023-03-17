import React from 'react';
import ButtonPrimary from '../../components/Button/ButtonPrimary/ButtonPrimary';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const ResetPassword = () => {
    return (
        <div>
            
<Header text="Reset Password" isShow="true"> </Header>

         
<div className=" p-10 max-w-3xl mx-auto rounded-lg bg-slate-200 border-t-4 border-b-4 border-t-cyan-700 border-b-[#333333] my-6">

   <form>

       

       <label className='text-xl font-semibold' htmlFor="email">Email</label>  <br />
       <input className='border-5 w-[100%] h-12 my-2 rounded-lg' type="email" name="email" id="email" />


       <br /> <br />

       <ButtonPrimary text="Reset"></ButtonPrimary>
       <br />


   </form>



</div>




<Footer></Footer>
            
        </div>
    );
};

export default ResetPassword;