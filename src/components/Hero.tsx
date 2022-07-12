import { FaApple } from 'react-icons/fa'
import 'styles/Hero.scss'
import girl from 'assets/girl.png'
import my_rent from 'assets/my_rent.png'
import investify from 'assets/investify.png'
import rect from 'assets/rect.png'
import cross from 'assets/cross.svg'
import dot from 'assets/dot.svg'
import circle from 'assets/circle.svg'
import gPlay from 'assets/google-icon.svg'
import ScrollAnimation from 'react-animate-on-scroll'

export function Hero() {

   return <ScrollAnimation animateOut='fadeIn' duration={.3} initiallyVisible>

      <div className="max-width Hero">

         <div className="Hero-left">
            <h1 className="Hero-left_title">The Better Way to Save & Invest.</h1>
            <p className="Hero-left_body">PiggyVest helps over 3 million customers achieve their financial goals by helping them save and invest with ease.</p>
            <button className="Hero-left_register">create free account</button>
            <div className="Hero-left_social">
               <div className="Hero-left_social-box">
                  <i className="Hero-left_social-box_icon"><FaApple /></i>
                  <span className="Hero-left_social-box_name">Get on iPhone</span>
               </div>
               <div className="Hero-left_social-box">
                  <i className="Hero-left_social-box_icon"><img src={gPlay} alt="google-play" /></i>
                  <span className="Hero-left_social-box_name">Get on Android</span>
               </div>
            </div>
         </div>

         <div className="Hero-right">
            <img src={circle} alt="circle" className="Hero-right_circle" />
            <img src={dot} width="33" height="108" alt="dot" className="Hero-right_dot" />
            <img src={girl} className="Hero-right_i" alt="girl" />
            <img src={rect} alt="rect" className="Hero-right_rect" />
            <img src={my_rent} alt="my_rent" className="Hero-right_rent" />
            <img src={investify} alt="investify" className="Hero-right_investify" />
            <img src={cross} alt="cross" className="Hero-right_cross" />
         </div>

      </div>
   </ScrollAnimation>
}
