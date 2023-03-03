import{GrAlert} from "react-icons/gr"

const Error =()=>{
    return(
        <article className="error">
            <GrAlert className="error_icon" />
        <h1 className="error_page"> Oops! Page Not Found</h1>
        </article>
    )
}

export default Error;