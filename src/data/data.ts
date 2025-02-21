export type MenuCategory = "breakfast" | "lunch" | "dinner" | "brunch";

export type MenuItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
};

export const menuItems: Record<MenuCategory, MenuItem[]> = {
  breakfast: [
    {
      id: 101,
      title: "Pancakes",
      description: "Fluffy pancakes topped with maple syrup.",
      price: 1677,
      image: "/food/pancake.png",
      isPopular: true,
    },
    {
      id: 102,
      title: "Omelette",
      description: "Egg omelette with cheese and veggies.",
      price: 1817,
      image: "/food/Omelette.png",
    },
    {
      id: 103,
      title: "French Toast",
      description: "Sweet French toast topped with fresh fruits.",
      price: 1957,
      image: "/food/French_Toast.png",
      isPopular: true,
    },
    {
      id: 104,
      title: "Omelette",
      description: "Egg omelette with cheese and veggies.",
      price: 1817,
      image: "/food/Omelette.png",
    },
    {
      id: 105,
      title: "French Toast",
      description: "Sweet French toast topped with fresh fruits.",
      price: 1957,
      image: "/food/French_Toast.png",
      isPopular: true,
    },
  ],
  lunch: [
    {
      id: 201,
      title: "Burger",
      description: "Juicy beef burger with crispy fries.",
      price: 2797,
      image: "/food/burger.png",
      isPopular: true,
    },
    {
      id: 202,
      title: "Caesar Salad",
      description: "Classic Caesar with fresh romaine lettuce.",
      price: 2377,
      image: "/food/caesar-salad.png",
    },
    {
      id: 203,
      title: "Grilled Sandwich",
      description: "Grilled chicken sandwich with melted cheese.",
      price: 2517,
      image: "/food/caesar-salad.png",
    },
  ],
  dinner: [
    {
      id: 301,
      title: "Steak",
      description: "Grilled steak with garlic butter.",
      price: 4197,
      image: "/food/steak.png",
      isPopular: true,
    },
    {
      id: 302,
      title: "Pasta",
      description: "Creamy Alfredo pasta topped with herbs.",
      price: 3497,
      image: "/food/pasta.png",
    },
    {
      id: 303,
      title: "Grilled Salmon",
      description: "Fresh salmon fillet served with veggies.",
      price: 4477,
      image: "/food/pasta.png",
    },
  ],
  brunch: [
    {
      id: 401,
      title: "Avocado Toast",
      description: "Toasted bread topped with smashed avocado.",
      price: 2237,
      image: "/food/Avocado_Toast.png",
    },
    {
      id: 402,
      title: "French Toast",
      description: "Sweet French toast with powdered sugar.",
      price: 2517,
      image: "/food/French_Toast.png",
      isPopular: true,
    },
    {
      id: 403,
      title: "Egg Benedict",
      description: "Poached eggs served on toasted muffins.",
      price: 2657,
      image: "/food/French_Toast.png",
    },
  ],
};

export const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Simply browse our menu, add your favorite items to the cart, and proceed to checkout. Follow the on-screen instructions to complete your order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, cash on delivery, and various digital wallets like Easypaisa and JazzCash.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes! Once your order is placed, you’ll receive a tracking link to monitor your delivery status in real-time.",
  },
  {
    question: "Do you offer contactless delivery?",
    answer:
      "Absolutely! You can select 'Contactless Delivery' at checkout to ensure a safe and hygienic drop-off.",
  },
  {
    question: "Can I schedule my order for a later time?",
    answer:
      "Yes, you can schedule your delivery for a preferred time during checkout.",
  },
  {
    question: "What should I do if I receive an incorrect order?",
    answer:
      "We apologize for any inconvenience. Please contact our support team within 30 minutes of delivery, and we’ll resolve the issue promptly.",
  },
  {
    question: "Is there a minimum order amount?",
    answer:
      "Yes, the minimum order value is PKR 500. Delivery charges may apply depending on your location.",
  },
  {
    question: "How can I cancel or modify my order?",
    answer:
      "You can cancel or modify your order within 5 minutes of placing it by contacting our customer support.",
  },
];

export const testimonials = [
  {
    name: "Ayesha Khan",
    content:
      "The food was delivered hot and fresh! The app is super easy to use and the delivery was on time. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ali Raza",
    content:
      "I love how simple it is to order from here. The deals are great, and the delivery team is always polite.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Sara Ahmed",
    content:
      "Delicious food and super quick delivery. Plus, the tracking feature kept me updated the whole time. 5 stars!",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Usman Tariq",
    content:
      "I ordered for a family gathering, and everything was perfect. From presentation to taste, 10/10 experience!",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Zara Sheikh",
    content:
      "Best food ordering platform I’ve used so far. Smooth process and the food always arrives on time.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
];
