import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'CONSOLE',
        isTitle: true
    },
    {
        id: 200,
        label: 'PANEL',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 300,
                label: 'Admin',
                link: '/panel/admin',
                parentId: 200
            },
            {
                id: 400,
                label: 'Supervisor',
                link: '/panel/supervisor',
                parentId: 200
            }
        ]
    },
    {
        id: 2,
        label: 'DASHBOARDS',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 3,
                label: 'Scrap Management',
                link: '/dashboard',
                parentId: 2
            },
            {
                id: 4,
                label: 'MTO',
                link: '/dashboards/mto',
                parentId: 2
            },
            {
                id: 5,
                label: 'MWO',
                link: '/dashboard',
                parentId: 2
            },
            {
                id: 6,
                label: 'Packing',
                link: '/dashboard',
                parentId: 2
            }
        ]
    },
    {
        id: 100,
        label: 'REPORTING',
        icon: 'bx-home-circle',
        link: '/reports'
    },
    {
        id: 380,
        label: 'USER MANAGEMENT',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 390,
                label: 'Supervisor',
                link: '/usermanagement/supervisor',
                parentId: 380
            },
            {
                id: 400,
                label: 'Opertor',
                link: '/usermanagement/operator',
                parentId: 380
            },
            {
                id: 410,
                label: 'Quality & Testing',
                link: '/usermanagement/quality',
                parentId: 380
            }
        ]
    },
    {
        id: 8,
        isLayout: true
    },
    {
        id: 9,
        label: 'PROCESS',
        isTitle: true
    },
    {
        id: 13,
        label: 'SCRAP MANAGEMENT',
        icon: 'bx-store',
        subItems: [
            {
                id: 14,
                label: 'Scrap Purchase',
                link: '/scrapmanagement/scrappurchase',
                parentId: 13
            },
            {
                id: 15,
                label: 'Incoming Inspection',
                link: '/scrapmanagement/scrapinspection',
                parentId: 13
            },
            {
                id: 16,
                label: 'Storage of Raw Material',
                link: '/dashboard',
                parentId: 13
            },
            {
                id: 17,
                label: 'Material Segmentation',
                link: '/dashboard',
                parentId: 13
            },
            
        ]
    },
    {
        id: 22,
        label: 'MTO',
        icon: 'bx-bitcoin',
        subItems: [
            {
                id: 23,
                label: 'Material Loading',
                link: '/mto/loadingofrm',
                parentId: 22
            },
            {
                id: 24,
                label: 'Melting',
                link: '/mto/melting',
                parentId: 22
            },
            {
                id: 25,
                label: 'Flux Mixing',
                link: '/mto/fluxmixing',
                parentId: 22
            },
            {
                id: 26,
                label: 'Slag Removal',
                link: '/mto/slagremoving',
                parentId: 22
            },
            {
                id: 27,
                label: 'Composition Check',
                link: '/mto/slaginspection',
                parentId: 22
            },
            
        ]
    },
    {
        id: 30,
        label: 'MWO',
        icon: 'bx-envelope',
        subItems: [
            {
                id: 31,
                label: 'Transfer to MWO',
                link: '/mwo/transfertomwo',
                parentId: 30
            },
            {
                id: 32,
                label: 'Slag Removal',
                link: '/mwo/slagremoval',
                parentId: 30
            },
            {
                id: 31,
                label: 'Composition Check',
                link: '/mwo/mwoinspection',
                parentId: 30
            },
            {
                id: 32,
                label: 'Ingots Pouring',
                link: '/mwo/ingotpouring',
                parentId: 30
            },
            {
                id: 31,
                label: 'Visual Inspection',
                link: '/mwo/visualinspection',
                parentId: 30
            },
            {
                id: 32,
                label: 'Buffing/Polishing',
                link: '/mwo/buffingandpolishing',
                parentId: 30
            },
            
            {
                id: 32,
                label: 'Heat Number Printing',
                link: '/mwo/printing',
                parentId: 30
            }
        ]
    },
    {
        id: 37,
        label: 'PACKING & DISPATCH',
        icon: 'bx-receipt',
        subItems: [
            {
                id: 38,
                label: 'Final Inspection',
                link: '/packing/finalinspection',
                parentId: 37
            },
            {
                id: 39,
                label: 'Packing',
                link: '/packing/packingingots',
                parentId: 37
            },
            {
                id: 38,
                label: 'FAS',
                link: '/dashboard',
                parentId: 37
            },
            {
                id: 39,
                label: 'Dispatch',
                link: '/dashboard',
                parentId: 37
            },
        ]
    },
    // {
    //     id: 38,
    //     label: 'USER MANAGEMENT',
    //     isTitle: true
    // },
    // {
    //     id: 37,
    //     label: 'Supervisors',
    //     icon: 'bx-receipt',
    // },
    // {
    //     id: 37,
    //     label: 'Operators',
    //     icon: 'bx-receipt',
    // },
    // {
    //     id: 37,
    //     label: 'Quality and Testing',
    //     icon: 'bx-receipt',
    // },
    
    
];

