import { useContext } from "react"
import { MdClose, MdDone } from "react-icons/md"
import { Link } from "react-router-dom"
import { AppContext } from "../../context"
import "./modal.css"

const Modal =({success, msg, btnRoute,btnName}) =>{
    const {openModal,setOpenModal} =useContext(AppContext)
    if(!openModal) return null
    return(
        <div className="modal_bg">
            <div className="modal_container">
              <MdClose className="close_modal" onClick={()=> setOpenModal(false)} />
              <article className="content">
                {!success  || <MdDone /> }
                <p>{msg}</p>
               { !btnRoute || <Link to={btnRoute} className="btn donate_btn2">{btnName}</Link>}
              </article>
            </div>
        </div>
        
    )
}

export default Modal