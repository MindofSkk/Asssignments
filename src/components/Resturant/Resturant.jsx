import React from 'react'
import styles from "./Restaurent.module.css"
const Resturant = ({imgurl,restname,desc,cost,dis,time,paymnt,rating,vote,review}) => {
  return (
    <>
    <div className={styles.Resturant_crd}>
     <div className={styles.upper_crd}>
       <div className={styles.Img_crd}>
       <img src={imgurl} alt="my_pic" className={styles.crd_img}/>
       </div>
     <div className={styles.details}>
     <h2>{restname}</h2>
     <h4>{desc}</h4>
     <p>cost ₹{cost} for one</p>
     <p>Min ₹{dis}</p>
     <p>Up to {time} Min</p>
     <p>{paymnt}</p>
     </div>
     <div className={styles.right_crd}>
    <p>{rating}</p>
    <p>{vote} Votes</p>
     <p>{review} reviews</p>
     </div>
     </div>
     <div className={styles.lower_crd}>

     <button>online Order</button>

     </div>
     
    </div>
    
    
    
    </>
  )
}

export default Resturant