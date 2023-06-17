'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
    
    const [searchTerm, setSearchTerm] = useState('');

    const router = useRouter()
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };
  
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSearchTerm('')
      router.push(`/${searchTerm}/`)
      // Perform search or other actions with the search term
      console.log('Search term:', searchTerm);

    };
  
    return (
      /*
      <form className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Find the best food near you..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <AiOutlineSearch />
        
      </form>
      */
<form onSubmit={handleFormSubmit}>
    <div className="flex">
        <div className="relative w-full">
            <input type="text" className="block p-2.5 w-full z-20 text-sm rounded-full text-gray-900 bg-gray-50 border-2 border border-gray-300 focus:border-green-800 focus:outline-none" placeholder="Find your cravings..." onChange={handleInputChange} value={searchTerm}></input>
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-gray-400 ">
                <svg aria-hidden="true" className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
        </div>
    </div>
</form>

    );
  }