import React from "react";

const items1 = [
  {
    name: "TIRAMISU'",
    description:
      "a Tuscan style trifle w/ mascarpone,\nespresso coffee, strega & marsala liquored sponge",
    price: 15.0,
  },
  {
    name: "NUTELLA PIZZA",
    description:
      "wood-fired pizza base smothered\nw/ Nutella and fresh strawberries (add ice-cream $2)",
    price: 15.0,
  },
  {
    name: "SICILIAN CANNOLI",
    description:
      "a cannoli shell filled w/\nchocolate-ricotta & pistacchio-ricotta",
    price: 6.0,
  },
];
const items2 = [
  {
    name: "GAMBERI ALL'AGLIO",
    description:
      "grilled prawns w/ garlic, chilli & white wine served w/ pane di casa bread\u00a0",
    price: 28.0,
  },
  {
    name: "POLPETTE DI CARNE ",
    description:
      "Italian meatballs in a thick Napoli\nsauce served w/ pane di casa bread",
    price: 21.0,
  },
  {
    name: "ARANCINI DI RISO",
    description:
      "rice balls, filled w/ cheese &\nBolognese sauce, crumbed & fried",
    price: 21.0,
  },
  {
    name: "CALAMARI ALLA GRIGLIA ",
    description:
      "shallow fried calamari served w/ a\nfennel, orange & rocket salad w/ vinaigrette",
    price: 25.0,
  },
  {
    name: "INSALATA DI VITELLO",
    description:
      "tender eye fillet, grilled &\nserved on a gourmet salad w/ honey soy dressing",
    price: 30.0,
  },
  {
    name: "CALAMARI ALLA GRIGLIA",
    description:
      "seasoned tender grilled\ncalamari served on a continental salad w/ olive oil &\nbalsamic vinegar",
    price: 27.0,
  },
];

const items3 = [
  {
    name: "PATATINE",
    description:
      "Thick cut potato chips served w/\nrelish, aioli, tomato, chipolte or mayo",
    price: 10.0,
  },
  {
    name: "PATATE ARROSTITE",
    description: "Italian roasted potatoes w/\nsea salt and rosemary",
    price: 12.0,
  },
  {
    name: "INSALATA MISTA",
    description:
      "mixed lettuce, cherry tomatoes,\ncucumber, red onion & vinaigrette dressing",
    price: 16.0,
  },
  {
    name: "INSALATA DI RUCOLA",
    description:
      "rocket, walnuts, shaved\nparmesan, balsamic vinegar & olive oil",
    price: 17.0,
  },
  {
    name: "VERDURE DI STAGIONE",
    description: "seasonal steamed veggies",
    price: 15.0,
  },
];

const items4 = [
  {
    name: "FOCACCIA AGLIO E OLIO",
    description: "garlic, mozzrella cheese,\nolive oil, sea salt & rosemary",
    price: 13.0,
  },
  {
    name: "MARGHERITA",
    description: "tomato sauce, mozzarella cheese, fresh\nbasil & olive oil",
    price: 21.0,
  },
  {
    name: "PROSCIUTTO E RUCOLA",
    description:
      "tomato sauce, mozzarella,\nprosciutto, rocket, parmesan cheese & olive oil",
    price: 29.0,
  },
  {
    name: "POLLO E ZUCCA",
    description:
      "tomato, sauce, mozzarella, roasted\nchicken, pumpkin, spinach, pine nuts & olive oil",
    price: 27.0,
  },
  {
    name: "DIAVOLA",
    description: "tomato, mozzarella, hot salami & fresh basil",
    price: 23.0,
  },
  {
    name: "CAPRICCIOSA",
    description:
      "tomato sauce, mozzarella, ham,\nmushrooms, hot salami, olives & fresh oregano",
    price: 28.0,
  },
  {
    name: "GIARDINIERA",
    description:
      "tomato sauce, mozzarella, zucchini,\neggplant, cherry tomatoes, red onion, basil & parmesan",
    price: 26.0,
  },
  {
    name: "SALSICCIA",
    description:
      "tomato sauce, mozzarella, Italian pork &\nfennel sausage & chilli",
    price: 26.0,
  },
  {
    name: "NAPOLETANA",
    description:
      "tomato sauce, mozzarella, olives,\ncherry tomatoes, capers, anchovies & oregano",
    price: 25.0,
  },
  {
    name: "AMALFI",
    description: "tomato sauce, mozzarella, prawns, garlic &\ncherry tomatoes",
    price: 30.0,
  },
];

