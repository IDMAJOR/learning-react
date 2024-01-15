import PropTypes from 'prop-types'

function Students(props){

    return(
        <>
            <div className="study">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Student: {props.student ? "Yes" : "No"}</p>
            </div>
        </>
    );
}
Students.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    students: PropTypes.bool,
}
Students.defaultProps = {
    name: "Joe",
    age: 0,
    student: false,
}

export default Students
