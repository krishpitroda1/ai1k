import React from "react";
import Navbar from "./Navbar";
import videobg from "../assets/videobg.mp4";
// import Divs from "./Divs";
// import videobg from "../assets/fn4.mp4";
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import img from "../assets/logo.jpg";
import img1 from '../assets/one.jpg'
// import img1 from '../assets/cons.jpeg';
// import img4 from '../assets/tech2.jpg'
// import img3 from "../assets/manage.jpg";
import { Link } from "react-router-dom";
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};
const words = [
  'Cloud InfraStructure',
  "Channel Integration",
  'Automatic Call Distribution',
  'CRM Integration'
];
function Home() {
  // Create a state variable to store the text opacity
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  const [index, setIndex] = useState(0);

  // A useEffect hook to set up a timer that updates the index every 2 seconds
  useEffect(() => {
    // A function that increments the index by one, or resets it to zero if it reaches the end of the array
    const updateIndex = () => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    // A variable to store the timer ID
    const timerId = setInterval(updateIndex, 1000); // A cleanup function that clears the timer when the component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="w-screen homediv relative overflow-hidden">
      <Navbar />
      <div className="relative pt-16">
        <video
          src={videobg}
          className=" blur-sm top-3  absolute rounded-lg "
          autoPlay
          playsInline
          muted
          loop
        ></video>

        <div className=" relative pt-14 lg:pt-16 my-auto first max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center text-5xl flex flex-col justify-center text-sky-400  overflow-hidden">
       <h1 className="font-bold text-teal-300  text-3xl">Understand the Future of Communication with AI.</h1>
        <h1 className="text-white relative font-bold lg:text-3xl p-2 text-3xl md:py-6">
        Join 1000+ MBA Students on a Nationwide Research & Analysis Journey to measure the Impact!

<p className="font-bold text-teal-300 p-0 pt-3 text-3xl">
Learn, Earn and Gain Entrepreneurial Experience While Analyzing AI's Impact on Indian Businesses.
{/* <span className="text-white text-4xl"> {words[index]}</span> */}
            </p>
          </h1>

        </div>
      </div>
      {/* ----------------------------------------- service------------------------------------------------------- */}
      <div className=" w-screen pt-8 relative pb-8">
      <RevealOnScroll>

        <h1 className="align-center text-gray-800  pt-16 text-center p-5  font-bold text-4xl">
        About the Program
        </h1>
        <div className=" lg:flex md:grid md:grid-cols-2  lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto   my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-2xl text-2xl p-3 pr-4 text-center  text-gray-800 ">     This research internship allows MBA students to explore how AI is transforming
          communication channels in Indian businesses. Over 3-6 months, students visit local companies to gather insights.
       </p>
             </RevealOnScroll>
         <div className="text-2xl text-gray-700 float-start">

             <ul>
          <li>1000 MBA students from 100 top colleges</li>
          <li>Flexible, remote work</li>
          <li>Certification and public recognition</li>
          <li>Earnings up to ₹100,000</li>
        </ul>
         </div>
      
        <div className="p-3">
                  <Link to='/Services'>
                  <button className="rounded-md p-5 text-white bg-gray-800 ">
                    Read More 
                    
                    </button>
                  </Link>
                </div>
          </div>
        </div>
        </RevealOnScroll>
      </div>
  
      </div>
  );
}

export default Home;