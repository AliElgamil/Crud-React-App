import React from 'react';

const CourseForm = (props) => {
    return (
        <form onSubmit={props.addCourse}>
            <input type='text' value={props.current} onChange={props.updatedCourse}/>
            <button type='submit'>Add Course</button>
        </form>
    )
}

export default CourseForm;