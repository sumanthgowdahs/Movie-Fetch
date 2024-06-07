import axios from 'axios'
import React,{useState,useEffect} from 'react'

function useFetch(api) {

    let [apidata , setApidata] = useState([])
    let [isloading, setisloading]= useState(false)
    let [iserror, setiserror]= useState(false)

    let getData = async ()=>{
        try{
            let {data:{Search}}= await axios.get(api)
            // setApidata([data[0]])
            setisloading(false)
            console.log(Search);
            setApidata(Search)

        }
        catch(error){
          console.log("fetch error");
          setisloading(true)
          setiserror(true)
          setisloading(false)

            // setApidata("null")
        }
    }


    console.log(apidata);

    useEffect(()=>{
      setisloading(true)
      getData()
      

    },[api])
    
console.log(apidata);
    
    
  return { apidata , iserror , isloading}
}

export default useFetch