import 'styles/Saver.scss'
import { BsArrowRight } from 'react-icons/bs'
import { FaApple } from 'react-icons/fa'
import gPlay from 'assets/google-icon.svg'

export function Saver() {

   return <footer className="Saver">
      <div className="Saver_container">

         <div className="Saver_container-left">
            <h1 className="Saver_container-left_title">Meet the saver of the month!</h1>
            <p className="Saver_container-left_body">Every month, we shine a spotlight on one saver, asking them questions about their savings culture and how the product is specifically helping them shape how they spend and save for future responsibilities.</p>
            <span className="Saver_container-left_button">
               <i className="Saver_container-left_button-icon blue-circle">
                  <BsArrowRight />
               </i>
               <h2 className="Saver_container-left_button-name">
                  Meet Mr Macaroni
               </h2>
            </span>
         </div>

         <div className="Saver-right">
            <h2 className="Saver-right_title">3 Million + customers</h2>
            <p className="Saver-right_description">Since launching in 2016, over 3,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be more accountable.</p>
            <div className="Saver-right_register">create free account</div>
            <div className="Saver-right_socials">
               <div className="Saver-right_socials-social">
                  <i className="Saver-right_socials-social_icon"><FaApple /></i>
                  <p className="Saver-right_socials-social_name">Get on iPhone</p>
               </div>
               <div className="Saver-right_socials-social">
                  <img src={gPlay} className="Saver-right_socials-social_icon" />
                  <p className="Saver-right_socials-social_name">Get on Android</p>
               </div>
            </div>
         </div>
      </div>


   </footer>
}