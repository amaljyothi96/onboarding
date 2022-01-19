import TextField from "../../components/TextField/index"
import Button from "../../components/Button/index"
import './style.css';
import { useNavigate } from "react-router-dom";
import { useOnBoardingContext } from "../../context/index"


function Welcome(props) {

    const navigate = useNavigate();
    const { setCurrentStep, currentStep } = useOnBoardingContext();
    setCurrentStep(0);
    return (
        <div className="welcomeContainer" id="welcmCont">
            <h1 className="title"> Welcome! First things first...</h1>
            <h4 className="message">You can always change them later</h4>
            <div className="data">
                <TextField
                    label="Full Name"
                    placeholder="Steve Jobs"

                />
                <TextField
                    label="Display Name"
                    placeholder="Steve"

                />
                <Button
                    buttonText="Create Workspace"
                    onClick={() => {
                        navigate("/workspace");
                        setCurrentStep(currentStep+1);
                    }}
                />
            </div>
        </div>
    )
}


export default Welcome;