import Card from './../Card/Card';
import style from './Cards.module.css'
 function Cards({characters,onclose}) {
   
   return(
      <div className={style.multicard}>
         <div className={style.image}>
         {
             characters.map(({id,name, species, gender, image})=> {
               return <Card
               key={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               detailId={id}
               onClose={() => onclose(id)}
               />
             })
         }
         </div> 
      </div>
   )
};
export default Cards