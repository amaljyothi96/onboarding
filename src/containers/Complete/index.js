import Button from "../../components/Button/index"
import './style.css'
import logo from "../../img/tick.jpg"

function Complete(props) {
    return (
        <div className="completeContainer"  id="welcmCont">
            <img src={logo} />
            <h1 className="title">Congratulations, Eren!</h1>
            <h4 className="message">You have completed onboarding, you can start using the Eden!</h4>
            <div className="data">
                <Button
                    buttonText="Launch Eden"
                />
            </div>
        </div>
    )
}

export default Complete;