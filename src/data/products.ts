import type { Product } from '@/types'

export const products: Product[] = [
  {
    slug: 'date-sugar',
    name: 'Date Sugar',
    category: 'sweeteners',
    shortDescription:
      'A natural way to bring sweetness back into the kitchen using whole ground dates.',
    longDescription:
      'Keeps the fruit’s fibre and flavour, for people making more intentional food choices every day.',
    currentPackage: { label: '500g bottle', priceFcfa: 4000 },
    plannedPackage: { label: '350g pouch', priceFcfa: 2500 },
    image: { tone: 'product', label: 'Date Sugar — product placeholder' },
    gallery: [
      { tone: 'product', label: 'Date Sugar — packaging' },
      { tone: 'kitchen', label: 'Date Sugar — kitchen use' },
      { tone: 'product', label: 'Date Sugar — texture close-up' },
    ],
    story:
      'Our dad loved sweet things. After his diagnosis, meals became a struggle between taste and fear. Discovering date sugar felt like opening a window. It let us bring sweetness back using the whole fruit, with all its fibre and character. It reminded us that food can still feel comforting when health becomes serious.',
    safeBenefits: [
      'Made from whole dates, ground into a fine kitchen ready powder.',
      'Keeps the natural fibre found in the fruit.',
      'A practical option for people reducing refined sugar without losing flavour.',
      'Works in drinks, porridges, baking, and everyday recipes.',
    ],
    howToUse: [
      'Stir a spoonful into warm porridge, oats, or tea.',
      'Swap it in place of refined sugar in baking, cup for cup.',
      'Blend into smoothies for natural sweetness and texture.',
      'Sprinkle over yoghurt or fruit as a finishing touch.',
    ],
    relatedSlugs: ['turmeric', 'tigernuts'],
  },
  {
    slug: 'turmeric',
    name: 'Turmeric',
    category: 'spices',
    shortDescription:
      'A familiar kitchen ingredient used in everyday wellness routines, from warm drinks to home remedies.',
    longDescription:
      'Trusted in many homes for its place in daily cooking and comfort rituals.',
    currentPackage: { label: '500g bottle', priceFcfa: 3000 },
    plannedPackage: { label: '200g pouch', priceFcfa: 1000 },
    image: { tone: 'product', label: 'Turmeric — product placeholder' },
    gallery: [
      { tone: 'product', label: 'Turmeric — packaging' },
      { tone: 'kitchen', label: 'Turmeric — warm drink preparation' },
      { tone: 'product', label: 'Turmeric — powder close-up' },
    ],
    story:
      'Turmeric became our first reach when malaria knocked us down or when a cough refused to leave. It showed up in warm brews with lemongrass and soursop leaves, and in spoonfuls mixed with honey. Over time, it became part of our daily cooking, lending quiet colour and strength to simple meals that carried us through long seasons of stress.',
    safeBenefits: [
      'A familiar spice used in everyday cooking and warm drinks.',
      'Often included in home remedies and daily routines in many households.',
      'Adds colour, depth, and character to soups, stews, porridges, and teas.',
      'Fits easily into existing kitchen habits.',
    ],
    howToUse: [
      'Stir into warm water or milk with honey and a pinch of black pepper.',
      'Add to soups, stews, and rice for colour and depth.',
      'Blend into a warm brew with lemongrass or ginger.',
      'Use in marinades and everyday seasoning blends.',
    ],
    relatedSlugs: ['date-sugar', 'tigernuts'],
  },
  {
    slug: 'tigernuts',
    name: 'Tigernuts',
    category: 'snacks',
    shortDescription:
      'A nourishing snack for clean, steady energy during long days.',
    longDescription:
      'Grown in northern Cameroon and enjoyed by people who want more natural snacking in their routine.',
    currentPackage: { label: '500g bottle', priceFcfa: 2000 },
    plannedPackage: { label: '200g pouch', priceFcfa: 500 },
    image: { tone: 'product', label: 'Tigernuts — product placeholder' },
    gallery: [
      { tone: 'product', label: 'Tigernuts — packaging' },
      { tone: 'kitchen', label: 'Tigernuts — snacking scene' },
      { tone: 'product', label: 'Tigernuts — texture close-up' },
    ],
    story:
      'In long days where the work never seems to end, tigernuts became the quiet companion that kept us going. At a nurse’s quick break, an engineer’s long night of code, or a parent’s early morning routine, they offered a small, honest way to stay steady without reaching for heavy or sugary options. They reminded us that clean energy can come from simple things.',
    safeBenefits: [
      'Naturally rich in fibre and satisfying to chew.',
      'Enjoyed as a snack that fits into long, demanding days.',
      'A way to add more traditional plant based food into a modern routine.',
      'Can be eaten alone or paired with other foods.',
    ],
    howToUse: [
      'Enjoy straight from the bag as an everyday snack.',
      'Add to trail mixes with nuts and dried fruit.',
      'Blend into a milk or smoothie base.',
      'Pack alongside fruit for an on-the-go snack box.',
    ],
    relatedSlugs: ['date-sugar', 'turmeric'],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
