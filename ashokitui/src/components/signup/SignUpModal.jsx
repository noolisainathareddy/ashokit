import "../signup/SignUpModal.css";
import { X } from 'lucide-react';
const SignUpModal = ({data}) => {
    console.log("Inside modal", data);
    return(
        <div className="modal-container">
            <div className="popUpWindow">
                    <button ><a href="/signup"><X/></a></button>
                <div className="messageWindow">
                    <span>{data}</span>
                    <div className="success-LogIn">
                        <button><a href="/login">LogIn</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal;