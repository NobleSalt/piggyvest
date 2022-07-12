import 'styles/Nav.scss'
import logo from 'assets/logo.svg'
import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'


export function Nav() {
   const [active, setActive] = useState<boolean>(false)

   return (
      <ScrollAnimation animateIn='fadeIn' duration={.3} initiallyVisible>
         <nav className='fade small stagger ease-out-back duration-30 bg-whit sticky' >
            <div className="max-width Nav">
               <a href='/' className="Nav_img">
                  <img src={logo} alt="Logo" />
               </a>

               <div className={active ? "Nav_right active" : "Nav_right"}>
                  <div className="Nav_right-left">
                     <a href="" className="Nav_right-left_link">save</a>
                     <a href="" className="Nav_right-left_link">invest</a>
                     <a href="" className="Nav_right-left_link">stories</a>
                     <a href="" className="Nav_right-left_link uppercase">FAQs</a>
                     <a href="" className="Nav_right-left_link">blog</a>
                  </div>
                  <div className="Nav_right-right desktop">
                     <a href="" className="Nav_right-right_link">sign in</a>
                     <a href="" className="Nav_right-right_link active">Create Free Account</a>
                  </div>
               </div>
               <i className="Nav_menu mobile">
                  {active ? <FiX onClick={(e) => setActive(!active)} /> : <FiMenu onClick={(e) => setActive(!active)} />}
               </i>
            </div>
         </nav>
      </ScrollAnimation>
   )
}
