import {CgCalendarDates} from 'react-icons/cg'
const TopLine = (props) =>{
    return <div className=" w-full shadow-md">
        <div className="container-xl flex items-center justify-between"> 
            <div className="flex items-center">
                <CgCalendarDates className="text-red-400 text-xl"/>
                <p className="text-sm text-gray-600 ml-1"> {props.date}</p>
            </div>
            <div>

            </div>
        </div>
    </div>

}

export default TopLine 