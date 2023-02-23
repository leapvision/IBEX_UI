import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: "CONSOLE",
    isTitle: true,
  },
  {
    id: 2,
    label: "DASHBOARD",
    icon: "bx-bar-chart-alt",
    role: ["ibex_admin", "ibex_supervisor", "ibex_quality"],
    subItems: [
      {
        id: 3,
        label: "Admin",
        link: "/pages/dashboard/admin/graph",
        parentId: 2,
        role: ["ibex_admin"],
      },
      {
        id: 4,
        label: "Supervisor",
        link: "/pages/dashboard/supervisor/graph",
        parentId: 2,
        role: ["ibex_admin", "ibex_supervisor"],
      },
      {
        id: 5,
        label: "Quality",
        link: "/pages/dashboard/quality",
        parentId: 2,
        role: ["ibex_admin", "ibex_quality"],
      },
    ],
  },
  {
    id: 6,
    label: "REPORTING",
    icon: "bx-book-open",
    link: "/pages/reports",
    role: ["ibex_admin", "ibex_supervisor", "ibex_quality"],
  },
  {
    id: 7,
    label: "USER MANAGEMENT",
    icon: "bx-user",
    role: ["ibex_admin", "ibex_supervisor"],
    subItems: [
      {
        id: 8,
        label: "Supervisor",
        link: "/pages/usermanagement/supervisor",
        parentId: 7,
        role: ["ibex_admin"],
      },
      {
        id: 9,
        label: "Operator",
        link: "/pages/usermanagement/operator",
        parentId: 7,
        role: ["ibex_admin", "ibex_supervisor"],
      },
      {
        id: 10,
        label: "Quality & Testing",
        link: "/pages/usermanagement/quality",
        parentId: 7,
        role: ["ibex_admin"],
      },
    ],
  },
  {
    id: 11,
    label: "SETTINGS",
    icon: "bx-cog",
    role: ["ibex_admin", "ibex_supervisor", "ibex_quality"],
    subItems: [
      {
        id: 12,
        label: "General",
        link: "/pages/settings/general",
        parentId: 11,
        role: ["ibex_admin", "ibex_supervisor", "ibex_quality"],
      },
      {
        id: 13,
        label: "MTO Furnace (Melting)",
        link: "/pages/settings/mtofurnace",
        parentId: 11,
        role: ["ibex_admin"],
      },
      {
        id: 14,
        label: "MWO Furnace (Holding)",
        link: "/pages/settings/mwofurnace",
        parentId: 11,
        role: ["ibex_admin"],
      },
      {
        id: 15,
        label: "Line",
        link: "/pages/settings/line",
        parentId: 11,
        role: ["ibex_admin"],
      },
      {
        id: 16,
        label: "Shift",
        link: "/pages/settings/shift",
        parentId: 11,
        role: ["ibex_admin"],
      },
    ],
  },
  {
    id: 17,
    label: "PROCESS",
    isTitle: true,
  },
  {
    id: 18,
    label: "SCRAP MANAGEMENT",
    icon: "bx-store",
    role: ["ibex_admin", "ibex_supervisor", "ibex_quality"],
    subItems: [
      {
        id: 19,
        label: "Inward Scrap",
        link: "/pages/scrapmanagement/scrappurchase",
        parentId: 18,
        role: ["ibex_admin", "ibex_supervisor", "ibex_quality"],
      },
      {
        id: 20,
        label: "Incoming Inspection",
        link: "/pages/scrapmanagement/scrapinspection",
        parentId: 18,
        role: ["ibex_admin", "ibex_quality"],
      },
    ],
  },
  {
    id: 21,
    label: "MTO",
    icon: "bx-tone",
    role: ["ibex_admin", "ibex_supervisor", "ibex_quality"],
    subItems: [
      {
        id: 22,
        label: "Material Loading",
        link: "/pages/mto/loadingofrm",
        parentId: 21,
        role: ["ibex_admin", "ibex_supervisor"],
      },
      {
        id: 23,
        label: "Melting",
        link: "/pages/mto/melting",
        parentId: 21,
        role: ["ibex_admin", "ibex_supervisor"],
      },
      {
        id: 24,
        label: "Flux Mixing",
        link: "/pages/mto/fluxmixing",
        parentId: 21,
        role: ["ibex_admin", "ibex_supervisor"],
      },
      {
        id: 25,
        label: "Slag Removal",
        link: "/pages/mto/slagremoving",
        parentId: 21,
        role: ["ibex_admin", "ibex_supervisor"],
      },
      {
        id: 26,
        label: "Composition Check",
        link: "/pages/mto/slaginspection",
        parentId: 21,
        role: ["ibex_admin", "ibex_quality"],
      },
    ],
  },
  {
    id: 27,
    label: "MWO",
    icon: "bx-aperture",
    role: ["ibex_admin", "ibex_supervisor", "ibex_quality"],
    subItems: [
      {
        id: 28,
        label: "Transfer to MWO",
        link: "/pages/mwo/transfertomwo",
        parentId: 27,
        role: ["ibex_admin", "ibex_supervisor"],
      },
      {
        id: 29,
        label: "Slag Removal",
        link: "/pages/mwo/slagremoval",
        parentId: 27,
        role: ["ibex_admin", "ibex_supervisor"],
      },
      {
        id: 30,
        label: "Composition Check",
        link: "/pages/mwo/mwoinspection",
        parentId: 27,
        role: ["ibex_admin", "ibex_quality"],
      },
      {
        id: 31,
        label: "Ingots Pouring",
        link: "/pages/mwo/ingotpouring",
        parentId: 27,
        role: ["ibex_admin", "ibex_supervisor"],
      },
      {
        id: 32,
        label: "Visual Inspection",
        link: "/pages/mwo/visualinspection",
        parentId: 27,
        role: ["ibex_admin", "ibex_quality"],
      },
      {
        id: 33,
        label: "Buffing/Polishing",
        link: "/pages/mwo/buffingandpolishing",
        parentId: 27,
        role: ["ibex_admin", "ibex_supervisor"],
      },

      {
        id: 34,
        label: "Heat Number Printing",
        link: "/pages/mwo/printing",
        parentId: 27,
        role: ["ibex_admin", "ibex_supervisor"],
      },
      {
        id: 35,
        label: "Final Inspection",
        link: "/pages/mwo/finalinspection",
        parentId: 27,
        role: ["ibex_admin", "ibex_quality"],
      },
    ],
  },
  {
    id: 36,
    label: "PACKING",
    icon: "bx-package",
    link: "/pages/packing/packingingots",
    role: ["ibex_admin", "ibex_quality"],
  },
  {
    id: 38,
    label: "DISPATCH",
    icon: "bx-send",
    role: ["ibex_admin", "ibex_quality"],
    subItems: [
      {
        id: 39,
        label: "FAS",
        link: "/pages/dispatch/fas",
        parentId: 38,
        role: ["ibex_admin", "ibex_quality"],
      },
      {
        id: 40,
        label: "Certificate of Quality",
        link: "/pages/dispatch/certquality",
        parentId: 38,
        role: ["ibex_admin", "ibex_quality"],
      },
      {
        id: 41,
        label: "Final Dispatch",
        link: "/pages/dispatch/finaldispatch",
        parentId: 38,
        role: ["ibex_admin", "ibex_quality"],
      },
    ],
  },
];

