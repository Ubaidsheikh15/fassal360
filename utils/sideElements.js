import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': '',
        'instagram': '',
        'twitter': '',
        'linkedin': '',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'fassal360@gmail.com',
        onClick: () => openLink('')
    },
    handleIconClick,
}

export default sideElements