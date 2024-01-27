import React from 'react';
import { Styles } from "./styles/backToTop.js";

class BackToTop extends React.Component {
    constructor() {
        super();
        this.state = {
            intervalId: 0,
            backToTopBtn: false
        };

        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const backToTopBtn = window.scrollY > 800;
            if (backToTopBtn !== this.state.backToTopBtn) {
                this.onScroll(backToTopBtn);
            }
        });
    }

    componentWillUnmount() {
        this.setState = () => {
            return;
        };
    }

    onScroll(backToTopBtn) {
        this.setState({ backToTopBtn });
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    render() {
        let backBtn = (this.state.backToTopBtn ? ' active' : '');

        return (
            <Styles>
                {/* Back To Top */}
                <button type="button" className={`back-to-top${backBtn}`} onClick={() => { this.scrollToTop(); }}>
                    <i className="las la-arrow-up"></i>
                </button>
            </Styles>
        )
    }
}

export default BackToTop