// export const AdminMenu: MenuItem[] = [
//   {
//     id: 1,
//     label: "CONSOLE",
//     isTitle: true,
//   },
//   {
//     id: 2,
//     label: "DASHBOARD",
//     icon: "bx-bar-chart-alt",
//     subItems: [
//       {
//         id: 3,
//         label: "Admin",
//         link: "/pages/dashboard/admin/graph",
//         parentId: 2,
//       },
//       {
//         id: 4,
//         label: "Supervisor",
//         link: "/pages/dashboard/supervisor/graph",
//         parentId: 2,
//       },
//       {
//         id: 5,
//         label: "Quality",
//         link: "/pages/dashboard/quality",
//         parentId: 2,
//       },
//     ],
//   },
//   {
//     id: 6,
//     label: "REPORTING",
//     icon: "bx-book-open",
//     link: "/pages/reports",
//   },
//   {
//     id: 7,
//     label: "USER MANAGEMENT",
//     icon: "bx-user",
//     subItems: [
//       {
//         id: 8,
//         label: "Supervisor",
//         link: "/pages/usermanagement/supervisor",
//         parentId: 7,
//       },
//       {
//         id: 9,
//         label: "Operator",
//         link: "/pages/usermanagement/operator",
//         parentId: 7,
//       },
//       {
//         id: 10,
//         label: "Quality & Testing",
//         link: "/pages/usermanagement/quality",
//         parentId: 7,
//       },
//     ],
//   },
//   {
//     id: 11,
//     label: "SETTINGS",
//     icon: "bx-cog",
//     subItems: [
//       {
//         id: 12,
//         label: "General",
//         link: "/pages/settings/general",
//         parentId: 11,
//       },
//       {
//         id: 13,
//         label: "MTO Furnace (Melting)",
//         link: "/pages/settings/mtofurnace",
//         parentId: 11,
//       },
//       {
//         id: 14,
//         label: "MWO Furnace (Holding)",
//         link: "/pages/settings/mwofurnace",
//         parentId: 11,
//       },
//       {
//         id: 15,
//         label: "Line",
//         link: "/pages/settings/line",
//         parentId: 11,
//       },
//       {
//         id: 16,
//         label: "Shift",
//         link: "/pages/settings/shift",
//         parentId: 11,
//       },
//     ],
//   },
//   {
//     id: 17,
//     label: "PROCESS",
//     isTitle: true,
//   },
//   {
//     id: 18,
//     label: "SCRAP MANAGEMENT",
//     icon: "bx-store",
//     subItems: [
//       {
//         id: 19,
//         label: "Inward Scrap",
//         link: "/pages/scrapmanagement/scrappurchase",
//         parentId: 18,
//       },
//       {
//         id: 20,
//         label: "Incoming Inspection",
//         link: "/pages/scrapmanagement/scrapinspection",
//         parentId: 18,
//       },
//     ],
//   },
//   {
//     id: 21,
//     label: "MTO",
//     icon: "bx-tone",
//     subItems: [
//       {
//         id: 22,
//         label: "Material Loading",
//         link: "/pages/mto/loadingofrm",
//         parentId: 21,
//       },
//       {
//         id: 23,
//         label: "Melting",
//         link: "/pages/mto/melting",
//         parentId: 21,
//       },
//       {
//         id: 24,
//         label: "Flux Mixing",
//         link: "/pages/mto/fluxmixing",
//         parentId: 21,
//       },
//       {
//         id: 25,
//         label: "Slag Removal",
//         link: "/pages/mto/slagremoving",
//         parentId: 21,
//       },
//       {
//         id: 26,
//         label: "Composition Check",
//         link: "/pages/mto/slaginspection",
//         parentId: 21,
//       },
//     ],
//   },
//   {
//     id: 27,
//     label: "MWO",
//     icon: "bx-aperture",
//     subItems: [
//       {
//         id: 28,
//         label: "Transfer to MWO",
//         link: "/pages/mwo/transfertomwo",
//         parentId: 27,
//       },
//       {
//         id: 29,
//         label: "Slag Removal",
//         link: "/pages/mwo/slagremoval",
//         parentId: 27,
//       },
//       {
//         id: 30,
//         label: "Composition Check",
//         link: "/pages/mwo/mwoinspection",
//         parentId: 27,
//       },
//       {
//         id: 31,
//         label: "Ingots Pouring",
//         link: "/pages/mwo/ingotpouring",
//         parentId: 27,
//       },
//       {
//         id: 32,
//         label: "Visual Inspection",
//         link: "/pages/mwo/visualinspection",
//         parentId: 27,
//       },
//       {
//         id: 33,
//         label: "Buffing/Polishing",
//         link: "/pages/mwo/buffingandpolishing",
//         parentId: 27,
//       },

