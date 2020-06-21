// IMAGES
import project1 from "./images/project-1.png"
import project2 from "./images/project-2.png"
import project3 from "./images/project-3.png"
import project4 from "./images/project-4.png"
import project5 from "./images/project-5.png"
import project6 from "./images/project-6.png"

const HUES = [
    56,
    292,
    180,
    159,
    344
]

const randomNum = length => Math.floor(Math.random() * length);

export const COLORS = {
    randomColor: () => `hsl(${HUES[randomNum(HUES.length)]}, var(--saturation), var(--lightness))`,
    dark: {
        text: '#d9d7e0',
        background: '#131217',
        secondary: '#131217',
        contrast: '#1e1e22',
        complimentary: '#121117'
    },
    light: {
        text: '#131217',
        background: '#fff',
        secondary: '#fff',
        contrast: `hsl(${HUES[2]}, var(--saturation), var(--lightness))`,
        complimentary: '#fff'
    }
}

// PROJECT DATA

export const PROJECT_DATA = [
    {
        id: 0,
        title: "Nike",
        description: "A Nike clone built using ReactJS, Redux and Firebase. It uses the Stripe API and NodeJs to receive payments* and includes multiple search features to filter the products.",
        source: '',
        demo: '',
        image: project2,
        tech: ["Html", "Css", "Javascript/ES6", "ReactJs", "Redux", "Firebase", "Styled Components", "Stripe API"]
    },
    {
        id: 1,
        title: "Movies R Us",
        description: "This site was built using ReactJS and the MovieDB API. It allows you to browse through hundreds of movies or search for your favourites to find ones that are similar.",
        source: " ",
        demo: " ",
        image: project1,
        tech: ["Html", "Css", "Javascript/ES6", "ReactJs", "Scss", "React Spring", "API"]
    },
    {
        id: 2,
        title: "Covid-19",
        description: "This is the first e-commerce (like) application I built using ReactJs. It allows you to add and remove items from your cart and displays your current cart total.",
        source: '',
        demo: '',
        image: project4,
        tech: ["Html", "Css", "Javascript/ES6", "ReactJs", "API"] 
    },
    {
        id: 3,
        title: "Roots Clothing",
        description: "This is the first e-commerce (like) application I built using ReactJs. It allows you to add and remove items from your cart and displays your current cart total.",
        source: " ",
        demo: " ",
        image: project3,
        tech: ["Html", "Css", "Javascript/ES6", "ReactJs", "Scss"] 
    },
    {
        id: 4,
        title: "ABCs of CSS",
        description: "Use the letters on your keyboard to navigate through 26 different page layouts containing 26 different CSS tips, font-families and color palettes. Originally built using vanilla Javascript, recently refactored using ReactJs.",
        source: " ",
        demo: " ",
        image: project5,
        tech: ["Html", "Css", "Javascript/ES6", "ReactJs"] 
    },
    {
        id: 5,
        title: "Project Graveyard",
        description: "You heard it. This is the place where old projects go to die. Built using ReactJS and Gatsby, this websites sole purpose is to keep track of all the weird things I've built. **coming soon**",
        source: " ",
        demo: " ",
        image: project6,
        tech: ["Html", "Css", "Javascript/ES6", "ReactJs", "GatsbyJs", "GraphQl", "NodeJs"] 
    },
]