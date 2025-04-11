import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './component/userCard';
import Resize_Component from './component/resize_Component'
import Datafeatcher from './component/datafeatcher';
import Statelifting from './component/statelifting';
import Counter from './component/counter';
import guruji from './assets/Guru_Govind_Singh.jpg';
import Maharana from './assets/MahaRana.webp';
import Chhatrapati from './assets/Chhatrapati.webp';
import prithviraj from './assets/prithviraj chauhan.jpg';
import sambhaji from './assets/sambhaji.jpg'

function App() {
  const [count, setCount] = useState(0)
  const [Sname,setname]=useState('')
  

  return (
  
      <div className='Container'>
        <UserCard name="Guru Govind Singh Jii"  img={guruji} style={{"border-radius":"20px"}} discription="Guru Gobind Singh was a man of great intellectual attainments. He was a linguist familiar with Persian, Arabic, and Sanskrit as well as his native Punjabi. He further codified Sikh law, wrote martial poetry and music, and was the reputed author of the Sikh work called the Dasam Granth (“Tenth Volume”)."/>
        <UserCard name="Chhatrapati Shiva Ji Maharaj"img ={Chhatrapati} discription="Maharana Pratap, famous for his bravery and martial arts, was a mighty Hindu Rajput of the Sisodia clan. It is said that Maharana Pratap's bravery was widely discussed in Agra. That is why he was always coming in Akbar's dreams. During his tenure, he made the people aware of many great ideas."/>
        <UserCard name="Maharana Pratap " img={Maharana} discription="Shivaji was a popular monarch who kept a close watch on the administrative affairs of his state. All powers were concentrated on him but he ruled with the advice of his ministers. The common people regarded him with great devotion and considered him their greatest will-wisher."/>
        <UserCard name="Prithviraj Chauhan" img={prithviraj} discription="Prithviraj Chauhan is widely known as a warrior king who bravely resisted the Muslim ruler, Muhammad of Ghor, the ruler of the Muslim Ghurid dynasty with all his might. In 1192 CE, Prithviraj was defeated by Ghurids at the second battle of Tarain and later he was executed after his defeat."/>
  <UserCard name="Chhatrapati Sambhaji Maharaj" img={sambhaji} discription="Sambhaji, also known as Shambhuraje, was the second Chhatrapati of the Maratha Empire, ruling from 1681 to 1689. He was the eldest son of Shivaji, the founder of the Maratha Kingdom."/>

  <UserCard />
  <Counter />

  {/*  */}


{/* 
  <Statelifting
  tittle='card1'
  name={Sname}
  setname={setname}
  style={{
    "border-radius":"20px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    backgroundColor: "pink"
  }}
/> */}


{/* 
<Statelifting
  tittle='card2'
  name={Sname}
  setname={setname}
  style={{
    borderRadius: "20px",
    width: "300px", // Limit the width of the container
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    backgroundColor: "pink",
    padding: "15px", // Add padding for spacing
    boxSizing: "border-box", // Ensure padding is included in width
    overflowWrap: "break-word"
  }}
/> */}

  {/* <p>This is the name from Parent:{Sname}</p> */}
 < Datafeatcher />
 <Resize_Component />
      </div>
  )
}

export default App
