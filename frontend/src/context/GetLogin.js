// import React, {createContext, useState, useContext, useEffect} from "react";
// import api from '../services/api';

// const GetLoginContext = createContext();


// export function useGetLogin(){
//   const [usua, setUsua] = useState([]);
//   useEffect(() => {
//     api.get('donos').then(response => {setUsua(response.data);})},[])
//   // useEffect(() => {
//   //   api.get('donos').then(response => {console.log(response.data);})},[])
//   return {usua, setUsua } ;
// }