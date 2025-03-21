import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { GetProduct, SearchThunk } from '../Thunk/ProductThunk';

function Search() {
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')
    const handleSearch =(e)=>{
        e.preventDefault();
        // if(query.length>0){
        //     dispatch(SearchThunk(query))
        // }else{
        //     dispatch(GetProduct())
        // }
    }

    useEffect(()=>{
      const delaySearch=  setTimeout(()=>{
            if(query.length>0){
                dispatch(SearchThunk(query))
            }else{
                dispatch(GetProduct())
            }

        },700)
        return () => clearTimeout(delaySearch);
    },[query,dispatch])


  return (
    <>
        <form onSubmit={handleSearch} className="relative bg-white w-[40%] rounded ">
          <input className="w-full focus:outline-none rounded  p-2" autoComplete='true' type="text" placeholder="Search..." value={query} onChange={(e)=>setQuery(e.target.value)} />
          <button type="submit"><IoSearchSharp className="absolute top-3 right-3 text-xl" /></button>
        </form>
    </>
  )
}

export default Search
