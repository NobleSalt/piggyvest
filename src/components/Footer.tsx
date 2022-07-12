import 'styles/Footer.scss'
import logo from 'assets/logo.svg'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

export function Footer() {

   return <footer className="Footer animate__animated animate__fadeInUp">

      <div className="Footer-one">

         <div className="Footer-one_left">
            <img src={logo} alt="logo" className="Footer-one_left" />
         </div>

         <div className="Footer-one_right">

            <div className="Footer-one_right-section">
               <h2 className="Footer-one_right-section_title">products</h2>
               <div className="Footer-one_right-section_children">
                  <a href="#!" className="Footer-one_right-section_children-child">piggybank</a>
                  <a href="#!" className="Footer-one_right-section_children-child">invest</a>
                  <a href="#!" className="Footer-one_right-section_children-child">safelock</a>
                  <a href="#!" className="Footer-one_right-section_children-child">target savings</a>
                  <a href="#!" className="Footer-one_right-section_children-child">flex naira</a>
               </div>
            </div>

            <div className="Footer-one_right-section">
               <h2 className="Footer-one_right-section_title">company</h2>
               <div className="Footer-one_right-section_children">
                  <a href="#!" className="Footer-one_right-section_children-child">about</a>
                  <a href="#!" className="Footer-one_right-section_children-child">FAQs</a>
                  <a href="#!" className="Footer-one_right-section_children-child">blog</a>
               </div>
            </div>

            <div className="Footer-one_right-section">
               <h2 className="Footer-one_right-section_title">legal</h2>
               <div className="Footer-one_right-section_children">
                  <a href="#!" className="Footer-one_right-section_children-child">terms</a>
                  <a href="#!" className="Footer-one_right-section_children-child">privacy</a>
                  <a href="#!" className="Footer-one_right-section_children-child">security</a>
               </div>
            </div>

            <div className="Footer-one_right-section right">
               <h2 className="Footer-one_right-section_title">
                  <div className="Footer-one_right-section_title-icons">
                     <i className="Footer-one_right-section_title-icons_icon">
                        <FaFacebookSquare />
                     </i><i className="Footer-one_right-section_title-icons_icon">
                        <FaTwitterSquare />
                     </i><i className="Footer-one_right-section_title-icons_icon">
                        <FaInstagramSquare />
                     </i>
                  </div>
               </h2>
               <div className="Footer-one_right-section_children">
                  <p className="Footer-one_right-section_children-child">Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</p>
                  <a href='mailto:contact@piggyvest.com' className="Footer-one_right-section_children-child small">contact@piggyvest.com</a>
                  <a href='tel:+234700933933933' className="Footer-one_right-section_children-child">+234 700 933 933 933</a>
               </div>
            </div>

         </div>

      </div>

      <p className="Footer-two">Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 6 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>

      <div className="Footer-three">2016 - 2022 PiggyTech Global Limited - RC 1405222</div>

   </footer>
}