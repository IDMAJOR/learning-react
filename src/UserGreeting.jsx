import PropTypes from 'prop-types'

function UserGreeting(props) {

    if(props.isLoggedIn){
        return <h2 className="welcome">Welcome {props.username}</h2>
    }
    else{
        return <h2 className="erro">Please log-In</h2>
    }
}

UserGreeting.prototype = {
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    username: 'Guest',
    isLoggedIn: true
}

export default UserGreeting