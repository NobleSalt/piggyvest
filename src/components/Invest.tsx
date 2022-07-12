import 'styles/Invest.scss'
import { FaApple } from 'react-icons/fa'
import gPlay from 'assets/google-icon.svg'
import invest from 'assets/invest.png'
import ScrollAnimation from 'react-animate-on-scroll';

export function Invest() {

   return (
      <ScrollAnimation animateIn='fadeIn' duration={.3} initiallyVisible>
         <div className="Invest">

            <div className="Invest-left">
               <img src={invest} alt="" className="Invest-left_img" />
            </div>


            <div className="Invest-right">
               <span className="purple_badge">Up To 25% Returns</span>
               <h2 className="Invest-right_title">Access investment opportunities</h2>
               <p className="Invest-right_description">Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</p>
               <a href="#!" className="Invest-right_more">Learn more about Investments.</a>
            </div>

         </div>
      </ScrollAnimation>
   )
}