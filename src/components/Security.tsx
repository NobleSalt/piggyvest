import shield from 'assets/security.png'
import 'styles/Security.scss'


export function Security() {
   return (
      <div className="Security animate__animated animate__fadeInLeft">
         <div className="Security-left">
            <img src={shield} alt="" />
         </div>
         <div className="Security-right">
            <h2 className="Security-right-title">
               Your security is our priority
            </h2>
            <p className="Security-right-body">
               PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.
            </p>
            <a className='Security-right-link' href="#!">learn more</a>
         </div>
      </div>
   )
}