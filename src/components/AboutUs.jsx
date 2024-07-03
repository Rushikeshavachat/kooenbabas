
import AboutCard from "./AboutCard"
const AboutUs = () => {
  return (
    <>
<div className=" flex flex-1 flex-col items-center ">
<h1 className="text-2xl text-black mb-6">ABOUT  <span className="text-[#964B00] font-bold text-2xl">US</span></h1>
<h2 className="text-2xl text-black mb-6">
Welcome to KALEEN BABA -<br/>  <span className="text-[#964B00] font-bold text-xl">Your Premier Flooring Store!</span>
</h2>
<h6 className="text-[18px] inline-block font-medium tracking-normal heading6-content text-gray-500  overflow-auto">At KALEEN BABA, we pride ourselves on offering an extensive range of high-quality flooring options. Based in India, we source both locally and from renowned international brands, ensuring our customers receive the best floor coverings delivered straight to their doorstep.
As specialists in total flooring solutions, we excel in both aesthetic and functional installations. Our product range includes Handknotted Rugs, Carpet Tiles, Hand Tufted Carpets, Axminster Carpets, Wall-to-Wall Carpeting, Raised Access Flooring, Sports Flooring, Luxury Vinyl Floorings, and more.
Expanding our portfolio, we now offer commercial floors like Astroturf (grass carpets) and Sheet Vinyl Flooring, ideal for hospitals, plazas, villas, schools, and wet areas. Our Raised Access Floors are perfect for offices, while our Gym and Rubber Flooring options are excellent for outdoor areas. With KALEEN BABA, you have a world of flooring choices all under one roof.
We invite homeowners, contractors, and decorators to join us on this journey. Our collaborative ideas aim to bring your projects to life, providing quality solutions without breaking your budget.</h6>
<div className="flex gap-4 items-center mb-12">
    <img src="/signature.webp" alt="" className="w-18 h-18 object-cover mt-8 ml-4 mr-4" />
    <h3 className="text-xl text-black mb-6 mr-4">Kaleen Baba</h3>
    <span className="text-[#964B00]  -ml-36 mt-12">CEO & Founder</span>
</div>

</div>
<div>
<div >
<AboutCard/>
</div>
</div>
</>
  )
}

export default AboutUs
