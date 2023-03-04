import style from './Card.module.css'
import { Link } from 'react-router-dom';

   function Card({name, gender, onClose, species, image, detailId}) {
      return (

         <div className={style.card}>
               <img  src={image} alt={name} className={style.imgCard}/>
               <button onClick={onClose} className={style.cardBut}>X</button>
            <div className={style.descrip}>
            <div className={style.nick}>
            <Link to={`/details/${detailId}`}>
            <h2 className={style.name}>{name}</h2>
            </Link>
            </div>
               <h2>{species}</h2>
               <h2>{gender}</h2>
            </div>  
         </div>
         
      );
   }

export default Card;