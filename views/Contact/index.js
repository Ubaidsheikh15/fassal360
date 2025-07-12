import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParallax } from 'react-scroll-parallax';
import Star from '../../components/SVGs/Star';
import GitFork from '../../components/SVGs/GitFork';

const Contact = ({ data: {
    label,
    heading,
    description,
    button,
    handleBuiltByClick,
    designAndBuiltBy,
} }) => {

    const [githubInfo, setGitHubInfo] = useState({
        stars: null,
        forks: null,
    });
    
    const { ref } = useParallax({
        easing: 'easeIn',
        translateX: [-50, 0]
    });
    return (
        <div className='ai-contact'>
        </div>
    )
}

Contact.propTypes = {}

export default Contact