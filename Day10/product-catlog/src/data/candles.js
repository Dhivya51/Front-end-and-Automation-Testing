const candles = [
  {
    id: 1,
    name: "Lavender Bliss Candle",
    category: "Candles",
    price: 899,
    rating: 4.8,
    image: "https://scentsational-products.com/wp-content/uploads/2022/05/Lavender-Jar-19-oz.-burning-new-photo-real.webp",
    description: "Relaxing lavender soy wax candle."
  },
  {
    id: 2,
    name: "Vanilla Velvet Candle",
    category: "Candles",
    price: 999,
    rating: 4.7,
    image: "https://www.beaumonde.co.uk/cdn/shop/files/VelvetVanilla.jpg?v=1764958287",
    description: "Warm vanilla fragrance for cozy evenings."
  },
  {
    id: 3,
    name: "Rose Petal Candle",
    category: "Candles",
    price: 1099,
    rating: 4.9,
    image: "https://i.pinimg.com/736x/4b/a7/aa/4ba7aa485d72179f495ba29b5879daa3.jpg",
    description: "Elegant floral rose aroma."
  },
  {
    id: 4,
    name: "Ocean Breeze Candle",
    category: "Candles",
    price: 949,
    rating: 4.6,
    image: "https://i.pinimg.com/originals/ca/a7/92/caa792e16a873459861e2e6f9af57170.jpg",
    description: "Fresh ocean-inspired fragrance."
  },
  {
    id: 5,
    name: "Jasmine Bloom Candle",
    category: "Candles",
    price: 1049,
    rating: 4.8,
    image: "https://opaltrendz.com/wp-content/uploads/2025/09/opaltrendz-jasmin-bloom-lid-jar-simple-3.png",
    description: "Sweet jasmine floral fragrance."
  },
  {
    id: 6,
    name: "Amber Glow Candle",
    category: "Candles",
    price: 1299,
    rating: 5.0,
    image: "https://tse4.mm.bing.net/th/id/OIP.NIcepPUcgZ7XmuIaGcB53AHaE7?pid=Api&h=220&P=0",
    description: "Luxury amber scented candle."
  },
  {
    id: 7,
    name: "Midnight Oud Candle",
    category: "Candles",
    price: 1499,
    rating: 4.9,
    image: "https://i.pinimg.com/736x/55/ba/c9/55bac90c29f7f000c073c2f7535e113b.jpg",
    description: "Premium oud fragrance."
  },
  {
    id: 8,
    name: "Citrus Fresh Candle",
    category: "Candles",
    price: 899,
    rating: 4.5,
    image: "https://images.stockcake.com/public/c/c/4/cc464c44-f8a8-4a74-9688-7a12e5875cb2_large/citrus-scented-candle-stockcake.jpg",
    description: "Refreshing citrus aroma."
  },
  {
    id: 9,
    name: "White Musk Candle",
    category: "Candles",
    price: 1099,
    rating: 4.8,
    image: "https://www.desitassels.com/cdn/shop/files/20240615204957_IMG_4360.jpg?v=1718732464",
    description: "Soft white musk fragrance."
  },
  {
    id: 10,
    name: "Coconut Paradise Candle",
    category: "Candles",
    price: 999,
    rating: 4.6,
    image: "https://images.squarespace-cdn.com/content/v1/63e55efdc2a2227921fcef3a/b2fbb9eb-f3e3-481e-8c18-64ce0ef82dc8/coco-paradise-bath-and-body-works.jpg",
    description: "Tropical coconut aroma."
  },
  {
    id: 11,
    name: "Cinnamon Spice Candle",
    category: "Candles",
    price: 949,
    rating: 4.7,
    image: "https://www.countryhillcottage.com/wp-content/uploads/2021/11/Cinnamon_Spice_Candle-07-480x720.jpg",
    description: "Warm cinnamon fragrance."
  },
  {
    id: 12,
    name: "Peony Garden Candle",
    category: "Candles",
    price: 1149,
    rating: 4.8,
    image: "https://i.pinimg.com/originals/0c/b1/d9/0cb1d9418beca9370373b1212640a336.jpg",
    description: "Fresh blooming peony scent."
  },
  {
    id: 13,
    name: "Fresh Linen Candle",
    category: "Candles",
    price: 1049,
    rating: 4.6,
    image: "https://tse2.mm.bing.net/th/id/OIP.6_6ySUYo3Y7Vfyp9S00g5QHaHa?pid=Api&h=220&P=0",
    description: "Clean linen fragrance."
  },
  {
    id: 14,
    name: "Orchid Bloom Candle",
    category: "Candles",
    price: 1199,
    rating: 4.8,
    image: "https://cdn.notinoimg.com/social/yankee-candle/5038581128863_01-o/wild-orchid___230529.jpg",
    description: "Elegant orchid fragrance."
  },
  {
    id: 15,
    name: "Green Tea Candle",
    category: "Candles",
    price: 899,
    rating: 4.7,
    image: "https://tse2.mm.bing.net/th/id/OIP.b2coYS7I6LHsh3_E2H7-jAHaHa?pid=Api&h=220&P=0",
    description: "Refreshing green tea aroma."
  },
  {
    id: 16,
    name: "Black Orchid Candle",
    category: "Candles",
    price: 1399,
    rating: 5.0,
    image: "https://www.phynixfire.com/cdn/shop/files/Photoroom_20240404_122854.jpg?v=1712251900&width=1445",
    description: "Luxury black orchid fragrance."
  },
  {
    id: 17,
    name: "Himalayan Cedar Candle",
    category: "Candles",
    price: 1249,
    rating: 4.9,
    image: "https://osmology.com/cdn/shop/files/OSM0092_OSM0430_Osmo_Fernweh_HimalayanCedar_Group_LS_01_LO_11571308-3147-4dc1-9712-3a574827c471.png?v=1759227951&width=1200",
    description: "Rich cedarwood aroma."
  },
  {
    id: 18,
    name: "Golden Honey Candle",
    category: "Candles",
    price: 999,
    rating: 4.7,
    image: "https://www.wittystone.com/wp-content/uploads/2025/03/71fnGJ4YGmL._AC_SX679_.jpg",
    description: "Sweet honey fragrance."
  },
  {
    id: 19,
    name: "Royal Jasmine Candle",
    category: "Candles",
    price: 1299,
    rating: 4.9,
    image: "https://lamaisonegypt.com/wp-content/uploads/2025/02/Jasmine-Candle.jpg",
    description: "Premium jasmine aroma."
  },
  {
    id: 20,
    name: "Moonlight Lavender Candle",
    category: "Candles",
    price: 1099,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5a29bc4f-27b3-48c9-8a09-cb7a8dbb0adc.__CR0,0,1600,1200_PT0_SX800_V1___.jpg",
    description: "Relaxing lavender evening fragrance."
  }
];

export default candles;