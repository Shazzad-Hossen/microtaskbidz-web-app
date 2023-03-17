import React from 'react';
import ButtonPrimary from '../../components/Button/ButtonPrimary/ButtonPrimary';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Signup = () => {
    return (
        <div>

       <Header text="Sign Up" isShow="true"> </Header>

         
         <div className=" p-10 max-w-3xl mx-auto rounded-lg bg-slate-200 border-t-4 border-b-4 border-t-cyan-700 border-b-[#333333] my-6">

            <form>

                <label className='text-xl font-semibold' htmlFor="name">Name</label>  <br />
                <input className='border-5 w-[100%] h-12 my-2 rounded-lg' type="text" name="name" id="name" />

                <label className='text-xl font-semibold' htmlFor="email">Email</label>  <br />
                <input className='border-5 w-[100%] h-12 my-2 rounded-lg' type="email" name="email" id="email" />

                <label className='text-xl font-semibold' htmlFor="password">Password</label>  <br />
                <input className='border-5 w-[100%] h-12 my-2 rounded-lg' type="password" name="pass" id="pass" />

                <label className='text-xl font-semibold' htmlFor="ConfirmPassword">Confirm Password</label>  <br />
                <input className='border-5 w-[100%] h-12 my-2 rounded-lg' type="password" name="confPass" id="confPass" />
                
                <br /> <br />

                <ButtonPrimary text="Sign up"></ButtonPrimary>
                <br /><br />

                <p>Already have an account ? <a className='text-[#028090]' href="/">Sign In here</a></p>


            </form>



         </div>



      
      <Footer></Footer>
            
        </div>
    );
};

export default Signup;