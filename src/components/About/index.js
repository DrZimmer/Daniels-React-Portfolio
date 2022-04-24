import React from 'react'
import coverImage from '../../assets/images/daddy_daughter.jpg'
import '../../index.css'

function About() {

  return (
    <section className="my-1" style={{ textAlign: "center" }}>
      <h1 id="about">Nice to meet you! I'm Daniel </h1>
      <img src={coverImage} className="my-2" style={{ width: "400px", margin: "10px" }} alt="tb-logo" />
      <div className="my-2">
        <p>
          Hello my name is Daniel. I am a Full Stack Web Developer with a background in Biosciences.
          I was born and raised in St. Louis, Missouri. I moved to South Bend, Indiana in 2021 after marrying my wife, Hayley. 
          We now have a beautiful daughter, Isla, together. I intend on earning a certificate in Full Stack Development at Butler's Coding Bootcamp, where I am developing skills in JavaScript, CSS, React.js, and responsive web design among other skills.  I intend on
          pursuing a full time software development position after earning my certificate in May 2022.
          I would describe myself as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. My experiences in the Bootcamp have prepared me to approach problems with creativity and teamwork. With each project, I aim to understand how to best engage users for an impactful user experience. When I'm not developing, I enjoy hiking, cooking, family time, or reading up on the latest trends in the cryptocurrency market. I'm excited to leverage my skills in the future as part of a fast-paced, quality-driven team. Please reach out to me using the contact page or any of my media links below.
        </p>
      </div>
    </section>
  )
}

export default About;