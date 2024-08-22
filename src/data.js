import burgerImage from './images/burger.jpg';
import friedChickenImage from './images/friedchicken.jpg';
import friesImage from './images/friesanddippingsauce.jpg';
import pizzaImage from './images/pizza.jpg';
import pastaAlfredoImage from './images/pastaalfredo.jpg';
import caesarSaladImage from './images/caesarsalad.jpg';
import bbqRibsImage from './images/bbqribs.jpg';
import margheritaPizzaImage from './images/magheritapizza.jpg';




const meals = [
  {
    id: "m1",
    price: 16,
    title: "Burger",
    description:
      "Sink your teeth into our juicy, flame-grilled burger, crafted from premium, hand-pressed beef. Nestled in a soft, toasted bun, this burger is topped with fresh lettuce, ripe tomato, crisp pickles, and melted cheese. Add our signature sauce for an extra burst of flavor. Perfectly cooked to order!",
    image: burgerImage,
  },
  {
    id: "m2",
    price: 21,
    title: "Fried Chicken",
    description:
      "Golden-brown, perfectly seasoned, and fried to crispy perfection, our fried chicken is juicy on the inside and irresistibly crunchy on the outside. Each piece is marinated in our secret blend of spices, delivering a mouth-watering flavor that will have you coming back for more. Served hot and fresh!",
    image: friedChickenImage,
  },
  {
    id: "m3",
    price: 20,
    title: "Fries and Dipping Sauce",
    description:
      "Golden, crispy fries, perfectly seasoned and cooked to a satisfying crunch. Paired with your choice of dipping sauce, from tangy ketchup and creamy mayo to zesty garlic aioli and smoky barbecue. Whether you're enjoying them as a side or a snack, these fries are the perfect companion to any meal.",
    image: friesImage,
  },
  {
    id: "m4",
    price: 23,
    title: "Pizza",
    description:
      "Indulge in our artisanal pizza, made with hand-stretched dough, fresh ingredients, and baked to perfection in a traditional wood-fired oven. Topped with tangy tomato sauce, melted mozzarella, and your choice of premium toppings, each slice offers a perfect balance of crispy crust, gooey cheese, and rich flavors.",
    image: pizzaImage,
  },
  {
    id: "m5",
    price: 18,
    title: "Pasta Alfredo",
    description:
      "Creamy, rich, and absolutely delicious, our Pasta Alfredo is made with tender fettuccine noodles tossed in a velvety Alfredo sauce. Finished with freshly grated Parmesan cheese and a sprinkle of parsley, this dish is comfort food at its finest.",
    image: pastaAlfredoImage,
  },
  {
    id: "m6",
    price: 12,
    title: "Caesar Salad",
    description:
      "Crisp romaine lettuce, crunchy croutons, and freshly grated Parmesan cheese tossed in a creamy Caesar dressing. This classic salad is topped with tender grilled chicken breast for a light yet satisfying meal.",
    image: caesarSaladImage,
  },
  {
    id: "m7",
    price: 19,
    title: "BBQ Ribs",
    description:
      "Slow-cooked and smothered in our house-made barbecue sauce, these tender ribs are fall-off-the-bone delicious. Served with a side of coleslaw and buttery cornbread, they're a true taste of comfort and tradition.",
    image: bbqRibsImage,
  },
  {
    id: "m8",
    price: 14,
    title: "Margherita Pizza",
    description:
      "A classic Margherita pizza made with a crispy, thin crust, topped with a simple yet flavorful combination of fresh tomatoes, mozzarella cheese, and basil leaves. Drizzled with extra virgin olive oil and baked to perfection.",
    image: margheritaPizzaImage,
  },
];

export default meals;
