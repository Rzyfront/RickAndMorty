import './App.css';
import Cards from './components/ContainerCards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Details from './components/Details/Details';
import { useState, useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Form from './components/Form/Form';
import Nohome from './components/Nohome/Nohome';


function App () {
  const [characters, setCharacters] = useState([])
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';

function login(userData) {
  if (userData.password === password && userData.username === username) {
     setAccess(true);
     navigate('/caracters');
  }
}

useEffect(() => {
  !access && navigate('/home');
}, [access]);


  const onSearch = (character)=> {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = (id) =>{
    setCharacters(
      characters.filter(character=> character.id !== id)
    )
 }


if (pathname==='/login') {
  return (
    <div className='App' style={{ padding: '25px' }}>
        <Routes>
          <Route path='/home' element={<Nohome/>}></Route>
          {/* <Route path='/caracter' element={<Cards characters={characters} onclose={onClose}/>}></Route> */}
          <Route path='/login' element={<Form login={login}/>}></Route>
        </Routes>
    </div>
  )
}else{
  return (
    <div className='App' style={{ padding: '25px' }}>
       <Nav onSearch={onSearch}/>
        <Routes>
          <Route path='/home' element={<Nohome/>}></Route>
          <Route path='/caracter' element={<Cards characters={characters} onclose={onClose}/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/details/:detailId' element={<Details/>}></Route>
          <Route path='/login' element={<Form login={login}/>}></Route>
        </Routes>
    </div>
  )
}

  
}
export default App
