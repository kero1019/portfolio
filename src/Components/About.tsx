import React from 'react'

export default function About() {
    return (
        <section className="about-section my-20">
            <h2 className="about-title">
                About Me <span className="title-line"></span>
            </h2>

            <div className="about-content">
                {/* Item 1 */}
                <div className="about-item">
                    <span className="dot"></span>
                    <p>
                        Hello! I&apos;m <span className="highlight-name">Kerolos Fayez</span>, a
                        Frontend Developer passionate about building modern,
                        responsive, and user-focused web interfaces. I specialize in
                        creating front-end applications using{" "}
                        <span className="tag">React</span>,{" "}
                        <span className="tag">JavaScript</span>,{" "}
                        <span className="tag">Next.js</span>,{" "}
                        <span className="tag">Tailwind CSS</span>,{" "}
                        <span className="tag">HTML</span>,{" "}
                        <span className="tag">CSS</span>, and{" "}
                        <span className="tag">Sass</span>, with a strong focus on clean code
                        and smooth user experiences.
                    </p>
                </div>

                {/* Item 2 */}
                <div className="about-item">
                    <span className="dot"></span>
                    <p>
                        I have hands-on experience working with{" "}
                        <span className="tag">React Router</span>,{" "}
                        <span className="tag">Axios</span>, and{" "}
                        <span className="tag">APIs</span> to build dynamic applications,
                        handle navigation efficiently, and manage data fetching. I enjoy
                        refining layouts, hover effects, and UI interactions to create
                        polished and engaging interfaces.
                    </p>
                </div>

                {/* Item 3 */}
                <div className="about-item">
                    <span className="dot"></span>
                    <p>
                        As a{" "}
                        <span className="highlight-text">
                            hardworking, problem-solving, and collaborative developer
                        </span>
                        , I’m always eager to learn new technologies and improve my
                        workflow. I’m committed to delivering high-quality front-end
                        solutions that align with user needs and business goals.
                    </p>
                </div>

                {/* CTA */}
                <div className="about-cta">
                    <p>
                        Ready to collaborate on your next project?{" "}
                        <a href="#contact">Contact with me</a>
                    </p>
                </div>
            </div>
        </section>
    )
}
