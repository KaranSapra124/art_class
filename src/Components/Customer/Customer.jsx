import React from 'react';
import './Customer.css';

const Customer = () => {
  return (
    <div className="image-container">
       <sec className="module bg-gray p-b-0">
         <div className="container">
           <div className="row">
             <div className="col-md-3">
               <div className="counter">
                 <div className="counter-icon">
                   <span className="icon-energy icons"></span>
                 </div>
                 <div className="counter-number">
                   <h6>
                     <strong className="counter-timer" data-from="0" data-to="1538">
                       10+
                     </strong>
                   </h6>
                 </div>
                 <div className="counter-title">Expert Teachers</div>
               </div>
             </div>
             <div className="col-md-3">
               <div className="counter">
                 <div className="counter-icon">
                   <span className="icon-game-controller icons"></span>
                 </div>
                 <div className="counter-number">
                   <h6>
                     <strong className="counter-timer" data-from="0" data-to="2124">
                       100+
                     </strong>
                  </h6>
                 </div>
                 <div className="counter-title">Completed Courses</div>
               </div>
             </div>
            <div className="col-md-3">
               <div className="counter">
                 <div className="counter-icon">
                   <span className="icon-fire icons"></span>
                 </div>
                 <div className="counter-number">
                   <h6>
                     <strong className="counter-timer" data-from="0" data-to="3128">
                       300+
                     </strong>
                   </h6>
                 </div>
                 <div className="counter-title">Students Learner</div>
               </div>
             </div>
           </div>
         </div>
       </sec>
     </div>
 
 );
};

export default Customer;

