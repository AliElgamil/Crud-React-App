import React, { Component, Fragment } from 'react';


class CourseList extends Component {

    state = {
        isEdit: false
    }

    // Render Course Item

    renderCourse = () => {
        return (
            <li>
                <span> {this.props.details.name}</span>
                <button onClick={() => this.toggleState()}>Edit Course</button>
                <button onClick={() => this.props.deleteCourse(this.props.index)}>Delete Course</button>
            </li>
        )
    }

    // Toggle State

    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }

    // Render Update Form

    // Edit Update Item

    editUpdateItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState();
    }

    renderUpdateForm = () => {
        return (
            <form onSubmit={this.editUpdateItem}>
                <input type='text' ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
                <button type='submit'>Update Course</button>
            </form>
        )
    }

    render () {
        let {isEdit}= this.state;
        return (
            <Fragment>
                {isEdit ? this.renderUpdateForm() : this.renderCourse()}
            </Fragment>
        )
    }
}

export default CourseList;