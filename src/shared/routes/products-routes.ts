const productPageRoutes = [
    {
        category: "mobile", values: [{
            id: crypto.randomUUID(),
            name: "Apple", slug: "apple", logo: "/icons/pp-icons/apple.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "Samsung", slug: "samsung", logo: "/icons/pp-icons/samsung.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "Huawei", slug: "huawei", logo: "/icons/pp-icons/honor.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "Xiaomi", slug: "xiaomi", logo: "/icons/pp-icons/xiaomi.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "ZTE", slug: "zte", logo: "/icons/pp-icons/zte-new.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "Oppo", slug: "oppo", logo: "/icons/pp-icons/oppo.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "Nokia", slug: "nokia", logo: "/icons/pp-icons/nokia.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "TCL", slug: "tcl", logo: "/icons/pp-icons/tcl.svg"
        }
        ]
    },
    {
        category: "laptops", values: [{
            id: crypto.randomUUID(),
            name: "Apple", slug: "apple", logo: "/icons/pp-icons/apple.svg"
        },
        ]
    },
    {
        category: "tablets", values: [{
            id: crypto.randomUUID(),
            name: "Apple", slug: "apple", logo: "/icons/pp-icons/apple.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "Samsung", slug: "samsung", logo: "/icons/pp-icons/samsung.svg"
        },
        ]
    },
    {
        category: "headsets", values: [{
            id: crypto.randomUUID(),
            name: "Apple", slug: "apple", logo: "/icons/pp-icons/apple.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "Samsung", slug: "samsung", logo: "/icons/pp-icons/samsung.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "JBL", slug: "jbl", logo: "/icons/pp-icons/jbl.svg"
        }]
    },
    {
        category: "watches", values: [{
            id: crypto.randomUUID(),
            name: "Apple", slug: "apple", logo: "/icons/pp-icons/apple.svg"
        }, {
            id: crypto.randomUUID(),
            name: "Samsung", slug: "samsung", logo: "/icons/pp-icons/samsung.svg"
        }]
    },
    {
        category: "vr", values: [{
            id: crypto.randomUUID(),
            name: "Apple", slug: "apple", logo: "/icons/pp-icons/apple.svg"
        },
        {
            id: crypto.randomUUID(),
            name: "Meta Quest 3", slug: "meta", logo: "/icons/pp-icons/meta.svg"
        }],
    },
    {
        category: "speakers", values: [{
            id: crypto.randomUUID(),
            name: "JBL", slug: "jbl", logo: "/icons/pp-icons/jbl.svg"
        },],
    },
    {
        category: "accessories", values: [],
    }
];

export const URLS = {
    all: "/products",
    mobile: "/products?category=mobile",
    tablets: "/products?category=tablets",
    watches: "/products?category=watches",
    headsets: "/products?category=headsets",
    vr: "/products?category=vr",
    laptops: "/products?category=laptops",
    speakers: "/products?category=speakers",
    accessories: "/products?category=accessories",
    apple: "/products?category=mobile&brand=apple",
    samsung: "/products?category=mobile&brand=samsung",
    huawei: "/products?category=mobile&brand=huawei",
    xiaomi: "/products?category=mobile&brand=xiaomi",
    zte: "/products?category=mobile&brand=zte",
    oppo: "/products?category=mobile&brand=oppo",
    nokia: "/products?category=mobile&brand=nokia",
    tcl: "/products?category=mobile&brand=tcl",
    apple_tablets: "/products?category=tablets&brand=apple",
    samsung_tablets: "/products?category=tablets&brand=samsung",
    apple_vr: "/products?category=vr&brand=apple",
}

export default productPageRoutes