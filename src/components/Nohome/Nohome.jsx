import style from './Nohome.module.css'

 function Nohome({characters,onclose}) {
   
   return(
      <div className={style.multicard}>
         <div className={style.image}>
            <h1>Bienbenido!</h1>
            <h2>Login para poder usar la App</h2>
         </div> 
      </div>
   )
};
export default Nohome