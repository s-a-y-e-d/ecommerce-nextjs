import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

const productData: Prisma.ProductCreateInput[] = [
  {
    "id": "AC12", // LLNN pattern
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
    "slug": "black-and-gray-athletic-cotton-socks-6-pairs",
    "stock": 25,
    "description": "Comfortable and durable athletic cotton socks, perfect for sports or everyday wear. Comes in a convenient 6-pair pack with black and gray colors."
  },
  {
    "id": "BA34", // LLNN pattern
    "image": "images/products/intermediate-composite-basketball.jpg",
    "name": "Intermediate Size Basketball",
    "ratingStars": 4,
    "ratingCount": 127,
    "priceCents": 2095,
    "keywords": [
      "sports",
      "basketballs"
    ],
    "slug": "intermediate-size-basketball",
    "stock": 39,
    "description": "A durable composite leather basketball designed for intermediate players. Suitable for indoor and outdoor court surfaces."
  },
  {
    "id": "CE56", // LLNN pattern
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
    "slug": "adults-plain-cotton-t-shirt-2-pack",
    "stock": 21,
    "description": "A comfortable and breathable plain cotton t-shirt. Sold as a 2-pack, perfect for casual wear and layering."
  },
  {
    "id": "DF78", // LLNN pattern
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
    "slug": "2-slot-toaster-white",
    "stock": 33,
    "description": "Classic 2-slice toaster with extra-wide slots, adjustable browning controls, and a sleek white finish. A must-have kitchen appliance."
  },
  {
    "id": "EG90", // LLNN pattern
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
    "slug": "2-piece-white-dinner-plate-set",
    "stock": 29,
    "description": "Elegant and durable white ceramic dinner plates. This set includes two generously sized plates, ideal for everyday use or formal dining."
  },
  {
    "id": "FH13", // LLNN pattern
    "image": "images/products/3-piece-cooking-set.jpg",
    "name": "3 Piece Non-Stick, Black Cooking Pot Set",
    "ratingStars": 4.5,
    "ratingCount": 175,
    "priceCents": 3499,
    "keywords": [
      "kitchen",
      "cookware"
    ],
    "slug": "3-piece-non-stick,-black-cooking-pot-set",
    "stock": 20,
    "description": "High-quality 3-piece cooking pot set with a durable non-stick coating. Essential for various cooking styles and easy to clean."
  },
  {
    "id": "GI24", // LLNN pattern
    "image": "images/products/women-plain-cotton-oversized-sweater-gray.jpg",
    "name": "Cotton Oversized Sweater - Gray",
    "ratingStars": 4.5,
    "ratingCount": 317,
    "priceCents": 2400,
    "keywords": [
      "sweaters",
      "apparel"
    ],
    "slug": "cotton-oversized-sweater-gray",
    "stock": 31,
    "description": "A soft, oversized cotton sweater in a heather gray finish. Perfect for comfortable and casual lounging or a relaxed style."
  },
  {
    "id": "HJ45", // LLNN pattern
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
    "slug": "2-piece-luxury-towel-set-white",
    "stock": 23,
    "description": "Indulge in this plush, high-absorbency luxury towel set. Includes two large bath towels in crisp white."
  },
  {
    "id": "IK67", // LLNN pattern
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
    "slug": "ultra-soft-tissue-2-ply-8-boxes",
    "stock": 36,
    "description": "Ultra soft, 2-ply facial tissues. Ideal for allergy season and everyday use. Comes in a bulk pack of 8 boxes."
  },
  {
    "id": "JL89", // LLNN pattern
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
    "slug": "women-striped-beach-dress",
    "stock": 35,
    "description": "Lightweight and airy striped beach dress, perfect as a cover-up or for warm summer evenings. Features a comfortable, relaxed fit."
  },
  {
    "id": "KM01", // LLNN pattern
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
    "slug": "women-sandal-heels-white-pink",
    "stock": 28,
    "description": "Stylish open-toe sandal heels in a lovely pink shade. Features comfortable ankle straps and a stable heel height."
  },
  {
    "id": "LN23", // LLNN pattern
    "image": "images/products/round-sunglasses-gold.jpg",
    "name": "Round Sunglasses",
    "ratingStars": 4.5,
    "ratingCount": 30,
    "priceCents": 3560,
    "keywords": [
      "accessories",
      "shades"
    ],
    "slug": "round-sunglasses",
    "stock": 40,
    "description": "Classic round sunglasses with gold-colored frames. Provides UV protection and adds a vintage touch to any outfit."
  },
  {
    "id": "MO45", // LLNN pattern
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
    "slug": "blackout-curtains-set-beige",
    "stock": 22,
    "description": "A pair of energy-saving blackout curtains in a neutral beige. Effectively blocks light, reduces noise, and helps regulate room temperature."
  },
  {
    "id": "NP67", // LLNN pattern
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
    "slug": "women-summer-jean-shorts",
    "stock": 27,
    "description": "Classic fit women's denim shorts, perfect for summer casual outings. Features a mid-rise waist and durable jean fabric."
  },
  {
    "id": "OQ89", // LLNN pattern
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
    "slug": "electric-steel-hot-water-kettle-white",
    "stock": 38,
    "description": "Fast-boiling electric kettle with a stainless steel interior and a modern white finish. Features automatic shut-off and boil-dry protection."
  },
  {
    "id": "PR01", // LLNN pattern
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
    "slug": "knit-athletic-sneakers-gray",
    "stock": 34,
    "description": "Lightweight athletic sneakers with a waterproof knit upper. Provides comfort and support for running and training in various weather conditions."
  },
  {
    "id": "QS23", // LLNN pattern
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
    "slug": "straw-sunhat",
    "stock": 30,
    "description": "A stylish straw hat with a wide brim for maximum sun protection. The perfect accessory for the beach or garden."
  },
  {
    "id": "RT45", // LLNN pattern
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
    "slug": "men-athletic-shoes-white",
    "stock": 26,
    "description": "Classic white athletic sneakers for men. Features cushioned support and a durable outsole, ideal for gym or casual street style."
  },
  {
    "id": "SU67", // LLNN pattern
    "image": "images/products/men-stretch-wool-sweater-black.jpg",
    "name": "Men's Wool Sweater - Black",
    "ratingStars": 4.5,
    "ratingCount": 2465,
    "priceCents": 3374,
    "keywords": [
      "sweaters",
      "apparel"
    ],
    "slug": "men-stretch-wool-sweater-black",
    "stock": 37,
    "description": "Premium men's wool blend sweater in black. Offers warmth without bulk and features a comfortable stretch fit."
  },
  {
    "id": "TV89", // LLNN pattern
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
    "slug": "bathroom-mat",
    "stock": 24,
    "description": "Soft and absorbent bath mat in a neutral grey color. Measures 16 x 32 inches, providing a safe and comfortable surface outside your tub or shower."
  },
  {
    "id": "UW01", // LLNN pattern
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
    "slug": "women-knit-ballet-flat-white",
    "stock": 32,
    "description": "Comfortable and stylish women's ballet flats in a breathable white knit. Perfect for work or casual weekend wear."
  },
  {
    "id": "VX23", // LLNN pattern
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
    "slug": "men-golf-polo-t-shirt-gray",
    "stock": 25,
    "description": "A moisture-wicking golf polo shirt for men in a light gray. Designed for comfort and performance on the course or for casual events."
  },
  {
    "id": "WY45", // LLNN pattern
    "image": "images/products/laundry-detergent-tabs.jpg",
    "name": "Laundry Detergent Tabs, 50 Loads",
    "ratingStars": 4.5,
    "ratingCount": 305,
    "priceCents": 2899,
    "keywords": [
      "bathroom",
      "cleaning"
    ],
    "slug": "laundry-detergent-tabs",
    "stock": 21,
    "description": "Pre-measured, powerful laundry detergent tabs that deliver a deep clean. Contains enough tabs for 50 loads."
  },
  {
    "id": "XZ67", // LLNN pattern
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
    "slug": "sterling-silver-leaf-branch-earrings",
    "stock": 39,
    "description": "Delicate sterling silver earrings shaped like a leaf branch. A beautiful accessory for everyday elegance or a thoughtful gift."
  },
  {
    "id": "YA89", // LLNN pattern
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
    "slug": "duvet-cover-set-gray-queen",
    "stock": 33,
    "description": "Queen-size duvet cover set featuring a subtle diamond pattern. Soft, breathable fabric to enhance your bedroom decor."
  },
  {
    "id": "ZB01", // LLNN pattern
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
    "slug": "women-knit-beanie-pom-pom-blue",
    "stock": 29,
    "description": "Cozy knit winter beanie for women in a bright blue color, topped with a playful pom-pom. Keeps you warm and stylish in cold weather."
  },
  {
    "id": "AD23", // LLNN pattern
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
    "slug": "men-chino-pants-beige",
    "stock": 20,
    "description": "Versatile men's chino pants in a classic beige color. Features a comfortable straight fit, suitable for office wear or casual weekends."
  },
  {
    "id": "BF45", // LLNN pattern
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
    "slug": "men-navigator-sunglasses-black",
    "stock": 31,
    "description": "Sleek men's navigator style sunglasses with black frames and polarized lenses. Offers excellent glare reduction and a modern look."
  },
  {
    "id": "CH67", // LLNN pattern
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
    "slug": "men-brown-flat-sneakers",
    "stock": 23,
    "description": "Stylish and comfortable men's flat sneakers in a rich brown color. Perfect for a casual, smart look."
  },
  {
    "id": "DJ89", // LLNN pattern
    "image": "images/products/non-stick-cooking-set-4-pieces.jpg",
    "name": "Non-Stick Cook Set With Lids - 4 Pieces",
    "ratingStars": 4.5,
    "ratingCount": 511,
    "priceCents": 6797,
    "keywords": [
      "cooking set",
      "kitchen"
    ],
    "slug": "non-stick-cooking-set-4-pieces",
    "stock": 36,
    "description": "A comprehensive 4-piece non-stick cookware set including pots and pans, each with a matching glass lid. Essential for any kitchen."
  },
  {
    "id": "EK01", // LLNN pattern
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
    "slug": "vanity-mirror-pink",
    "stock": 35,
    "description": "A stylish tabletop vanity mirror in pink, complete with adjustable LED lights for perfect makeup application."
  },
  {
    "id": "FM23", // LLNN pattern
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
    "slug": "women-relaxed-lounge-pants-pink",
    "stock": 28,
    "description": "Incredibly soft, relaxed-fit lounge pants for women in a soothing pink shade. Designed for ultimate comfort at home."
  },
  {
    "id": "GN45", // LLNN pattern
    "image": "images/products/crystal-zirconia-stud-earrings-pink.jpg",
    "name": "Crystal Zirconia Stud Earrings - Pink",
    "ratingStars": 4.5,
    "ratingCount": 117,
    "priceCents": 3467,
    "keywords": [
      "accessories",
      "womens"
    ],
    "slug": "crystal-zirconia-stud-earrings-pink",
    "stock": 40,
    "description": "Sparkling stud earrings featuring pink crystal zirconia stones set in a durable metal. Perfect for adding a touch of color."
  },
  {
    "id": "HP67", // LLNN pattern
    "image": "images/products/glass-screw-lid-food-containers.jpg",
    "name": "Glass Screw Lid Containers - 3 Pieces",
    "ratingStars": 4,
    "ratingCount": 126,
    "priceCents": 2899,
    "keywords": [
      "food containers",
      "kitchen"
    ],
    "slug": "glass-screw-lid-food-containers",
    "stock": 22,
    "description": "Set of three glass food storage containers with airtight screw lids. Ideal for meal prep, leftovers, and safe food storage."
  },
  {
    "id": "IQ89", // LLNN pattern
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
    "slug": "black-and-silver-espresso-maker",
    "stock": 27,
    "description": "Powerful black and silver espresso maker designed to brew rich, flavorful espresso shots. A compact and stylish appliance for coffee lovers."
  },
  {
    "id": "JR01", // LLNN pattern
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
    "slug": "blackout-curtains-set-teal",
    "stock": 38,
    "description": "A set of high-quality, thermal blackout curtains in a striking teal color. Each panel measures 42 x 84 inches."
  },
  {
    "id": "KS23", // LLNN pattern
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
    "slug": "bath-towel-set-gray-rosewood",
    "stock": 34,
    "description": "Soft and highly absorbent bath towel 2-pack, featuring one towel in a classic gray and one in a beautiful rosewood shade."
  },
  {
    "id": "LT45", // LLNN pattern
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
    "slug": "athletic-skateboard-shoes-gray",
    "stock": 30,
    "description": "Durable athletic shoes designed with a flat sole for skateboarding, but versatile enough for casual everyday wear. Grey color."
  },
  {
    "id": "MU67", // LLNN pattern
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
    "slug": "countertop-push-blender-black",
    "stock": 26,
    "description": "Powerful countertop blender with simple push-button controls. Ideal for smoothies, soups, and crushing ice."
  },
  {
    "id": "NV89", // LLNN pattern
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
    "slug": "men-cozy-fleece-hoodie-light-teal",
    "stock": 37,
    "description": "Super soft and cozy fleece hoodie for men in a light teal shade. Features a front pocket and adjustable drawstring hood."
  },
  {
    "id": "OW01", // LLNN pattern
    "image": "images/products/artistic-bowl-set-6-piece.jpg",
    "name": "Artistic Bowl and Plate Set - 6 Pieces",
    "ratingStars": 5,
    "ratingCount": 679,
    "priceCents": 3899,
    "keywords": [
      "bowls set",
      "kitchen"
    ],
    "slug": "artistic-bowl-set-6-piece",
    "stock": 24,
    "description": "A unique 6-piece dinnerware set with an artistic, hand-painted look. Includes plates and bowls for four settings."
  },
  {
    "id": "PX23", // LLNN pattern
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
    "slug": "kitchen-paper-towels-8-pack",
    "stock": 32,
    "description": "Highly absorbent 2-ply kitchen paper towels. Comes in a large 8-pack for extended use and household cleanup."
  }
];

export async function main() {
  for (const u of productData) {
    await prisma.product.create({ data: u });
  }
}

main();