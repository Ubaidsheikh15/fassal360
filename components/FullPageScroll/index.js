import React, { useEffect } from 'react';


export const darkPalettes = [
  {
    layer1: '#121212',  // Dark background
    layer2: '#1f1f1f',  // Slightly lighter for cards/containers
    layer3: '#88c932',  // Accent (headings/buttons)
    layer4: '#ffffff',  // Text
  },
  {
    layer1: '#0d1b1e',
    layer2: '#1b3b36',
    layer3: '#88c932',
    layer4: '#e0e0e0',
  },
  {
    layer1: '#141414',
    layer2: '#2c2c2c',
    layer3: '#88c932',
    layer4: '#d1d1d1',
  },
];


const litePalettes = [
  {
    layer1: '#ffffff',  // Main background
    layer2: '#f1f1f1',  // Container / cards
    layer3: '#2b2b2b',  // Main text
    layer4: '#88c932',  // Accent (buttons/headings)
  },
  {
    layer1: '#f5fdf6',
    layer2: '#e3f4d7',
    layer3: '#2a2a2a',
    layer4: '#88c932',
  },
  {
    layer1: '#f7f9fc',
    layer2: '#d9e9c7',
    layer3: '#232323',
    layer4: '#88c932',
  },
];


export const getPelettes = () => {
    return litePalettes
}

function FullPageScroll() {

    useEffect(() => {
        window.addEventListener("scroll", scrollColor);
        scrollColor()
    }, []);

    const changeColors = (color) => {
        const root = document.documentElement;
        root.style.setProperty('--themeColor1', color.layer1);
        root.style.setProperty('--themeColor2', color.layer2);
        root.style.setProperty('--themeColor3', color.layer3);
        root.style.setProperty('--themeColor4', color.layer4);
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta?.setAttribute && meta?.content !== color.layer2) {
            meta.setAttribute('content', color.layer2)
        }
    }


    const getColorIndex = () => {
        const height = window.innerHeight;
        const currentLocation = window.pageYOffset;
        const scrollPosition = currentLocation + (height / 2)
        const views = document.getElementsByClassName('view-element');
        let index = 0
        if (!views) return index
        if (scrollPosition < views[0].scrollHeight) return index
        for (let i = 0; i < views.length; i++) {
            const current = views[i]
            const after = views[i + 1]
            if (!after) {
                index = i
                break
            }
            if (scrollPosition > current.offsetTop && scrollPosition < after?.offsetTop) {
                index = i
                break
            }
        }
        return index
    }

    const scrollColor = () => {
        const index = getColorIndex()
        const pelettes = getPelettes()
        changeColors(pelettes[index] || pelettes[0])
    }

    return (
        <div />
    )
}



export default FullPageScroll;
