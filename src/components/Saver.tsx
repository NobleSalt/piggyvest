import 'styles/Saver.scss'
import { BsArrowRight } from 'react-icons/bs'

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

         <div className="Saver_container-right">
            <img className='Saver_container-right_img mobile' src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/saver_c7daec0bf5/saver_c7daec0bf5.png" alt="saver" />
         </div>
      </div>


   </footer>
}