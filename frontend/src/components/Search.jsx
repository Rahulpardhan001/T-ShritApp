import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { SearchThunk, fetchProduct } from '../Thunk/productThunk';
// import { GetProduct, SearchThunk } from '../Thunk/ProductThunk';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function Search() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token } = useSelector((state) => state.auth);
    const [query, setQuery] = useState('')
    const handleSearch =(e)=>{
        e.preventDefault();
        // if(token){}
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
                navigate('/search')
            }else{
                dispatch(fetchProduct())
                navigate('/')
            }

        },700)
        return () => clearTimeout(delaySearch);
    },[query,dispatch])


  return (
    <>
       <form onSubmit={handleSearch} className='flex items-center bg-[F5F5F5] gap-2 px-2 py-1 lg:w-auto ' >
                    <input type="search" className='focus:outline-none px-2 w-[250%] ' placeholder='What are you looking for? 'value={query}   onChange={(e)=>setQuery(e.target.value)}/>
                    <button type='submit' className='text-[24px] '><CiSearch /></button>
                </form>
        {/* <form onSubmit={handleSearch} className="relative bg-white w-[40%] rounded ">
          <input className="w-full focus:outline-none rounded  p-2" autoComplete='true' type="text" placeholder="Search..." value={query} onChange={(e)=>setQuery(e.target.value)} />
          <button type="submit"><IoSearchSharp className="absolute top-3 right-3 text-xl" /></button>
        </form> */}
    </>
  )
}

export default Search
