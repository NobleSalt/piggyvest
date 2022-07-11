import 'styles/TopFooter.scss'
import techpoint from 'assets/techpoint.png'
import guardian from 'assets/guardian.png'
import techcrunch from 'assets/techcrunch.png'

export function TopFooter() {

   return (
      <div className="bg-grey">
         <div className="TopFooter">
            <h1 className="TopFooter-left">As featured in</h1>
            <div className="TopFooter-right">
               <div className="TopFooter-right_item">
                  <img src={techpoint} alt="techpoint" className="TopFooter-right_item-img" />
               </div>
               <div className="TopFooter-right_item">
                  <img src={guardian} alt="guardian" className="TopFooter-right_item-img" />
               </div>
               <div className="TopFooter-right_item">
                  <img src={techcrunch} alt="techcrunch" className="TopFooter-right_item-img" />
               </div>
            </div>
         </div>
      </div>
   )
}