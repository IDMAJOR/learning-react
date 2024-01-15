
import imageIn from './assets/@JAKESNABEL-TehHubSquare (27) (1).jpg'

function Card() {

    return(
        <div className="card">
            <img src={imageIn} alt="My photo" className='me'/>
            <h2>IDMAJOR</h2>
            <p>I'm a developer</p>
        </div>
    );
}

export default Card