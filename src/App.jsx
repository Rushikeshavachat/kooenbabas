import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar"
// import AboutUsDropdown from "./components/ui/AboutUsDropdown";
const App = () => {
  // const dropdownOptions = [
  //   { text: 'Our Team', href: '/team' },
  //   { text: 'Our Mission', href: '/mission' },
  //   { text: 'Contact Us', href: '/contact' },
  // ];
  return (
   <>
   <Navbar/>
  
   <div  className="grid grid-cols-2 flex-col">
<AboutUs/>
    </div>
    </>
  )
}

export default App
