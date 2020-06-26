const currDate = new Date();
const currentYear = currDate.getFullYear();
import { faStar, faHandRock, faGrinSquintTears, faSadCry } from '@fortawesome/free-regular-svg-icons';
import { faJediOrder, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const categories = [
    {
        slug: currentYear,
        icon: faStar,
        label: currentYear
    },
    {
        slug: "animation",
        icon: faGithubAlt,
        label: "Animation"
    },
    {
        slug: "action",
        icon: faHandRock,
        label: "Action"
    },
    {
        slug: "comedy",
        icon: faGrinSquintTears,
        label: "Comedy"
    },
    {
        slug: "drama",
        icon: faSadCry,
        label: "Drama"
    },
    {
        slug: "sci-fi",
        icon: faJediOrder,
        label: "Sci-fi"
    },
];

export default categories;