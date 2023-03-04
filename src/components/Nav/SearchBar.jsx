import style from './Nav.module.css';
import { useState } from 'react';

function SearchBar({onSearch}) {

const [character, sertCharacter] = useState('');

const handleChange = (event)=>{
      sertCharacter(event.target.value)
};
    return (
       <div className={style.searchBar}>
            <input type='search' className={style.inputbar} value={character} onChange={handleChange} />
            <button onClick={()=>onSearch(character)} className={style.but}>Buscar</button>
       </div>
    );
 }
 export default SearchBar;