import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: "CONSOLE",
    isTitle: true,
  },
  {
    id: 200,
    label: "DASHBOARD",
    icon: "bx-bar-chart-alt",
    subItems: [
      {
        id: 300,
        label: "Admin",
        link: "/pages/dashboard/admin/graph",
        parentId: 200,
      },
      {
        id: 400,
        label: "Supervisor",
        link: "/pages/dashboard/supervisor/graph",
        parentId: 200,
      },
      {
        id: 401,
        label: "Quality",
        link: "/pages/dashboard/quality",
        parentId: 200,
      },
    ],
  },
  {
    id: 100,
    label: "REPORTING",
    icon: "bx-book-open",
    link: "/pages/reports",
  },
  {
    id: 380,
    label: "USER MANAGEMENT",
    icon: "bx-user",
    subItems: [
      {
        id: 390,
        label: "Supervisor",
        link: "/pages/usermanagement/supervisor",
        parentId: 380,
      },
      {
        id: 400,
        label: "Operator",
        link: "/pages/usermanagement/operator",
        parentId: 380,
      },
      {
        id: 410,
        label: "Quality & Testing",
        link: "/pages/usermanagement/quality",
        parentId: 380,
      },
    ],
  },
  {
    id: 390,
    label: "SETTINGS",
    icon: "bx-cog",
    subItems: [
      {
        id: 1,
        label: "General",
        link: "/pages/settings/general",
        parentId: 390,
      },
      {
        id: 2,
        label: "MTO Furnace (Melting)",
        link: "/pages/settings/mtofurnace",
        parentId: 390,
      },
      {
        id: 3,
        label: "MWO Furnace (Holding)",
        link: "/pages/settings/mwofurnace",
        parentId: 390,
      },
      {
        id: 4,
        label: "Line",
        link: "/pages/settings/line",
        parentId: 390,
      },
      {
        id: 5,
        label: "Shift",
        link: "/pages/settings/shift",
        parentId: 390,
      },
    ],
  },
  {
    id: 9,
    label: "PROCESS",
    isTitle: true,
  },
  {
    id: 13,
    label: "SCRAP MANAGEMENT",
    icon: "bx-store",
    subItems: [
      {
        id: 14,
        label: "Inward Scrap",
        link: "/pages/scrapmanagement/scrappurchase",
        parentId: 13,
      },
      {
        id: 15,
        label: "Incoming Inspection",
        link: "/pages/scrapmanagement/scrapinspection",
        parentId: 13,
      },
      //   {
      // id: 16,
      // label: "Storage of Raw Material",
      // link: "/dashboard",
      // parentId: 13,
      //   },
      //   {
      // id: 17,
      // label: "Material Segmentation",
      // link: "/dashboard",
      // parentId: 13,
      //   },
    ],
  },
  {
    id: 22,
    label: "MTO",
    icon: "bx-tone",
    subItems: [
      {
        id: 23,
        label: "Material Loading",
        link: "/pages/mto/loadingofrm",
        parentId: 22,
      },
      {
        id: 24,
        label: "Melting",
        link: "/pages/mto/melting",
        parentId: 22,
      },
      {
        id: 25,
        label: "Flux Mixing",
        link: "/pages/mto/fluxmixing",
        parentId: 22,
      },
      {
        id: 26,
        label: "Slag Removal",
        link: "/pages/mto/slagremoving",
        parentId: 22,
      },
      {
        id: 27,
        label: "Composition Check",
        link: "/pages/mto/slaginspection",
        parentId: 22,
      },
    ],
  },
  {
    id: 30,
    label: "MWO",
    icon: "bx-aperture",
    subItems: [
      {
        id: 31,
        label: "Transfer to MWO",
        link: "/pages/mwo/transfertomwo",
        parentId: 30,
      },
      {
        id: 32,
        label: "Slag Removal",
        link: "/pages/mwo/slagremoval",
        parentId: 30,
      },
      {
        id: 31,
        label: "Composition Check",
        link: "/pages/mwo/mwoinspection",
        parentId: 30,
      },
      {
        id: 32,
        label: "Ingots Pouring",
        link: "/pages/mwo/ingotpouring",
        parentId: 30,
      },
      {
        id: 31,
        label: "Visual Inspection",
        link: "/pages/mwo/visualinspection",
        parentId: 30,
      },
      {
        id: 32,
        label: "Buffing/Polishing",
        link: "/pages/mwo/buffingandpolishing",
        parentId: 30,
      },

      {
        id: 32,
        label: "Heat Number Printing",
        link: "/pages/mwo/printing",
        parentId: 30,
      },
      {
        id: 33,
        label: "Final Inspection",
        link: "/pages/mwo/finalinspection",
        parentId: 30,
      },
    ],
  },
  {
    id: 37,
    label: "PACKING",
    icon: "bx-package",
    link: "/pages/packing",
  },
  {
    id: 40,
    label: "DISPATCH",
    icon: "bx-send",
    subItems: [
      {
        id: 41,
        label: "FAS",
        link: "/pages/dispatch/fas",
        parentId: 40,
      },
      {
        id: 42,
        label: "Certificate of Quality",
        link: "/pages/dispatch/certquality",
        parentId: 40,
      },
      {
        id: 43,
        label: "Final Dispatch",
        link: "/pages/dispatch/finaldispatch",
        parentId: 40,
      },
    ],
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