const items5 = [
  {
    name: "LINGUINE ALLO SCOGLIO",
    description:
      "prawns, calamari, scallops,\nmussels, cherry tomatoes, garlic, olive oil & Napoli sauce",
    price: 32.0,
  },
  {
    name: "SPAGHETTI ALLA CARBONARA",
    description: "pancetta, egg,\nparmesan, pecorino cheese & a touch of cream",
    price: 29.0,
  },
  {
    name: "GNOCCHI AL POMODORO",
    description: "potato gnocchi in a rich\nNapoli sauce w/ fresh basil",
    price: 29.0,
  },
  {
    name: "SPAGHETTI CON POLPETTE",
    description:
      "spaghetti w/ traditional\nItalian meatballs in a Napoli sauce",
    price: 29.0,
  },
  {
    name: "RIGATONI ALLA BOLOGNESE",
    description: "pasta in a traditional\nItalian Bolognese sauce",
    price: 28.0,
  },
  {
    name: "PENNE ALL' ARRABIATA",
    description:
      "cherry tomatoes, garlic, hot\nchilli, olives, parsley & a touch of Napoli",
    price: 28.0,
  },
  {
    name: "RIGATONI ALL'AMATRICIANA",
    description:
      "pancetta, garlic cherry\ntomatoes & basil in a mild chilli Napoli sauce",
    price: 29.0,
  },
  {
    name: "LASAGNA AL FORNO",
    description:
      "layers of lasagna sheets filled w/\nBolognese & bechamel sauce",
    price: 27.0,
  },
  {
    name: "RISOTTO CON POLLO E FUNGHI",
    description: "rice, chicken, spinacH,\nmushrooms & parmesan",
    price: 29.0,
  },
  {
    name: "RISOTTO GAMBERI",
    description:
      "rice, prawns, cherry tomatoes,\ngarlic, olive oil, white wine, spinach & lemon",
    price: 32.0,
  },
];
const items6 = [
  {
    name: "POLLO ALLA PARMIGIANA",
    description:
      "crumbed chicken breast w/\ncheese & Napoli sauce, potatoes & veggies",
    price: 29.0,
  },
  {
    name: "MELENZANA PARMIGIANA",
    description:
      "grilled eggplant, cheese &\nNapoli sauce served w/ potatoes & veggies",
    price: 32.0,
  },
];
const items7 = [
  {
    name: "375ml Soft Drink (Coke, No Sugar, Sprite, Lift, Fanta)",
    description: "",
    price: 3.5,
  },
  {
    name: "1.25lt Soft Drink $5\n(Coke, No Sugar, Sprite,)",
    description: "",
    price: 5.0,
  },
  {
    name: "600ml Mount Franklin Still Water",
    description: "",
    price: 3.5,
  },
  {
    name: "450ml Mount Franklin Lightly Sparkling Water",
    description: "",
    price: 3.5,
  },
];

export default function menu() {
  return (
    <div className="p-5 lg:p-10 bg-theme-dark">
      <div className="flex items-center justify-between ">
        <h1 className="flex-1 heading text-theme-accent text-[20vw] lg:text-[10vw] leading-[98%]">
          TAKEAWAY
        </h1>
        <p className="flex-1 p-5 text-gray-500 border-l-[1px] border-gray-500/50">
          Vegetarian & gluten free options available
          <br />
          Please notify your waitstaff of any food intolerances or allergies.
        </p>
      </div>

      <div className="w-full h-1 border-t-[1px] border-b-[1px] border-gray-500/50 mt-8"></div>
      <div className="mt-10 space-y-10">
        <Menu title="STARTERS" items={items2} />
        <Menu title="PASTA & RISOTTO" items={items5} />
        <Menu title="MAINS" items={items6} />
        <Menu title="PIZZAS" items={items4} />
        <Menu title="SIDES" items={items3} />
        <Menu title="SWEETS" items={items1} />
        <Menu title="DRINKS" items={items7} />
      </div>
    </div>
  );
}

function Menu({
  title,
  items,
}: {
  title: string;
  items: {
    name: string;
    description: string;
    price: number;
  }[];
}) {
  return (
    <div className="w-full">
      <div className="flex items-center border-b-[1px] border-gray-500/50 pb-10">
        <span className="inline-block w-1.5 h-1.5 mr-1 duration-300 rounded-full bg-theme-accent"></span>
        <span className="inline-block w-3 h-3 mr-3 duration-300 rounded-full bg-theme-accent"></span>
        <h2 className="text-5xl font-semibold capitalize menu-font text-theme-paragraphs">
          {title.toLowerCase()}
        </h2>
      </div>
      <table className="w-full">
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td className="text-lg lg:text-2xl pt-5 pb-5 border-b-[1px] border-dotted border-gray-500/50  text-theme-paragraphs">
                <div>{item.name.toLowerCase()}</div>
                <div className="text-sm text-gray-500">
                  {item.description.toLowerCase()}
                </div>
              </td>

              <td className="pt-5 pb-5 border-b-[1px] border-dotted border-gray-500/50  text-theme-paragraphs">
                ${item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
