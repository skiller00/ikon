const Logo = (props) =>{
return <div style={{backgroundImage: `url(${props.bg})`}} className="container mx-auto xl bg-no-repeat bg-right">
    <img src={props.src} alt="ikon.mn"/>
</div>
}


export default Logo