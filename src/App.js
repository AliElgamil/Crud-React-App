import React, { Component } from 'react';
import './App.scss';
import CourseForm from './component/CourseForm/CourseForm';
import CourseList from './component/CourseList/CourseList';

class App extends Component {
  state = {
    courses : [
      {name: 'Html'},
      {name: 'jQuery'},
      {name: 'Css'},
      {name: 'React'},
    ],
    current: ''
  }

  // Update Course 

  updatedCourse = (e) => {

    this.setState ({
      current: e.target.value
    })
  }

  // Add Course

  addCourse = (e) => {

    e.preventDefault();
    
    const {current, courses} = this.state;
    
    if (current === "") {
      return false;
    }else {
        courses.push({name: current}); //This Error
        this.setState({
          courses, // Courses: Courses
          current: ''
        })
    }
  }

  // Delete Course

  deleteCourse = (index) => {

    let {courses} = this.state;

    courses.splice(index, 1);
    this.setState({
      courses
    })
  }

  // Ediit Course

  editCourse = (index, value) => {
    let {courses} = this.state;

    let course = courses[index];
        course['name'] = value;
    this.setState({
      courses
    })
  }

  render () {
    const {courses} = this.state,
          length = courses.length;
    const courseList = length  ? (
      courses.map((course, index) => {
        return (
          <CourseList details={course} deleteCourse={this.deleteCourse} key={index} index={index} editCourse={this.editCourse}/>
        )
      }) 
    ) : (
      <p>Not Courses To Show</p>
    );
    return (
      <section className="App">
        <div>
          <h2 className='main-bg'>Add Course</h2>
          <CourseForm current={this.state.current} updatedCourse={this.updatedCourse} addCourse={this.addCourse}/>
          <ul>{courseList}</ul>
        </div>
      </section>
    )
  }
}

export default App;
