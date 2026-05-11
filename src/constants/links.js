import { 
    RiFacebookFill, 
    RiLinkedinFill, 
    RiTwitterFill 
} from "@remixicon/react";

export const headerLinks = [
    {
        id: 1,
        path: '/',
        lable: 'Home'
    },
    {
        id: 2,
        path: '/courses',
        lable: 'Courses'
    },
    {
        id: 3,
        path: '/profile',
        lable: 'Profile'
    },
];

export const footerLinks = [
    {
        id: 1,
        path: '/',
        lable: 'Home'
    },
    {
        id: 2,
        path: '/courses',
        lable: 'Courses'
    },
    {
        id: 3,
        path: '/',
        lable: 'Terms & Conditions'
    },
    {
        id: 4,
        path: '/',
        lable: 'Privacy policy'
    },
];

export const socialLinks = [
    {
        id: 1,
        path: '/',
        icon: <RiFacebookFill size={16} className="text-[#121212]" />
    },
    {
        id: 2,
        path: '/',
        icon: <RiLinkedinFill size={16} className="text-[#121212]" />
    },
    {
        id: 3,
        path: '/',
        icon: <RiTwitterFill size={16} className="text-[#121212]" />
    },
];