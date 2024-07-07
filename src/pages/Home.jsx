
// import { Link } from 'react-router-dom';
import './css/homepage.css'

export const Home = () => {


  return (
    <>
    <div className="home-container">
        {/* <marquee behavior="alternate" direction="left" scrollamount="20"> */}
        <h1 className='home-h1'>Welcome to Rick and Morty show</h1>

        {/* </marquee> */}
        <div className="card-container">
                <img src="https://i.pinimg.com/originals/3b/ee/50/3bee507877e2acd65b35c8798129c187.jpg" alt="" className='home-img'/>

                <img src="https://i.pinimg.com/originals/fc/fa/27/fcfa27521e351018ebab10ac255cb78a.jpg" alt="" className='home-img'/>

                <img src="https://pbs.twimg.com/media/FmhKi82WIAAh26S?format=jpg&name=4096x4096" alt="" className='home-img' />
        </div>


    </div>
        
    </>
  );
}

// export default Home;