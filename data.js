export const product = {
    id: 1552,
    name: 'MOMENTUM True Wireless 2',
    type: 'Earbuds that put sound first',
    isNew: true,
    price: 295.95,
    warrenty: '2 years warrenty',
    discription: {
        overview: `For the past 75 years, Sennheiser has put sound first. The new
        MOMENTUM True Wireless 2 is no different. Thanks to leading audio
        technology and innovation, these new earbuds deliver the best
        listening experience anytime, anywhere. With improved ergonomics
        designed for full day wearing and refined touch controls for a more
        personalised experience, they have been finely crafted for the most
        discerning listener and aim to simplify your life by enhancing your
        everyday.discerning listener and aim to simplify your life by
        enhancing your.`,
        features: `For the past 75 years, Sennheiser has put sound first. The new
        MOMENTUM True Wireless 2 is no different. Thanks to leading audio
        technology and innovation, these new earbuds deliver the best
        listening experience anytime, anywhere. With improved ergonomics
        designed for full day wearing and refined touch controls.`,
        whatInBox: `For the past 75 years, Sennheiser has put sound first. The new
        MOMENTUM True Wireless 2 is no different. Thanks to leading audio
        technology and innovation improved ergonomics designed for full day
        wearing and refined touch controls for a more personalised
        experience, they have been finely crafted for the most discerning
        listener and aim to simplify your life by enhancing your everyday.`
    },
    images: [
        { id: 1, img: require("./src/assets/img/pd-1.png") },
        { id: 2, img: require("./src/assets/img/pd-2.png") },
        { id: 3, img: require("./src/assets/img/pd-3.png") },
    ],
    options: {
        colors: [
            { id: 1, title: 'Ivory White', content: `For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True.`, price: 0 },
            { id: 2, title: 'Matte Black', content: `Of all of the celestial bodies that capture our attention and fascination as astronomers.`, price: 0 },
        ],
        warrenty: [
            { id: 1, title: '2 years coverage', content: `For the past 75 years, Sennheiser has put sound first.`, price: 0 },
            { id: 2, title: '3 years coverage', content: `For the past 75 years, Sennheiser has put sound first.`, price: 75 },
        ],
        features: [
            { id: 1, title: 'Voice Assistant support', content: `Voice Assistant support`, price: 0 },
            { id: 2, title: 'Customizable controls', content: `Customizable controls`, price: 55 },
        ],
    },
    specifications: [
        { id: 1, title: 'Dimensions', content: '76.8 x 43.8 x 34.7 mm (earbuds and charging case)' },
        { id: 2, title: 'USB Standard', content: 'USB-C' },
        { id: 3, title: 'Power supply', content: 'Sennheiser 7mm dynamic driver' },
        { id: 4, title: 'Frequency response (Microphone)', content: '100 Hz to 10 kHz' },
        { id: 5, title: 'Frequency response', content: '5 - 21,000 Hz' },
        { id: 6, title: 'Noise cancellation', content: 'Single-Mic ANC per earbud side' },
    ]
}