import TextField from "../../components/TextField/index"
import Button from "../../components/Button/index"
import './style.css'
import { useNavigate } from "react-router-dom";
import { useOnBoardingContext } from "../../context/index"

function Workspace(props) {

    const navigate = useNavigate();
    const { setCurrentStep, currentStep } = useOnBoardingContext();
    setCurrentStep(1);
    return (
        <div className="workspaceContainer" id="welcmCont">
            <h1 className="title">Let's set up a home for all your work</h1>
            <h4 className="message">You can always create another workspace later</h4>
            <div className="data">
                <TextField
                    label="Workspace Name"
                    placeholder="Eden"

                />
                <TextField
                    label="Workspace URL"
                    placeholder="Example"
                    preText="www.eden.com/"
                    postLabel="(optional)"
                />
                <Button
                    buttonText="Create Workspace"
                    onClick={() => {
                        navigate("/usage")
                        setCurrentStep(currentStep + 1)
                    }}
                />
            </div>
        </div>
    )
}

export default Workspace;