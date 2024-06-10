export interface SubItem {
  title: string;
  subItems?: SubItem[];
}

export interface MenuItem {
  title: string;
  subItems: SubItem[];
}

const menuData: MenuItem[] = [
  {
    title: "Metiers",
    subItems: [
      {
        title: "Designer",
        subItems: [
          { title: "3D et animation" },
          { title: "Comception graphique et illustration" },
          { title: "Outils de conception" },
          { title: "Conception Web" },
          { title: "Conception d'une experience utilisateur " },
          { title: "Conception des jeux" },
          { title: "Conception-Divers" },
          { title: "Design architectural" },
          { title: "Decoration interieure" },
        ],
      },
      {
        title: "Marketeur",
        subItems: [
          { title: "Marketing digital" },
          { title: "Marketing publicitaire" },
          { title: "Marketing en ligne" },
          { title: "Marketing social" },
          { title: "Marketing web" },
          { title: "Marketing-Divers" },
        ],
      },
      {
        title: "Photographer",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
      {
        title: "Comptable",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
      {
        title: "Langues",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
      {
        title: "Bureutique",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
      {
        title: "Business & Management",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
      {
        title: "Developpement personnel",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
      {
        title: "Informatique & Logiciel",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
      {
        title: "Sante et Bien etre",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
    ],
  },

  {
    title: "Langues",
    subItems: [
      {
        title: "Francais",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
      {
        title: "Anglais",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
      {
        title: "Chinese",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
      {
        title: "Arabic",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
    ],
  },

  {
    title: "Logiciels",
    subItems: [
      {
        title: "Soon",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
      {
        title: "Soon",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
      {
        title: "Soon",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
      {
        title: "Comptable",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
      {
        title: "Langues",
        subItems: [
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
          { title: "soon" },
        ],
      },
    ],
  },
];

export default menuData;
