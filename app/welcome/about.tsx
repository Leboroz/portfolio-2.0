export const About = (props: {}) => {
  return (
    <section className="section bg-p2 pt-20 pb-50 text-p3">
      <p className="text-5xl tracking-wide font-extralight font-inter mb-20">
        I believe in a user centered design approach, ensuring that every project I work on is tailored
        to meet the specific needs of its users.
      </p>
      <div className="flex justify-between border-t border-t-p3 pt-20">
        <ul className="flex-1">
          <li>
            <p>3+</p>
            <p>Years of experience</p>
          </li>
        </ul>
        <p className="flex-1 text-2xl px-20">
          I'm a frontend web developer dedicated to turning ideas into creative solutions. I specialize in creating
          seamless and intuitive user experiences. My approach focuses on creating scalable, high-performing solutions
          tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness,
          I strive to deliver experiences that not only engage users but also drive tangible results.
        </p>
      </div>
    </section>
  )
}
