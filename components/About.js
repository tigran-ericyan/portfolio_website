import Nav from './Nav.js';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export default function About() {
    return (
        <div className="about" id="about">
            <Nav />
            <h1 className="about__title">About me</h1>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
                <p className="about__text">I’m <span className="black-bg">Full-Stack</span> Web Developer based in <span className="black-bg">Armenia.<br/></span>
                I’ve passion of creating <span className="black-bg">interesting projects</span> and solving <span className="black-bg">problems.<br/></span>
                I spend my spare time with reading <span className="black-bg">books</span>, listening <span className="black-bg">music</span> and <span className="black-bg">studying.</span><br/>
                When I was <span className="black-bg">13</span> I discovered <span className="black-bg">coding</span> and I liked that <span className="black-bg">instantly.</span> It’s really<br/>
                <span className="black-bg">pleasure</span> of coding for me.</p>
            </AnimationOnScroll>
        </div>
    )
}