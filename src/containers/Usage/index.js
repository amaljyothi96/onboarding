import TypeCard from "../../components/TypeCard/index"
import Button from "../../components/Button/index"
import './style.css'
import { faUserAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useOnBoardingContext } from "../../context/index"

function Usage(props) {

    const navigate = useNavigate();
    const { setCurrentStep, currentStep } = useOnBoardingContext();
    setCurrentStep(2);
    return (
        <div className="usageContainer" id="welcmCont">
            <h1 className="title">How are you planning to ude Eden?</h1>
            <h4 className="message">We'll streamline your setup experience accordingly.</h4>
            <div className="data">
                <div className="flex">
                    <TypeCard
                        icon={faUserAlt}
                        typeTitle="For myself"
                        typeDesc="Write better. Think more clearly. Stay organized"
                    />
                    <div className="spacer" />
                    <TypeCard
                        icon={faUsers}
                        typeTitle="With my Team"
                        typeDesc="Wikis, docs, tasks & projects, all in one place"
                    />
                </div>
                <Button
                    buttonText="Create Workspace"
                    onClick={() => {
                        navigate("/complete")
                        setCurrentStep(currentStep + 1)
                    }}
                />
            </div>
        </div>
    )
}

export default Usage;