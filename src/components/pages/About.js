import React from 'react';
import '../../css/App.css';

function About() {
  return(
    <div style={aboutStyle} className="about">
    <h2>About me</h2>
    <p>This is my ToDoList Application</p>
    <p>My name is Michał Kuwik. I'm 28 years old.</p>
    <div class="photo"></div>
    <p>I Learn programming for over a year.</p> 
    <p>Front-end technicology, but plans to learn backend.</p>
    </div>
  )
}

const aboutStyle = {
  textAlign:'center',
  background: '#eee',
  padding:'1rem'
}

export default About;