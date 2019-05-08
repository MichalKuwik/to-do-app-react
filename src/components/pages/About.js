import React from 'react';
import '../../css/App.css';

function About() {
  return(
    <div style={aboutStyle} className="about">
    <h2>About me</h2>
    <p>This is my ToDoList Application</p>
    <p>My name is Michał Kuwik. I'm 28 years old.</p>
    <div class="photo"></div>
    </div>
  )
}

const aboutStyle = {
  textAlign:'center',
}

export default About;