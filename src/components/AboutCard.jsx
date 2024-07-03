
// const AboutCard = () => {
//   return (
//     <>
//     <div >
// <div className=" flex  flex-col  mb-42 ml-12 mr-24 gap-20">
//  <img src="/person1.jpeg" alt="" className="w-24 h-24 object-cover flex justify-end mt-42 "/>
//  <h1 className="text-4xl font-extrabold text-black font-sans">Our Mission</h1>
//  <p className="text-[18px] flex items-center flex-col  font-medium tracking-normal heading6-content text-gray-500  overflow-auto mb-18">Our mission at KALEEN BABA is to adhere to the best business practices across all Indian provinces, implementing effective strategies to enhance the quality of handmade carpets. We aim to transform local raw materials into beautiful carpets and rugs that meet modern standards.
//  We prioritize customer satisfaction and aim to boost the economy by helping individuals explore their potential in local crafts, providing a solid income source, and enhancing the country&apos economic</p>
//  <div className="flex  flex-col items-center justify-between">
//   <h3>Keys to Our Development:</h3>
//   <p>- Desire for Excellence
//   </p>
//   <p>- Innovation
//   </p>
//   <p>- - Transparency

//   </p>
//   <p>- Teamwork
//   </p>
// <div className="flex  flex-col items-center justify-between">
// <h4>Core Beliefs:
// </h4>
// <p>- Motivation
// </p>
// <p>- Collective Responsibility and Leadership
// </p>
// <p>- Professionalism and Ethics
// </p>
// <p>- Adding Value to Client Needs
// </p>
// </div>
//  </div>

// </div>
// <div className=" flex  flex-col  mb-42 ml-12 mr-24 gap-20"> 
//  <img src="/person2.jpeg" alt="" className="w-24 h-24 object-cover flex justify-end mt-42 "/>
//  <h1 className="text-4xl font-extrabold text-black font-sans">Our Vision
//  </h1>
// <p className="text-[18px] flex items-center flex-col  font-medium tracking-normal heading6-content text-gray-500  overflow-auto mb-18">Our vision is to provide top-quality branded flooring and wall covering options from around the globe at the most competitive prices. We aim to make shopping convenient with reliable delivery and easy online ordering from the comfort of your home.
// KALEEN BABA aspires to set a global benchmark in the flooring industry, offering world-class solutions backed by strong values and a dedicated team. We continuously work to identify the best fits for homes, hotels, villas, and offices, ensuring a diverse product range that meets various needs and budgets with swift procurement</p>
//  </div>
//  </div>
// </>
//   )
// }

// export default AboutCard
// import React from 'react';


import AboutDetail from "./AboutDetail";
const AboutCard = () => {
  return (
    <div className="container mx-auto px-4 items-end ">
      <div className="grid grid-cols-4 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div className="flex flex-col items-start justify-start mb-10 gap-10">
          <img
            src="/person1.jpeg"
            alt="Person 1"
            className="w-48 h-48 object-cover flex items-center justify-center mt-10"
          />
          <h1 className="text-4xl font-extrabold text-black font-sans">
            Our Mission
          </h1>
          <p className="text-lg font-medium text-gray-500 mb-10">
            Our mission at KALEEN BABA is to adhere to the best business practices across all Indian provinces, implementing effective strategies to enhance the quality of handmade carpets. We aim to transform local raw materials into beautiful carpets and rugs that meet modern standards.
            We prioritize customer satisfaction and aim to boost the economy by helping individuals explore their potential in local crafts, providing a solid income source, and enhancing the country&apos economic.
          </p>
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-2">Keys to Our Development:</h3>
            <p>- Desire for Excellence</p>
            <p>- Innovation</p>
            <p>- Transparency</p>
            <p>- Teamwork</p>
          </div>
          <div className="flex flex-col items-start mt-5">
            <h4 className="text-xl font-bold mb-2">Core Beliefs:</h4>
            <p>- Motivation</p>
            <p>- Collective Responsibility and Leadership</p>
            <p>- Professionalism and Ethics</p>
            <p>- Adding Value to Client Needs</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start justify-start mb-10 gap-10">
          <img
            src="/person2.jpeg"
            alt="Person 2"
            className="w-48 h-48 object-cover flex items-center justify-center mt-10"
          />
          <h1 className="text-4xl font-extrabold text-black font-sans">
            Our Vision
          </h1>
          <p className="text-lg font-medium text-gray-500 mb-10">
            Our vision is to provide top-quality branded flooring and wall covering options from around the globe at the most competitive prices. We aim to make shopping convenient with reliable delivery and easy online ordering from the comfort of your home.
            KALEEN BABA aspires to set a global benchmark in the flooring industry, offering world-class solutions backed by strong values and a dedicated team. We continuously work to identify the best fits for homes, hotels, villas, and offices, ensuring a diverse product range that meets various needs and budgets with swift procurement.
          </p>
        </div>
     
      </div>
      <div className=" flex items-start justify-start flex-[50%]   -ml-[840px] mt-24 mb-24">
        <AboutDetail/>
      </div>
    </div>
  );
};

export default AboutCard;


