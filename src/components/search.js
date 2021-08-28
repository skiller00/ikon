import {AiOutlineSearch} from 'react-icons/ai'
const Search =()=>{
    return <div className="flex items-center ">
        <input className='w-40 border-4 border-red-500 h-6 focus:outline-none'/>
        <button className='h-6 border-4 border-red-500 text-white bg-red-500'>
            <AiOutlineSearch/>
        </button>
    </div>
}

export default Search