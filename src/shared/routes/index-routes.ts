import { getAppleProducts } from "@/api/home/get-apple-products";
import getOtherBrandProducts from "@/api/home/get-other-brand-products";
import getAccessories from "@/api/home/get-product-accessories";
import { getSamsungProducts } from "@/api/home/get-samsung-products";
import { getHeadsets } from "@/api/home/get-sound-products";

// navbar routes
const navbarRoutes = [
    { name: "All", href: "/products" },
    { name: "Mobile", href: "/products?category=mobile" },
    { name: "Tablets", href: "/products?category=tablets" },
    { name: "Watches", href: "/products?category=watches" },
    { name: "Headsets", href: "/products?category=headsets" },
    { name: "Quest & VR", href: "/products?category=vr" },
    { name: "Laptops", href: "/products?category=laptops" },
    { name: "Speakers", href: "/products?category=speakers" },
    { name: "Accessories", href: "/products?category=accessories" },
    { name: "Contact", href: "#" },
]

// apple routes
const appleProductRoutes = [
    {
        id: crypto.randomUUID(),
        name: 'iPhone',
        slug: 'iphone',
        link: '/icons/badge-icon/iphone.svg',
        onFetch: (param: string) => getAppleProducts(param, 4, 0),
    },
    {
        id: crypto.randomUUID(),
        name: 'iPad',
        slug: 'ipad',
        link: '/icons/badge-icon/iphone.svg',
        onFetch: (param: string) => getAppleProducts(param, 4, 0),
    },
    {
        id: crypto.randomUUID(),
        name: 'iWatch',
        slug: 'iwatch',
        link: '/icons/badge-icon/iphone.svg',
        onFetch: (param: string) => getAppleProducts(param, 4, 0),
    },
    {
        id: crypto.randomUUID(),
        name: 'Macbook',
        slug: 'macbook',
        link: '/icons/badge-icon/mcbook.svg',
        onFetch: (param: string) => getAppleProducts(param, 4, 0),
    },
    {
        id: crypto.randomUUID(),
        name: 'AirPods',
        slug: 'airpods',
        link: '/icons/badge-icon/pods.svg',
        onFetch: (param: string) => getAppleProducts(param, 4, 0),
    },
    {
        id: crypto.randomUUID(),
        name: 'Vision Pro',
        slug: 'vision-pro',
        link: '/icons/badge-icon/iphone.svg',
        onFetch: (param: string) => getAppleProducts(param, 4, 0),
    }
];

// samsung routes
const samsungProductRoutes = [
    {
        id: crypto.randomUUID(),
        name: 'Galaxy Mobile',
        slug: 'galaxy-mobile',
        link: '/icons/badge-icon/smartphone.svg',
        onFetch: (param: string) => getSamsungProducts(param, 4, 0),
    },
    {
        id: crypto.randomUUID(),
        name: 'Galaxy Tab',
        slug: 'galaxy-tab',
        link: '/icons/badge-icon/tablet.svg',
        onFetch: (param: string) => getSamsungProducts(param, 4, 0),
    },
    {
        id: crypto.randomUUID(),
        name: 'Galaxy Watch',
        slug: 'galaxy-watch',
        link: '/icons/badge-icon/awatch.svg',
        onFetch: (param: string) => getSamsungProducts(param, 4, 0),
    },
    {
        id: crypto.randomUUID(),
        name: 'Galaxy Buds',
        slug: 'galaxy-buds',
        link: '/icons/badge-icon/earbuds.svg',
        onFetch: (param: string) => getSamsungProducts(param, 4, 0),
    }
];

// headsets routes
const headsetProductRoutes = [
    {
        id: crypto.randomUUID(),
        name: 'Headphones',
        slug: 'headphones',
        onFetch: (param: string) => getHeadsets(param, 4, 0),
    },
    {
        id: crypto.randomUUID(),
        name: 'Earbuds',
        slug: 'earbuds',
        onFetch: (param: string) => getHeadsets(param, 4, 0),
    }
];

// accessories routes
const accessoriesProductRoutes = [
    {
        id: crypto.randomUUID(),
        name: 'Mouse & Keyboard',
        slug: 'mouse',
        onFetch: (param: string) => getAccessories(param, 4, 0),
    },
    {
        id: crypto.randomUUID(),
        name: 'Megsafe',
        slug: 'megsafe',
        onFetch: (param: string) => getAccessories(param, 4, 0)
    },
    {
        id: crypto.randomUUID(),
        name: 'Homepod',
        slug: 'homepod',
        onFetch: (param: string) => getAccessories(param, 4, 0)
    },
];

const otherProductRoutes = [
    {
        id: crypto.randomUUID(),
        name: 'Honor',
        slug: 'honor',
        onFetch: (param: string) => getOtherBrandProducts(param, 4, 0),
    },
    {
        id: crypto.randomUUID(),
        name: 'Nokia',
        slug: 'nokia',
        onFetch: (param: string) => getOtherBrandProducts(param, 4, 0),
    }, {
        id: crypto.randomUUID(),
        name: 'Xiaomi',
        slug: 'xiaomi',
        onFetch: (param: string) => getOtherBrandProducts(param, 4, 0),
    },
    {
        id: crypto.randomUUID(),
        name: 'ZTE',
        slug: 'zte',
        onFetch: (param: string) => getOtherBrandProducts(param, 4, 0),
    },
    {
        id: crypto.randomUUID(),
        name: 'TCL',
        slug: 'tcl',
        onFetch: (param: string) => getOtherBrandProducts(param, 4, 0),
    },
    {
        id: crypto.randomUUID(),
        name: 'Oppo',
        slug: 'oppo',
        onFetch: (param: string) => getOtherBrandProducts(param, 4, 0),
    }
];



export {
    appleProductRoutes,
    samsungProductRoutes,
    navbarRoutes,
    otherProductRoutes,
    headsetProductRoutes,
    accessoriesProductRoutes
};