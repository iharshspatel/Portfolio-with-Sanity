import React from 'react'
import projects from '../../constants/projects'
import CardContainer from '../Layouts/CardContainer/CardContainer'
import Container from '../Layouts/Container/Container'
import Styles from './About.module.css'

const About = () => {
    return (
        <Container>
            <h1>About Me</h1>
            <p className={Styles.ptag}>
                Thanks for dropping by! </p>
            <p className={Styles.ptag}>
                My name is Harsh Patel and I'm a software engineer with almost 2 years of experience. I'm passionate about creating beautiful and intuitive user interfaces that enhance the user experience.
            </p>
            <p className={Styles.ptag}>
                Long story short, I am 23 years old Indian Guy who loves creating quality web applications.
            </p>

<br/>
<br/>
            <h1>Work Experience</h1>
            <p className={Styles.ptag}>
            I currently work as a SDE at on the Wizzy  team at CIIE, IIM Ahmedabad, where I develop new user-facing features, improve core parts of the app, write documentation, advocate for accessibility, mentor developers, and share new things I’m learning with the team. I thrive in collaborative environments that encourage growth, offer varied learning opportunities, and cultivate my problem-solving skills and creative strengths.</p>
            <p className={Styles.ptag}>
            Most of my dev experience is with React, JavaScript, and CSS, but I’m also comfortable working with vanilla stacks and can pick up new languages quickly as needed. Some of my interests include web performance, accessibility, scalability
            </p>
            <p className={Styles.ptag}>
            I won’t bore you too much with my work history; that’s what my LinkedIn is for.
            </p>

            
            <br/>
<br/>
            

            {projects && <CardContainer isProjectContainer={true} cards={projects} title={`My Projects`}/>}

            <br/>
<br/>
            <h1>So, Yeah… That’s Me!</h1>
            <p className={Styles.ptag}>
            There’s more to my life than what I feel comfortable sharing here, but that’s about the gist of my background and interests. If you made it this far, cool! You’re still awake! Maybe we can chat sometime and get to know each other.</p>
            <p className={Styles.ptag}>
            At the end of the day, I’m just a Real Human Bean who enjoys doing real human things. If that sounds like your cup of tea, get in touch—I’d love to hear from you!
            </p>
            
        </Container>
    )
}

export default About