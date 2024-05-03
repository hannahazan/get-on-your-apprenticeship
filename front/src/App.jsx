import { useState, useEffect, } from 'react';
import drop from './assets/caret-down-solid.svg'
import axios from 'axios';
import './App.css';

function App() {
  const [students, setStudents] = useState(null);
  const [potterData,setPotterData]=useState(null)
  const [pageNumber,setPageNumber]=useState(null)
  const [prev,setPrev]=useState(null)
  const [hideDrop,setHideDrop]=useState(false)
  const [filterHouse,setFilterHouse]=useState(null)

const fetchTest=async ()=>{
    const response=await fetch('http://localhost:3000/real/students')
    const dataPotter=await response.json()
    console.log(setPotterData(dataPotter))
    setPageNumber(dataPotter.meta.pagination.next)
  }


const fetchPagination = () => {
  if(filterHouse===null){  
    return axios
      .get(`http://localhost:3000/real/students?Page=${pageNumber}`)
      .then((res) => {
        console.log(setPotterData(res.data))
        console.log(potterData)
        setPageNumber(res.data.meta.pagination.next)
        res.data.meta.pagination.prev?setPrev(res.data.meta.pagination.prev):console.log("nop")
        ;
      })
      .catch(() => console.error("err"));}
  else{
    return axios
    .get(`http://localhost:3000/real/students?Page=${pageNumber}&house=${filterHouse}`)
    .then((res) => {
      console.log(setPotterData(res.data))
      console.log(potterData)
      setPageNumber(res.data.meta.pagination.next)
      res.data.meta.pagination.prev?setPrev(res.data.meta.pagination.prev):console.log("nop")
      ;
    })
    .catch(() => console.error("err"));
  }
  };
  const testFetchDataFire=()=>{
    return axios
    .get("http://localhost:3000/real/testGet")
    .then((res)=>{
      console.log(res.data)
    })
    .catch(()=>{
      console.error("pb de core aux pieds")
    })
  }

const fetchPaginationPrev= () => {
  if(filterHouse===null){  
    return axios
      .get(`http://localhost:3000/real/students?Page=${prev}`)
      .then((res) => {
        console.log(setPotterData(res.data))
        console.log(potterData)
        setPageNumber(res.data.meta.pagination.next)
        res.data.meta.pagination.prev?setPrev(res.data.meta.pagination.prev):console.log("nop")
        ;
      })
      .catch(() => console.error("err"));}
  else{
    return axios
    .get(`http://localhost:3000/real/students?Page=${prev}&house=${filterHouse}`)
    .then((res) => {
      console.log(setPotterData(res.data))
      console.log(potterData)
      setPageNumber(res.data.meta.pagination.next)
      res.data.meta.pagination.prev?setPrev(res.data.meta.pagination.prev):console.log("nop")
      ;
    })
    .catch(() => console.error("err"));
  }
};

const fetchFiltreHouse= () => {
  if(!filterHouse){
    return axios
    .get(`http://localhost:3000/real/students`)
    .then((res) => {
      console.log(setPotterData(res.data))
      console.log(potterData)
      setPageNumber(res.data.meta.pagination.next)
      res.data.meta.pagination.prev?setPrev(res.data.meta.pagination.prev):console.log("nop")
      ;
    })
    .catch(() => console.error("err"));
  }
  else{
    return axios
    .get(`http://localhost:3000/real/students?house=${filterHouse}`)
    .then((res) => {
      console.log(setPotterData(res.data))
      console.log(potterData)
      setPageNumber(res.data.meta.pagination.next)
      res.data.meta.pagination.prev?setPrev(res.data.meta.pagination.prev):console.log("nop")
      ;
    })
    .catch(() => console.error("err"));}
};

useEffect(()=>{
  console.log(pageNumber)
  console.log(filterHouse)
})

useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('http://localhost:3000/dummy/students');
      const data = await response.json();
      setStudents(data);
      
    };

    fetchStudents();
    fetchTest()
    
    setTimeout(() => {
      console.log(potterData)
      console.log(pageNumber)
    }, 2000);
  }, []);

  
  return (
    <div className="App">
      <header className="App-header">
        <p>Here is a list of all students:</p>
        <div className="App-intro">
          {students ? students.map(student =>
          <div className='CardHouseName'>
            <div className={student.house==="Gryffindor"?"gryf":"rav"}>
            </div>
            <div key={crypto.randomUUID()}>{student.name}</div>
          </div>
          ) : "Loading..."}
        </div> 
      </header>
      <main>
        <div className='searchAndDrop'>
            <div className='search'>
              <div className='searchingBar'>
                {!filterHouse?<p style={{marginTop:0,marginBottom:0}}>select your house</p>:<p style={{marginTop:0,marginBottom:0}}>{filterHouse}</p>}
                <img src={drop} className='dropArrow' onClick={()=>{!hideDrop?setHideDrop(true):setHideDrop(false)}}></img>
              </div>
              <input type="button" value="search" onClick={()=>{fetchFiltreHouse()}} />
              <input type="button" value="firebase" onClick={()=>{testFetchDataFire()}} />
            </div>
            <div className={!hideDrop?'hidenDropBox':'revealDropBox'}>
              <p onClick={()=>{setFilterHouse("Gryffindor"),setHideDrop(false)}}>Gryffindor</p>
              <p onClick={()=>{setFilterHouse("Ravenclaw"),setHideDrop(false)}}>Ravenclaw</p>
              <p onClick={()=>{setFilterHouse("Slytherin"),setHideDrop(false)}}>Slytherin</p>
              <p onClick={()=>{setFilterHouse("Hufflepuff"),setHideDrop(false)}}>Hufflepuff</p>
              <p onClick={()=>{setFilterHouse(null),setHideDrop(false)}}>None</p>
            </div>
            
          </div>
          <div className="NewListPotter">
            {potterData ? potterData.data.map(potterDataSingle =>
            <div>
              <div key={crypto.randomUUID()}>{potterDataSingle.attributes.name}</div>
              <img src={potterDataSingle.attributes.image}/>
              <p>{potterDataSingle.attributes.house}</p>
            </div>
            ) : "Loading..."}
          <div onClick={()=>{fetchPagination()}}>next</div>
          <div onClick={()=>{fetchPaginationPrev()}}>previous</div>
        </div>
      </main>
    </div>
  );
}

export default App;