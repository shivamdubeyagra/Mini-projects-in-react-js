const menus = [
    {
        label:'Home',
        to:'/'
    },
    {
        label:'profile',
        to:'/profile',
        children:[
            {
                label:"Details",
                to:"/details",
                children:[
                    {
                        label:"Location",
                        to:"location",
                    },
                ],
            },
        ],
    },
    {
        label:"Settings",
        to:'/settings',
        children:[
            {
                label:"Account",
                to:'account',
            },
            {
                label:"Security",
                to:'/security',
                children:[
                    {
                        label:'login',
                        to:'/login'
                    },
                    {
                        label:"Register",
                        to:'register',
                        children:[
                            {
                                label:'hello',
                                to:'/hello'
                            }
                        ]
                    },
                ],
            },
        ],
    },
];

export default menus;