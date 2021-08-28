import NavItem from "./NavItem"
import Search from "./search"
const Navigation = (props)=>{
 return <div className="w-full bg-gray-600 flex ">
     <div className="container mx-auto lg:w-4/5 text-white items-center justify-between">
            <ul className="flex items-center"> 
                {
                    props.navs.map((nav,index) =>(
                        <NavItem key={index} option={nav}/>
                    ))
                }
            </ul>
                <Search/>
     </div>
 </div>
}


export default Navigation