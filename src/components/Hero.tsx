import { FaApple, FaGooglePlay } from 'react-icons/fa'

export default function Hero() {

   return <div className="Hero">
      <div className="Hero-left">
         <h1 className="Hero-left_title">The Better Way to Save & Invest.</h1>
         <p className="Hero-left_body">PiggyVest helps over 3 million customers achieve their financial goals by helping them save and invest with ease.</p>
         <button className="Hero-left_register">create free account</button>
         <div className="Hero-left_social">
            <div className="Hero-left_social-box"><i className="Hero-left_social-box_icon"><FaApple /></i><span className="Hero-left_social-box_name">Get on iPhone</span></div>
            <div className="Hero-left_social-box"><i className="Hero-left_social-box_icon"><FaGooglePlay /></i><i className="Hero-left_social-box_name">Get on Android</i></div>
         </div>
      </div>
      <div className="Hero-right"></div>
   </div>
}
