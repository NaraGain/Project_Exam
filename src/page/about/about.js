
import {React} from "react"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import HeroPage from "./component/AboutHero"
import ColFour from "./component/ColFour"
import Banner from "./component/Banner"


function About(){

    return   <>
    <Navbar></Navbar>
      <section className=" dark:bg-gray-800 dark:text-gray-100 text-white">
       <HeroPage/>
        <div className="container mx-auto justify-around py-5 mt-10  my-auto space-y-10 text-slate-900">
          
        
       <div className="grid grid-cols-3 grid-row-2 gap-3 px-10 divide-y ">
       <div className="items-center my-auto  col-span-3 justify-center flex flex-col py-5 space-y-4">
        <h1 className=" text-[30px] font-extrabold">
Test is about giving people </h1>
<p>
power to create space to find belonging in their lives.
<br></br>   We want to make it easier for you to  talk regularly with the people you care about. 
    </p> 
            </div>
            <div className=" px-5 py-10 space-y-10 rounded-md ">
                     <Banner title="Our Story" 
                     img="https://ouch-cdn2.icons8.com/OF-DTADgUDe9DDzwNsdK3eLJ5yFu-6fmqRPtSg9Qbd4/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODkx/LzQ0ODQ3ZTVlLTdm/MjgtNDBkYy04ZmU4/LWUzODExNDJlZjk3/OS5zdmc.png"
                      desc="Discord is about giving people the power to create space to find belonging in their lives.
                      We want to make it easier for you to talk regularly with the people you care about."/>
                </div>

            <div className=" px-5 py-10 space-y-10 rounded-md ">
                     <Banner title="Our Task"
                         img=   "https://cdn0.iconfinder.com/data/icons/education-e-learning-3/5000/3_drawkit-education-elearning-online-school-512.png"
                         desc="Discord is about giving people the power to create space to find belonging in their lives.
                             We want to make it easier for you to talk regularly with the people you care about."/>
            </div>
            <div className=" px-5 py-10 space-y-10 rounded-md ">    
                     <Banner title="Our Vision"
                      img="https://cdni.iconscout.com/illustration/premium/thumb/login-6262949-5253376.png"
                       desc="Discord is about giving people the power to create space to find belonging in their lives.
                       We want to make it easier for you to talk regularly with the people you care about."/>
            </div>
           <div className="col-span-3 rounded-md flex">
                    <ColFour 

                    title="" 
                    img="https://cdni.iconscout.com/illustration/premium/thumb/sort-data-storage-5156355-4309557.png"
                    desc=""
                    
                    />
           </div>
       </div>
          
           
          
            
        </div>
        <Footer></Footer>
                
</section>
    </>
  

}


export default About