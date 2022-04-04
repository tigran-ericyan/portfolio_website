import Typewriter from 'typewriter-effect';
import Nav from './Nav.js';

export default function Header() {
    return (
        <header id="header">
            <Nav />
            <div className="header__text">
                <h1 className="header__title">Hello, I’m <br/><Typewriter
                options={{
                    strings: ['Tigran.', 'Web Developer.'],
                    autoStart: true,
                    delay: 125,
                    loop: true,
                    wrapperClassName: 'Typewriter__wrapper',
                    cursorClassName: 'Typewriter__cursor',
                }}/></h1>
            </div>
        </header>
    )
}