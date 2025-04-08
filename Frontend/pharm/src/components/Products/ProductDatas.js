const productsData = [
  {
    id: 1,
    name: "LACTOGEN 2 REFILL 400GM",
    subtitle: "Baby Nutrition",
    price: "₹485.00",
    img: "/images/babycare1.webp",
    description: "Lactogen 2 is a spray-dried follow-up formula for infants after 6 months. It is tailored to meet the nutritional needs of growing infants, providing essential vitamins and minerals that support digestive health, immune function, and overall growth.",
    thumbnails: [
      "/images/babythumb1.webp",
      "/images/babythumb2.webp",
      "/images/babythumb3.webp"
    ]
  },
  {
    id: 2,
    name: "NAN PRO 2 REFILL 400GM",
    subtitle: "Infant Formula",
    price: "₹485.00",
    img: "/images/womencare1.webp",
    description: "NAN PRO 2 is a follow-up formula designed for growing babies above 6 months. It contains optimized protein levels and is enriched with DHA and ARA, essential fatty acids that contribute to brain development and visual acuity.",
    thumbnails: [
      "/images/womencarethumb1.webp",
      "/images/womencarethumb2.webp",
      "/images/womencarethumb3.webp"
    ]
  },
  {
    id: 3,
    name: "CERELAC 400GM",
    subtitle: "Baby Cereal",
    price: "₹485.00",
    img: "/images/personalcare1.webp",
    description: "CERELAC is an iron-fortified infant cereal for babies above 6 months. It provides essential nutrients like iron and vitamins that support cognitive development and physical growth, ensuring your baby gets a good start in life.",
    thumbnails: [
      "/images/personalcarethumb1.webp",
      "/images/personalcarethumb2.webp",
      "/images/personalcarethumb3.webp"
    ]
  },
  {
    id: 4,
    name: "CERELAC 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/babycare2.webp",
    description: "CERELAC provides essential nutrients for baby's healthy growth. This wholesome baby food is made with carefully selected grains and can be mixed with warm water or milk to create a delicious and nutritious meal tailored to your baby.",
    thumbnails: [
      "/images/babycarethumb4.webp",
      "/images/babycarethumb5.webp",
      "/images/babycarethumb6.webp"
    ]
  },
  {
    id: 5,
    name: "LACTOGEN 2 REFILL 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/babycare8.webp",
    description: "LACTOGEN 2 is formulated to meet the growing nutritional needs of your baby after 6 months. It contains a unique blend of nutrients that support healthy digestion and strengthen the immune system, ensuring your baby thrives.",
    thumbnails: [
      "/images/babycarethumb7.webp",
      "/images/babycarethumb8.webp",
      "/images/babycarethumb9.webp"
    ]
  },
  {
    id: 6,
    name: "NAN PRO 2 REFILL 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/babycare9.webp",
    description: "NAN PRO 2 is designed for growing infants and includes essential nutrients that aid in developing physical and mental capabilities. Fortified with prebiotics, it promotes a healthy gut flora for digestion.",
    thumbnails: [
      "/images/babycarethumb10.webp",
      "/images/babycarethumb11.webp",
      "/images/babycarethumb12.webp"
    ]
  },
  {
    id: 7,
    name: "CERELAC 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/babycare3.webp",
    description: "CERELAC is not just a meal; it’s a source of well-balanced nutrition. Enriched with valuable vitamins and minerals, it offers a genuine taste of homemade nourishment for your child.",
    thumbnails: [
      "/images/babythumb13.webp",
      "/images/babythumb14.webp",
      "/images/babythumb15.webp"
    ]
  },
  {
    id: 8,
    name: "CERELAC 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/womencare5.webp",
    description: "This CERELAC variant provides a smooth and delightful blend that is easy to digest for your little one. Perfect for introducing your baby to solid foods, packed with nutrients for healthy development.",
    thumbnails: [
      "/images/womencarethumb4.webp",
      "/images/womencarethumb5.webp",
      "/images/womencarethumb6.webp"
    ]
  },
  {
    id: 9,
    name: "CERELAC 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/personalcare5.webp",
    description: "CERELAC is carefully crafted to suit the delicate palate of babies. With essential nutrients like iron and vitamins, it's the perfect introduction to solid foods that provide energy and nourishment.",
    thumbnails: [
      "/images/personalcarethumb4.webp",
      "/images/personalcarethumb5.webp",
      "/images/personalcarethumb6.webp"
    ]
  },
  {
    id: 10,
    name: "CERELAC 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/personalcare2.webp",
    description: "CERELAC makes mealtime enjoyable for your baby. With its rich taste and nutritional value, it helps in building a strong foundation for lifelong healthy eating habits.",
    thumbnails: [
      "/images/personalcarethumb7.webp",
      "/images/personalcarethumb8.webp",
      "/images/personalcarethumb9.webp"
    ]
  },
  {
    id: 11,
    name: "CERELAC 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/womencare7.webp",
    description: "Rich in essential vitamins and minerals, CERELAC ensures that your baby is getting the right nutrients for optimal growth and development at every meal.",
    thumbnails: [
      "/images/womencarethumb7.webp",
      "/images/womencarethumb8.webp",
      "/images/womencarethumb9.webp"
    ]
  },
  {
    id: 12,
    name: "CERELAC 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/womencare2.webp",
    description: "Introducing CERELAC as part of a well-balanced diet offers a variety of nutrients essential for holistic growth and development, ensuring your baby stays active and healthy.",
    thumbnails: [
      "/images/womencarethumb12.webp",
      "/images/womencarethumb13.webp",
      "/images/womencarethumb14.webp"
    ]
  },
  {
    id: 13,
    name: "CERELAC 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/babycare4.webp",
    description: "CERELAC stands out as a trusted option for parents looking to give their babies a nutritious meal. Its iron content supports cognitive function, while its taste ensures that babies enjoy their meals.",
    thumbnails: [
      "/images/babycarethumb13.webp",
      "/images/babycarethumb14.webp",
      "/images/babycarethumb15.webp"
    ]
  },
  {
    id: 14,
    name: "CERELAC 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/babycare5.webp",
    description: "With its soft texture, CERELAC is perfect for transitioning your baby to solid foods. It provides a variety of essential nutrients to promote healthy growth during this critical stage.",
    thumbnails: [
      "/images/babycarethumb16.webp",
      "/images/babycarethumb17.webp",
      "/images/babycarethumb18.webp"
    ]
  },
  {
    id: 15,
    name: "CERELAC 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/babycare6.webp",
    description: "CERELAC is an ideal choice for parents seeking nutritious and wholesome meals for their babies. Packed with vitamins, it ensures every bite contributes to your baby's overall health.",
    thumbnails: [
      "/images/babycarethumb19.webp",
      "/images/babycarethumb20.webp",
      "/images/babycarethumb21.webp"
    ]
  },
  {
    id: 16,
    name: "CERELAC 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/womencare6.webp",
    description: "CERELAC is specially formulated to meet the dietary needs of infants. With a balanced mix of nutrients, it supports growth in a fun and tasty way, making it a must-have for every baby.",
    thumbnails: [
      "/images/womencarethumb10.webp",
      "/images/womencarethumb11.webp",
      "/images/womencarethumb15.webp"
    ]
  },
  {
    id: 17,
    name: "CERELAC 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/personalcare3.webp",
    description: "Designing a healthy future starts with the right nutrition. CERELAC delivers essential ingredients to promote growth and development while catering to your baby's taste preferences.",
    thumbnails: [
      "/images/personalcarethumb10.webp",
      "/images/personalcarethumb11.webp",
      "/images/personalcarethumb12.webp"
    ]
  },
  {
    id: 18,
    name: "CERELAC 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/personalcare4.webp",
    description: "With CERELAC, you ensure that your baby receives adequate amounts of key nutrients, essential for mental and physical development during the formative years.",
    thumbnails: [
      "/images/personalcarethumb13.webp",
      "/images/personalcarethumb14.webp",
      "/images/personalcarethumb15.webp"
    ]
  },
  {
    id: 19,
    name: "CERELAC 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/womencare3.webp",
    description: "Enjoy the peace of mind that comes from serving your baby a meal that is not only nutritious but also delicious. CERELAC ensures that babies get their daily vitamin intake in a fun and appetizing way.",
    thumbnails: [
      "/images/womencarethumb16.webp",
      "/images/womencarethumb17.webp",
      "/images/womencarethumb18.webp"
    ]
  },
  {
    id: 20,
    name: "CERELAC 400GM",
    subtitle: "Healthy Baby Food",
    price: "₹485.00",
    img: "/images/womencare4.webp",
    description: "CERELAC is a healthy meal option for babies transitioning to solids. Carefully formulated with top-quality ingredients, it’s designed to provide a smooth and easy eating experience while delivering essential nutrients.",
    thumbnails: [
      "/images/womencarethumb19.webp",
      "/images/womencarethumb20.webp",
      "/images/womencarethumb21.webp"
    ]
  },
];

export default productsData;