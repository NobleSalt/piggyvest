import { BsArrowRight } from 'react-icons/bs'
import shield from 'assets/shield.png'
import lock from 'assets/lock.png'
import aim from 'assets/aim.png'
import film from 'assets/film.png'

import 'styles/Ways.scss'

export default function Ways() {


   return (
      <div className="max-width Ways">
         <div className="Ways-left">
            <h1 className="Ways-left_title">4 ways to build your savings</h1>
            <p className="Ways-left_body">Earn 5%-15% when you save with any of these PiggyVest plans.</p>
            <button className="Ways-left_start">start savings</button>
         </div>
         <div className="Ways-right">
            <div className="Ways-right_box">
               <img className="Ways-right_box-icon" src={shield} />
               <div className="Ways-right_box-content">
                  <h5 className="Ways-right_box-content_title">automated savings</h5>
                  <p className="Ways-right_box-content_body">Build a dedicated savings faster on your terms automatically or manually.</p>
               </div>
               <div className="Ways-right_box-content_button">
                  <i className="Ways-right_box-content_button-icon blue-circle"><BsArrowRight /></i>
                  <p className="Ways-right_box-content_button-button">piggybank</p>
               </div>
            </div>
            <div className="Ways-right_box">
               <img className="Ways-right_box-icon" src={lock} />
               <div className="Ways-right_box-content">
                  <h5 className="Ways-right_box-content_title">fixed savings</h5>
                  <p className="Ways-right_box-content_body">Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.</p>
               </div>
               <div className="Ways-right_box-content_button">
                  <i className="Ways-right_box-content_button-icon light-blue-circle"><BsArrowRight /></i>
                  <p className="Ways-right_box-content_button-button">safelock</p>
               </div>
            </div>
            <div className="Ways-right_box">
               <img className="Ways-right_box-icon" src={aim} />
               <div className="Ways-right_box-content">
                  <h5 className="Ways-right_box-content_title">Goal-oriented Savings</h5>
                  <p className="Ways-right_box-content_body">Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
               </div>
               <div className="Ways-right_box-content_button">
                  <i className="Ways-right_box-content_button-icon green-circle"><BsArrowRight /></i>
                  <p className="Ways-right_box-content_button-button">target savings</p>
               </div>
            </div>
            <div className="Ways-right_box">
               <img className="Ways-right_box-icon" src={film} />
               <div className="Ways-right_box-content">
                  <h5 className="Ways-right_box-content_title">Flexible Savings</h5>
                  <p className="Ways-right_box-content_body">Save, transfer, withdraw, manage and organise your money for free at any time.</p>
               </div>
               <div className="Ways-right_box-content_button">
                  <i className="Ways-right_box-content_button-icon red-circle"><BsArrowRight /></i>
                  <p className="Ways-right_box-content_button-button">flex naira</p>
               </div>
            </div>
         </div>
      </div>
   )
}