import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import {filterData,apiUrl} from './data.js';
import {useEffect} from 'react';
function App() {
    const [Cources, setCources]= useState(null);
    const [filteredCourses, setFilteredCourses] = useState(null);

    useEffect(()=>{
      async function fetchData(){
       try{
        const data= await fetch(apiUrl);
        const jsondata= await data.json();
        setCources(jsondata.data);
       }
       catch(error){
        toast.error("Something went Wrong ");
       }
      }
      fetchData();
    },[])
     function filtercource(category){
        if(!Cources) return ;
        if (category === "All") {
          setFilteredCourses(null);
            return;
          }
          // this is caled computed property in javascript 
          // let key = "name";
          // let obj = {
          //   [key]: "Abhishek"
          // };
              // console.log(obj);
              // { name: "Abhishek" }
          const filteredObject = {
            [category]: Cources[category]
          };  
        setFilteredCourses(filteredObject);
    }
  return (
  <div className="app-container">

    <div className="header-area">
      <Navbar />
      <Filter filtercource={filtercource} filterData={filterData} />
    </div>

    <Cards Cources={filteredCourses ? filteredCourses : Cources} />
  </div>
);

}

export default App;
