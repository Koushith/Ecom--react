import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Women',
    description: 'literature in the form of prose, especially novels, that describes imaginary events and people',
    categoryImage:
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11024466/2022/3/9/e98215db-0d3b-4917-b561-202d123cb7451646804225144-Athena-Women-Rose-Solid-Sheath-Dress-621646804224987-6.jpg',
  },
  {
    _id: uuid(),
    categoryName: 'Men',
    description: 'Non-fiction is writing that gives information or describes real events, rather than telling a story.',
    categoryImage:
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11889120/2020/5/28/b74b650f-a321-4b1f-bd27-108614006c041590656156603HIGHLANDERMenNavyBlueWhiteSlimFitPrintedCasualShirt1.jpg',
  },
  {
    _id: uuid(),
    categoryName: 'Jackets',
    description:
      'Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.',
    categoryImage:
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15136130/2022/2/7/b0ce12c1-0c5b-49db-bf12-5dbc02bf290c1644234894609-INVICTUS-Men-Jackets-8461644234893878-1.jpg',
  },
  {
    _id: uuid(),
    categoryName: 'Shoes',
    description:
      'Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.',
    categoryImage:
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16242576/2022/2/1/bcea7df2-6453-49bd-bda3-7fc6c823ce571643659140213ElPasoMenTanFlatBoots1.jpg',
  },
];
