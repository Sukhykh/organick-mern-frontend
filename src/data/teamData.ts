import GiovaniBacardoPng from '../assets/images/Team/Giovani-Bacardo.png'
import GiovaniBacardoWebp from '../assets/images/Team/Giovani-Bacardo.webp'
import MarianneLorenoPng from '../assets/images/Team/Marianne-Loreno.png'
import MarianneLorenoWebp from '../assets/images/Team/Marianne-Loreno.webp'
import RigaPelorePng from '../assets/images/Team/Riga-Pelore.png'
import RigaPeloreWebp from '../assets/images/Team/Riga-Pelore.webp'

export const teamData = [
    {
        id: 1,
        picture: {
            png: GiovaniBacardoPng,
            webp: GiovaniBacardoWebp,
        },
        name: 'Giovani Bacardo',
        position: 'Farmer',
        links: [
            {
                title: 'facebook',
                path: 'https://www.facebook.com/',
            },
            {
                title: 'twitter',
                path: 'https://twitter.com/',
            },
        ]
    },
    {
        id: 2,
        picture: {
            png: MarianneLorenoPng,
            webp: MarianneLorenoWebp,
        },
        name: 'Marianne Loreno',
        position: 'Designer',
        links: [
            {
                title: 'instagram',
                path: 'https://www.instagram.com/',
            },
            {
                title: 'facebook',
                path: 'https://www.facebook.com/',
            },
            {
                title: 'twitter',
                path: 'https://twitter.com/',
            },
        ]
    },
    {
        id: 3,
        picture: {
            png: RigaPelorePng,
            webp: RigaPeloreWebp,
        },
        name: 'Riga Pelore',
        position: 'Farmer',
        links: [
            {
                title: 'instagram',
                path: 'https://www.instagram.com/',
            },
            {
                title: 'facebook',
                path: 'https://www.facebook.com/',
            },
            {
                title: 'twitter',
                path: 'https://twitter.com/',
            },
        ]
    }
]