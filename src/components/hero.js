import React from 'react';
import styles from './hero.module.css';
import video from '../images/header.mp4';
import Typed from 'typed.js';

class TypedReact extends React.Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
        // your desired props to this destructuring assignment.
        const { strings } = this.props;
        // You can pass other options here, such as typing speed, back speed, etc.
        const options = {
            strings: strings,
            typeSpeed: 70,
            startDelay: 700,
            backSpeed: 50,
            backDelay: 1500,
            loop: true,
            loopCount: Infinity,
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.destroy();
    }

    render() {
        return (
            <p>
                <span
                    style={{ whiteSpace: 'pre' }}
                    ref={el => {
                        this.el = el;
                    }}
                />
            </p>
        );
    }
}

const Hero = () => {
    return (
        <div className={styles.header}>
            <video autoPlay muted loop id="myVideo" className={styles.video}>
                <source src={video} type="video/mp4"></source>
            </video>

            <div className={styles.content}>
                <h1>Xavier Leong</h1>
                <TypedReact
                    strings={['Video Editor', 'Journalist', 'Traveler']}
                />
            </div>
        </div>
    );
};

export default Hero;
