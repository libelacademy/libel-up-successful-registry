import membershipImage1 from "../images/memberships/Enmascarar grupo 7.png";
import membershipImage2 from "../images/memberships/Enmascarar grupo 6.png";
import membershipImage3 from "../images/memberships/Enmascarar grupo 5.png";
import membershipImage4 from "../images/memberships/Enmascarar grupo 4.png";

import membershipIcon1 from "../images/memberships/first.png";
import membershipIcon2 from "../images/memberships/second.png";
import membershipIcon3 from "../images/memberships/third.png";
import membershipIcon4 from "../images/memberships/diamond.png";

const memberships = [
    {
        image: membershipImage1,
        icon: membershipIcon4,
        name: "Packs",
        price: "59.00",
        courses: 26,
        url: "https://cursos.libel.academy/collections?category=pack",
    },
    {
        image: membershipImage2,
        icon: membershipIcon1,
        name: "Recargada",
        price: "39.00",
        courses: 41,
        url: "https://cursos.libel.academy/bundles/membresia-recargada",
    },
    {
        image: membershipImage3,
        icon: membershipIcon2,
        name: "Black",
        price: "29.00",
        courses: 23,
        url: "https://cursos.libel.academy/bundles/membresia-black",
    },
    {
        image: membershipImage4,
        icon: membershipIcon3,
        name: "Intermedio",
        price: "49.00",
        courses: 9,
        url: "https://cursos.libel.academy/bundles/plan-nivel-intermedio-blender",
    },
];

export default memberships;