//       {
//         id: 34,
//         label: "Heat Number Printing",
//         link: "/pages/mwo/printing",
//         parentId: 27,
//       },
//       {
//         id: 35,
//         label: "Final Inspection",
//         link: "/pages/mwo/finalinspection",
//         parentId: 27,
//       },
//     ],
//   },
//   {
//     id: 36,
//     label: "PACKING",
//     icon: "bx-package",
//     link: "/pages/packing/packingingots",
//   },
//   {
//     id: 38,
//     label: "DISPATCH",
//     icon: "bx-send",
//     subItems: [
//       {
//         id: 39,
//         label: "FAS",
//         link: "/pages/dispatch/fas",
//         parentId: 38,
//       },
//       {
//         id: 40,
//         label: "Certificate of Quality",
//         link: "/pages/dispatch/certquality",
//         parentId: 38,
//       },
//       {
//         id: 41,
//         label: "Final Dispatch",
//         link: "/pages/dispatch/finaldispatch",
//         parentId: 38,
//       },
//     ],
//   },
// ];

// export const SupervisorMenu: MenuItem[] = [
//   {
//     id: 1,
//     label: "CONSOLE",
//     isTitle: true,
//   },
//   {
//     id: 2,
//     label: "DASHBOARD",
//     icon: "bx-bar-chart-alt",
//     subItems: [
//       {
//         id: 3,
//         label: "Supervisor",
//         link: "/pages/dashboard/supervisor/graph",
//         parentId: 2,
//       },
//     ],
//   },
//   {
//     id: 4,
//     label: "REPORTING",
//     icon: "bx-book-open",
//     link: "/pages/reports",
//   },
//   {
//     id: 5,
//     label: "USER MANAGEMENT",
//     icon: "bx-user",
//     subItems: [
//       {
//         id: 6,
//         label: "Operator",
//         link: "/pages/usermanagement/operator",
//         parentId: 5,
//       },
//     ],
//   },
//   {
//     id: 7,
//     label: "SETTINGS",
//     icon: "bx-cog",
//     subItems: [
//       {
//         id: 8,
//         label: "General",
//         link: "/pages/settings/general",
//         parentId: 7,
//       },
//     ],
//   },
//   {
//     id: 9,
//     label: "PROCESS",
//     isTitle: true,
//   },
//   {
//     id: 10,
//     label: "SCRAP MANAGEMENT",
//     icon: "bx-store",
//     subItems: [
//       {
//         id: 11,
//         label: "Inward Scrap",
//         link: "/pages/scrapmanagement/scrappurchase",
//         parentId: 10,
//       },
//     ],
//   },
//   {
//     id: 12,
//     label: "MTO",
//     icon: "bx-tone",
//     subItems: [
//       {
//         id: 13,
//         label: "Material Loading",
//         link: "/pages/mto/loadingofrm",
//         parentId: 12,
//       },
//       {
//         id: 14,
//         label: "Melting",
//         link: "/pages/mto/melting",
//         parentId: 12,
//       },
//       {
//         id: 15,
//         label: "Flux Mixing",
//         link: "/pages/mto/fluxmixing",
//         parentId: 12,
//       },
//       {
//         id: 16,
//         label: "Slag Removal",
//         link: "/pages/mto/slagremoving",
//         parentId: 12,
//       },
//     ],
//   },
//   {
//     id: 17,
//     label: "MWO",
//     icon: "bx-aperture",
//     subItems: [
//       {
//         id: 18,
//         label: "Transfer to MWO",
//         link: "/pages/mwo/transfertomwo",
//         parentId: 17,
//       },
//       {
//         id: 19,
//         label: "Slag Removal",
//         link: "/pages/mwo/slagremoval",
//         parentId: 17,
//       },
//       {
//         id: 20,
//         label: "Ingots Pouring",
//         link: "/pages/mwo/ingotpouring",
//         parentId: 17,
//       },
//       {
//         id: 21,
//         label: "Buffing/Polishing",
//         link: "/pages/mwo/buffingandpolishing",
//         parentId: 17,
//       },

