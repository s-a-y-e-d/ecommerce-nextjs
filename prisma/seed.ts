import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

const productData: Prisma.ProductCreateInput[] = [
  {
    "image": "images/products/athletic-cotton-socks-6-pairs.jpg",
    "name": "Black and Gray Athletic Cotton Socks - 6 Pairs",
    "ratingStars": 4.5,
    "ratingCount": 87,
    "priceCents": 1090,
    "keywords": [
      "socks",
      "sports",
      "apparel"
    ],
    "slug": "black-and-gray-athletic-cotton-socks-6-pairs"
  },
  {
    "image": "images/products/intermediate-composite-basketball.jpg",
    "name": "Intermediate Size Basketball",
    "ratingStars": 4,
    "ratingCount": 127,
    "priceCents": 2095,
    "keywords": [
      "sports",
      "basketballs"
    ],
    "slug": "intermediate-size-basketball"
  },
  {
    "image": "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    "name": "Adults Plain Cotton T-Shirt - 2 Pack",
    "ratingStars": 4.5,
    "ratingCount": 56,
    "priceCents": 799,
    "keywords": [
      "tshirts",
      "apparel",
      "mens"
    ],
    "slug": "adults-plain-cotton-t-shirt-2-pack"
  },
  {
    "image": "images/products/2-slot-toaster-white.jpg",
    "name": "2 Slot Toaster - White",
    "ratingStars": 5,
    "ratingCount": 2197,
    "priceCents": 1899,
    "keywords": [
      "toaster",
      "kitchen",
      "appliances"
    ],
    "slug": "2-slot-toaster-white"
  },
  {
    "image": "images/products/elegant-white-dinner-plate-set.jpg",
    "name": "2 Piece White Dinner Plate Set",
    "ratingStars": 4,
    "ratingCount": 37,
    "priceCents": 2067,
    "keywords": [
      "plates",
      "kitchen",
      "dining"
    ],
    "slug": "2-piece-white-dinner-plate-set"
  },
  {
    "image": "images/products/3-piece-cooking-set.jpg",
    "name": "3 Piece Non-Stick, Black Cooking Pot Set",
    "ratingStars": 4.5,
    "ratingCount": 175,
    "priceCents": 3499,
    "keywords": [
      "kitchen",
      "cookware"
    ],
    "slug": "3-piece-non-stick,-black-cooking-pot-set"
  },
  {
    "image": "images/products/women-plain-cotton-oversized-sweater-gray.jpg",
    "name": "Cotton Oversized Sweater - Gray",
    "ratingStars": 4.5,
    "ratingCount": 317,
    "priceCents": 2400,
    "keywords": [
      "sweaters",
      "apparel"
    ],
    "slug": "cotton-oversized-sweater-gray"
  },
  {
    "image": "images/products/luxury-towel-set.jpg",
    "name": "2 Piece Luxury Towel Set - White",
    "ratingStars": 4.5,
    "ratingCount": 144,
    "priceCents": 3599,
    "keywords": [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ],
    "slug": "2-piece-luxury-towel-set-white"
  },
  {
    "image": "images/products/facial-tissue-2-ply-8-boxes.jpg",
    "name": "Ultra Soft Tissue 2-Ply - 8 Boxes",
    "ratingStars": 4,
    "ratingCount": 99,
    "priceCents": 2374,
    "keywords": [
      "kleenex",
      "tissues",
      "kitchen",
      "napkins"
    ],
    "slug": "ultra-soft-tissue-2-ply-8-boxes"
  },
  {
    "image": "images/products/women-striped-beach-dress.jpg",
    "name": "Women's Striped Beach Dress",
    "ratingStars": 4.5,
    "ratingCount": 235,
    "priceCents": 2970,
    "keywords": [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    "slug": "women's-striped-beach-dress"
  },
  {
    "image": "images/products/women-sandal-heels-white-pink.jpg",
    "name": "Women's Sandal Heels - Pink",
    "ratingStars": 4.5,
    "ratingCount": 2286,
    "priceCents": 5300,
    "keywords": [
      "womens",
      "shoes",
      "heels",
      "sandals"
    ],
    "slug": "women's-sandal-heels-pink"
  },
  {
    "image": "images/products/round-sunglasses-gold.jpg",
    "name": "Round Sunglasses",
    "ratingStars": 4.5,
    "ratingCount": 30,
    "priceCents": 3560,
    "keywords": [
      "accessories",
      "shades"
    ],
    "slug": "round-sunglasses"
  },
  {
    "image": "images/products/blackout-curtain-set-beige.jpg",
    "name": "Blackout Curtains Set - Beige",
    "ratingStars": 4.5,
    "ratingCount": 232,
    "priceCents": 4599,
    "keywords": [
      "bedroom",
      "curtains",
      "home"
    ],
    "slug": "blackout-curtains-set-beige"
  },
  {
    "image": "images/products/women-summer-jean-shorts.jpg",
    "name": "Women's Summer Jean Shorts",
    "ratingStars": 4,
    "ratingCount": 160,
    "priceCents": 1699,
    "keywords": [
      "shorts",
      "apparel",
      "womens"
    ],
    "slug": "women's-summer-jean-shorts"
  },
  {
    "image": "images/products/electric-steel-hot-water-kettle-white.jpg",
    "name": "Electric Hot Water Kettle - White",
    "ratingStars": 5,
    "ratingCount": 846,
    "priceCents": 5074,
    "keywords": [
      "water kettle",
      "appliances",
      "kitchen"
    ],
    "slug": "electric-hot-water-kettle-white"
  },
  {
    "image": "images/products/knit-athletic-sneakers-gray.jpg",
    "name": "Waterproof Knit Athletic Sneakers - Gray",
    "ratingStars": 4,
    "ratingCount": 89,
    "priceCents": 5390,
    "keywords": [
      "shoes",
      "running shoes",
      "footwear"
    ],
    "slug": "waterproof-knit-athletic-sneakers-gray"
  },
  {
    "image": "images/products/straw-sunhat.jpg",
    "name": "Straw Wide Brim Sun Hat",
    "ratingStars": 4,
    "ratingCount": 215,
    "priceCents": 2200,
    "keywords": [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ],
    "slug": "straw-wide-brim-sun-hat"
  },
  {
    "image": "images/products/men-athletic-shoes-white.jpg",
    "name": "Men's Athletic Sneaker - White",
    "ratingStars": 4,
    "ratingCount": 229,
    "priceCents": 4590,
    "keywords": [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ],
    "slug": "men's-athletic-sneaker-white"
  },
  {
    "image": "images/products/men-stretch-wool-sweater-black.jpg",
    "name": "Men's Wool Sweater - Black",
    "ratingStars": 4.5,
    "ratingCount": 2465,
    "priceCents": 3374,
    "keywords": [
      "sweaters",
      "apparel"
    ],
    "slug": "men's-wool-sweater-black"
  },
  {
    "image": "images/products/bathroom-mat.jpg",
    "name": "Bathroom Bath Mat 16 x 32 Inch - Grey",
    "ratingStars": 4.5,
    "ratingCount": 119,
    "priceCents": 1850,
    "keywords": [
      "bathmat",
      "bathroom",
      "home"
    ],
    "slug": "bathroom-bath-mat-16-x-32-inch-grey"
  },
  {
    "image": "images/products/women-knit-ballet-flat-white.jpg",
    "name": "Women's Ballet Flat - White",
    "ratingStars": 4,
    "ratingCount": 326,
    "priceCents": 2640,
    "keywords": [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ],
    "slug": "women's-ballet-flat-white"
  },
  {
    "image": "images/products/men-golf-polo-t-shirt-gray.jpg",
    "name": "Men's Golf Polo Shirt - Gray",
    "ratingStars": 4.5,
    "ratingCount": 2556,
    "priceCents": 1599,
    "keywords": [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    "slug": "men's-golf-polo-shirt-gray"
  },
  {
    "image": "images/products/laundry-detergent-tabs.jpg",
    "name": "Laundry Detergent Tabs, 50 Loads",
    "ratingStars": 4.5,
    "ratingCount": 305,
    "priceCents": 2899,
    "keywords": [
      "bathroom",
      "cleaning"
    ],
    "slug": "laundry-detergent-tabs,-50-loads"
  },
  {
    "image": "images/products/sky-leaf-branch-earrings.jpg",
    "name": "Sterling Silver Leaf Branch Earrings",
    "ratingStars": 4.5,
    "ratingCount": 52,
    "priceCents": 6799,
    "keywords": [
      "jewelry",
      "accessories",
      "womens"
    ],
    "slug": "sterling-silver-leaf-branch-earrings"
  },
  {
    "image": "images/products/duvet-cover-set-gray-queen.jpg",
    "name": "Duvet Cover Set, Diamond Pattern",
    "ratingStars": 4,
    "ratingCount": 456,
    "priceCents": 4399,
    "keywords": [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ],
    "slug": "duvet-cover-set,-diamond-pattern"
  },
  {
    "image": "images/products/women-knit-beanie-pom-pom-blue.jpg",
    "name": "Women's Knit Winter Beanie - Blue",
    "ratingStars": 5,
    "ratingCount": 83,
    "priceCents": 1950,
    "keywords": [
      "hats",
      "winter hats",
      "beanies",
      "apparel",
      "womens"
    ],
    "slug": "women's-knit-winter-beanie-blue"
  },
  {
    "image": "images/products/men-chino-pants-beige.jpg",
    "name": "Men's Chino Pants - Beige",
    "ratingStars": 4.5,
    "ratingCount": 9017,
    "priceCents": 2290,
    "keywords": [
      "pants",
      "apparel",
      "mens"
    ],
    "slug": "men's-chino-pants-beige"
  },
  {
    "image": "images/products/men-navigator-sunglasses-black.jpg",
    "name": "Men's Navigator Sunglasses",
    "ratingStars": 3.5,
    "ratingCount": 42,
    "priceCents": 3690,
    "keywords": [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ],
    "slug": "men's-navigator-sunglasses"
  },
  {
    "image": "images/products/men-brown-flat-sneakers.jpg",
    "name": "Men's Brown Flat Sneakers",
    "ratingStars": 4.5,
    "ratingCount": 562,
    "priceCents": 2499,
    "keywords": [
      "footwear",
      "men",
      "sneakers"
    ],
    "slug": "men's-brown-flat-sneakers"
  },
  {
    "image": "images/products/non-stick-cooking-set-4-pieces.jpg",
    "name": "Non-Stick Cook Set With Lids - 4 Pieces",
    "ratingStars": 4.5,
    "ratingCount": 511,
    "priceCents": 6797,
    "keywords": [
      "cooking set",
      "kitchen"
    ],
    "slug": "non-stick-cook-set-with-lids-4-pieces"
  },
  {
    "image": "images/products/vanity-mirror-pink.jpg",
    "name": "Vanity Mirror with LED Lights - Pink",
    "ratingStars": 4.5,
    "ratingCount": 130,
    "priceCents": 2549,
    "keywords": [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ],
    "slug": "vanity-mirror-with-led-lights-pink"
  },
  {
    "image": "images/products/women-relaxed-lounge-pants-pink.jpg",
    "name": "Women's Relaxed Lounge Pants - Pink",
    "ratingStars": 4.5,
    "ratingCount": 248,
    "priceCents": 3400,
    "keywords": [
      "pants",
      "apparel",
      "womens"
    ],
    "slug": "women's-relaxed-lounge-pants-pink"
  },
  {
    "image": "images/products/crystal-zirconia-stud-earrings-pink.jpg",
    "name": "Crystal Zirconia Stud Earrings - Pink",
    "ratingStars": 4.5,
    "ratingCount": 117,
    "priceCents": 3467,
    "keywords": [
      "accessories",
      "womens"
    ],
    "slug": "crystal-zirconia-stud-earrings-pink"
  },
  {
    "image": "images/products/glass-screw-lid-food-containers.jpg",
    "name": "Glass Screw Lid Containers - 3 Pieces",
    "ratingStars": 4,
    "ratingCount": 126,
    "priceCents": 2899,
    "keywords": [
      "food containers",
      "kitchen"
    ],
    "slug": "glass-screw-lid-containers-3-pieces"
  },
  {
    "image": "images/products/black-and-silver-espresso-maker.jpg",
    "name": "Black and Silver Espresso Maker",
    "ratingStars": 4.5,
    "ratingCount": 1211,
    "priceCents": 8250,
    "keywords": [
      "espresso makers",
      "kitchen",
      "appliances"
    ],
    "slug": "black-and-silver-espresso-maker"
  },
  {
    "image": "images/products/blackout-curtains-set-teal.jpg",
    "name": "Blackout Curtains Set 42 x 84-Inch - Teal",
    "ratingStars": 4.5,
    "ratingCount": 363,
    "priceCents": 3099,
    "keywords": [
      "bedroom",
      "home",
      "curtains"
    ],
    "slug": "blackout-curtains-set-42-x-84-inch-teal"
  },
  {
    "image": "images/products/bath-towel-set-gray-rosewood.jpg",
    "name": "Bath Towels 2 Pack - Gray, Rosewood",
    "ratingStars": 4.5,
    "ratingCount": 93,
    "priceCents": 2990,
    "keywords": [
      "bathroom",
      "home",
      "towels"
    ],
    "slug": "bath-towels-2-pack-gray,-rosewood"
  },
  {
    "image": "images/products/athletic-skateboard-shoes-gray.jpg",
    "name": "Athletic Skateboard Shoes - Gray",
    "ratingStars": 4,
    "ratingCount": 89,
    "priceCents": 3390,
    "keywords": [
      "shoes",
      "running shoes",
      "footwear"
    ],
    "slug": "athletic-skateboard-shoes-gray"
  },
  {
    "image": "images/products/countertop-push-blender-black.jpg",
    "name": "Countertop Push Blender - Black",
    "ratingStars": 4,
    "ratingCount": 3,
    "priceCents": 10747,
    "keywords": [
      "food blenders",
      "kitchen",
      "appliances"
    ],
    "slug": "countertop-push-blender-black"
  },
  {
    "image": "images/products/men-cozy-fleece-hoodie-light-teal.jpg",
    "name": "Men's Fleece Hoodie - Light Teal",
    "ratingStars": 4.5,
    "ratingCount": 3157,
    "priceCents": 3800,
    "keywords": [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ],
    "slug": "men's-fleece-hoodie-light-teal"
  },
  {
    "image": "images/products/artistic-bowl-set-6-piece.jpg",
    "name": "Artistic Bowl and Plate Set - 6 Pieces",
    "ratingStars": 5,
    "ratingCount": 679,
    "priceCents": 3899,
    "keywords": [
      "bowls set",
      "kitchen"
    ],
    "slug": "artistic-bowl-and-plate-set-6-pieces"
  },
  {
    "image": "images/products/kitchen-paper-towels-8-pack.jpg",
    "name": "2-Ply Kitchen Paper Towels - 8 Pack",
    "ratingStars": 4.5,
    "ratingCount": 1045,
    "priceCents": 1899,
    "keywords": [
      "kitchen",
      "kitchen towels",
      "tissues"
    ],
    "slug": "2-ply-kitchen-paper-towels-8-pack"
  }
];

export async function main() {
  for (const u of productData) {
    await prisma.product.create({ data: u });
  }
}

main();