//       {
//         id: 22,
//         label: "Heat Number Printing",
//         link: "/pages/mwo/printing",
//         parentId: 17,
//       },
//     ],
//   },
// ];

// export const QualityMenu: MenuItem[] = [
//   {
//     id: 1,
//     label: "CONSOLE",
//     isTitle: true,
//   },
//   {
//     id: 2,
//     label: "DASHBOARD",
//     icon: "bx-bar-chart-alt",
//     subItems: [
//       {
//         id: 3,
//         label: "Quality",
//         link: "/pages/dashboard/quality",
//         parentId: 2,
//       },
//     ],
//   },
//   {
//     id: 4,
//     label: "REPORTING",
//     icon: "bx-book-open",
//     link: "/pages/reports",
//   },
//   {
//     id: 5,
//     label: "SETTINGS",
//     icon: "bx-cog",
//     subItems: [
//       {
//         id: 6,
//         label: "General",
//         link: "/pages/settings/general",
//         parentId: 5,
//       },
//     ],
//   },
//   {
//     id: 7,
//     label: "PROCESS",
//     isTitle: true,
//   },
//   {
//     id: 8,
//     label: "SCRAP MANAGEMENT",
//     icon: "bx-store",
//     subItems: [
//       {
//         id: 9,
//         label: "Inward Scrap",
//         link: "/pages/scrapmanagement/scrappurchase",
//         parentId: 8,
//       },
//       {
//         id: 10,
//         label: "Incoming Inspection",
//         link: "/pages/scrapmanagement/scrapinspection",
//         parentId: 8,
//       },
//     ],
//   },
//   {
//     id: 11,
//     label: "MTO",
//     icon: "bx-tone",
//     subItems: [
//       {
//         id: 12,
//         label: "Composition Check",
//         link: "/pages/mto/slaginspection",
//         parentId: 11,
//       },
//     ],
//   },
//   {
//     id: 13,
//     label: "MWO",
//     icon: "bx-aperture",
//     subItems: [
//       {
//         id: 14,
//         label: "Composition Check",
//         link: "/pages/mwo/mwoinspection",
//         parentId: 13,
//       },
//       {
//         id: 15,
//         label: "Visual Inspection",
//         link: "/pages/mwo/visualinspection",
//         parentId: 13,
//       },
//       {
//         id: 16,
//         label: "Final Inspection",
//         link: "/pages/mwo/finalinspection",
//         parentId: 13,
//       },
//     ],
//   },
//   {
//     id: 17,
//     label: "PACKING",
//     icon: "bx-package",
//     link: "/pages/packing/packingingots",
//   },
//   {
//     id: 18,
//     label: "DISPATCH",
//     icon: "bx-send",
//     subItems: [
//       {
//         id: 19,
//         label: "FAS",
//         link: "/pages/dispatch/fas",
//         parentId: 18,
//       },
//       {
//         id: 20,
//         label: "Certificate of Quality",
//         link: "/pages/dispatch/certquality",
//         parentId: 18,
//       },
//       {
//         id: 21,
//         label: "Final Dispatch",
//         link: "/pages/dispatch/finaldispatch",
//         parentId: 18,
//       },
//     ],
//   },
// ];
