import React from "react";

const items = [
  {
    name: "Bruschetta al Pomodoro",
    description:
      "tomato, fresh basil, olive oil & red onion on toasted pane di casa bread",
    price: 16,
  },
  {
    name: "Insalata di Finocchio e Arancio",
    description:
      "Fennel, orange, rocket, olive oil, balsamic vinegar & cracked pepper",
    price: 18,
  },
  {
    name: "Fish & Chips",
    description: "Beer battered flathead tails with steak chips and salad",
    price: 20,
  },
  {
    name: "Beef Burger",
    description:
      "House-made wagyu beef pattie, lettuce, American cheese, maple bacon, egg & relish, served w/ steak chips",
    price: 22,
  },
  {
    name: "Schnitzel Burger",
    description:
      "Crumbed chicken breast, cheese, lettuce, tomato & chipolte mayo,served w/ steak chips",
    price: 22,
  },
  {
    name: "Risotto ai Funghi",
    description: "Spinach, mushrooms, garlic, parmesan & herbs",
    price: 25,
  },
  {
    name: "Gnocchi al Pesto",
    description:
      "Pan-tossed gnocchi in a fresh basil pesto sauce w/ cherry tomatoes & grana padano",
    price: 25,
  },
  {
    name: "Salt & Pep er Calamari",
    description:
      "Served on a continental salad w/ olive oil & balsamic vinegar",
    price: 25,
  },
  {
    name: "Spaghetti alle Vongole",
    description:
      "Clams pan-tossed in a garlic & white wine sauce w/ olive oil & parsley",
    price: 26,
  },
];

const items2 = [
  {
    name: "Caprese con Bufala",
    description: "sliced tomatoes w/ buffalo mozzarella, olive oil & balsamic",
    price: 26,
  },
  {
    name: "Tre Sapori",
    description: "an assortment ofItalian meatballs, arancini & bruschetta",
    price: 30,
  },
  {
    name: "Antipasto della Casa",
    description:
      "Italian meats, marinated vegetables, cheese, olives & focaccia bread",
    price: 32,
  },
  {
    name: "Misto di Pesce",
    description:
      "shallow fried calamari, garlic prawns & sauteed mussels served w/toasted bread",
    price: 34,
  },
];

const items3 = [
  {
    name: "Bruschetta al Pomodoro",
    description: "tomato, basil, red onion & olive oil served on toasted bread",
    price: 20,
  },
  {
    name: "Polpette di Carne",
    description:
      "Italian meatballs in a thick Napoli sauce served w/toasted bread",
    price: 21,
  },
  {
    name: "Arancini di Riso",
    description:
      "rice balls filled w/ cheese & Bolognese sauce, crumbed & fried",
    price: 21,
  },
  {
    name: "Cozze al Pomodoro",
    description:
      "mussels served in a tomato, white wine, chilli & garlic sauce",
    price: 25,
  },
  {
    name: "Calamari Fritti",
    description:
      "shallow fried calamari served w/ a fennel, orange & rocket salad w/ vinaigrette",
    price: 25,
  },
  {
    name: "Calamari alla Griglia",
    description:
      "grilled calamari on a continental salad w/ olive oil & balsamic vinegar",
    price: 27,
  },
  {
    name: "Gamberi all''Aglio",
    description:
      "grilled prawns w/ garlic, chilli & white wine served w/ pane di casa bread",
    price: 28,
  },
  {
    name: "Insalata di Vitello",
    description:
      "tender eye fillet, grilled & served on a gourmet salad w/ honey soy dressing",
    price: 30,
  },
];
const items4 = [
  {
    name: "Melenzana Parmigiana",
    description:
      "grilled eggplant, cheese & Napoli sauce served w/ potatoes & veggies",
    price: 28,
  },
  {
    name: "Pollo alla Parmigiana",
    description:
      "crumbed chicken breast w/ cheese & Napoli sauce, potatoes & veggies",
    price: 30,
  },
  {
    name: "Pollo Saltimbocca",
    description:
      "chicken, sage, prosciutto, white wine, lemon & caper sauce, potatoes & veggies",
    price: 34,
  },
  {
    name: "Tagliata di Manzo",
    description:
      "grilled eye fillet of beef w/ red wine jus, served w/ potatoes & veggies",
    price: 45,
  },
];
const items5 = [
  {
    name: "Patatine",
    description:
      "thick cut potato chips, served w/ a choice of sauce - relish, aioli,tomato, chipolte or mayo",
    price: 10,
  },
  {
    name: "Patate Arrostite",
    description: "Italian roasted potatoes w/ sea salt & rosemary",
    price: 12,
  },
  {
    name: "Verdure di Stagione",
    description: "seasonal steamed veggies",
    price: 15,
  },
  {
    name: "Insalata Mista",
    description: "seasonal steamed veggies",
    price: 16,
  },
  {
    name: "Insalata di Rucola",
    description: "seasonal steamed veggies",
    price: 17,
  },
];
const items6 = [
  {
    name: "Linguine allo Scoglio",
    description: "pancetta, egg, parmesan, pecorino cheese & a touch of cream",
    price: 32,
  },
  {
    name: "Spaghetti alla Carbonara",
    description: "pancetta, egg, parmesan, pecorino cheese & a touch of cream",
    price: 28,
  },
  {
    name: "Gnocchi al Pomodoro",
    description: "potato gnocchi in a rich Napoli sauce w/fresh basil",
    price: 29,
  },
  {
    name: "Spaghetti con Polpette",
    description: "spaghetti w/traditional Italian meatballs in a Napoli sauce",
    price: 29,
  },
  {
    name: "Ravioli",
    description:
      "(Pumpkin & Ricotta or Duck) in a burnt butter & sage sauce w/ red wine jus & parmesan",
    price: 30,
  },
  {
    name: "Rigatoni all 'Amatriciana",
    description:
      "pancetta, garlic, cherry tomatoes & basil in a mild chilli Napoli sauce",
    price: 29,
  },

  {
    name: "Penne all 'Arrabbiata",
    description:
      "cherry tomatoes, garlic, hot chilli, olives, parsley & a touch of Napoli",
    price: 28,
  },
  {
    name: "Lasagna al Forno",
    description: "layers oflasagna sheets filled w/Bolognese & bechamel sauce",
    price: 32,
  },
  {
    name: "Risotto con Pollo e Funghi",
    description: "rise, chicken, spinach, mushrooms & parmesan",
    price: 29,
  },
  {
    name: "Risotto con Gamberi",
    description:
      "rice, prawns, cherry tomatoes, garlic, oilve oil, white wine, spinach & lemon",
    price: 32,
  },
];
const items7 = [
  {
    name: "Focaccia Aglio e Olio",
    description: "garlic, mozzarella, olive oil, sea salt & rosemary",
    price: 13,
  },
  {
    name: "Margherita",
    description: "tomato sauce, mozzarella,fresh basil & olive oil",
    price: 21,
  },
  {
    name: "Diavola",
    description: "tomato sauce, mozzarella, hot salami & fresh basil",
    price: 23,
  },
  {
    name: "Napoletana",
    description:
      "tomato sauce, mozzarella, olives, cherry tomatoes, capers, anchovies & oregano",
    price: 25,
  },
  {
    name: "Giardiniera",
    description:
      "tomato sauce, mozzarella, zucchini, eggplant, cherry tom, red onion, basil & Parmesan",
    price: 26,
  },
  {
    name: "Salsiccia",
    description:
      "tomato sauce, mozzarella, Italian pork & fennel sausage and chilli",
    price: 26,
  },
  {
    name: "Pollo e Zucca",
    description:
      "tomato sauce, mozzarella, roasted chicken, pumpkin, spinach, pine nuts & olive oil",
    price: 27,
  },
  {
    name: "Capricciosa",
    description:
      "tomato sauce, mozzarella, ham, mushrooms, hot salami, olives & oregano",
    price: 28,
  },
  {
    name: "Prosciutto e Rucola",
    description:
      "tomato sauce, mozzarella, prosciutto, rocket, Parmesan cheese & olive oil",
    price: 29,
  },
  {
    name: "Amalfi",
    description: "tomato sauce, mozzarella, prawns, garlic & cherry tomatoes",
    price: 30,
  },
];
const items8 = [
  {
    name: "Kids Margherita Pizza",
    description: "",
    price: 14,
  },
  {
    name: "Fish & Chips",
    description: "",
    price: 14,
  },
  {
    name: "Chicken Schnitzel & Chips",
    description: "",
    price: 14,
  },
  {
    name: "Pasta Bolognese",
    description: "",
    price: 14,
  },
  {
    name: "Spaghetti & Meatballs",
    description: "",
    price: 14,
  },
  {
    name: "Mac & Cheese",
    description: "",
    price: 14,
  },
];
export default function menu() {
  return (
    <div className="p-5 lg:p-10 bg-theme-dark">
      <div className="flex items-center justify-between ">
        <h1 className="flex-1 heading text-theme-accent text-[30vw] lg:text-[10vw] leading-[98%]">
          Dine In
        </h1>
        <p className="flex-1 p-5 text-gray-500 border-l-[1px] border-gray-500/50">
          Vegetarian & gluten free options available
          <br />
          Please notify your waitstaff of any food intolerances or allergies.
        </p>
      </div>
      <div className="w-full h-1 border-t-[1px] border-b-[1px] border-gray-500/50 mt-8"></div>
      <div className="mt-10 space-y-10">
        <Menu title="Lunch menu" items={items} />
        <Menu title="Antipasti" items={items2} />
        <Menu title="Primi Piatti" items={items3} />
        <Menu title="Secondi Piatti" items={items4} />
        <Menu title="Contorni" items={items5} />
        <Menu title="Paste e Risotti" items={items6} />
        <Menu title="Pizze" items={items7} />
        <Menu
          title="Bambini"
          desc="KIDS UNDER 12 - ALL MEALS $14"
          items={items8}
        />
      </div>
    </div>
  );
}

function Menu({
  title,
  items,
  desc,
}: {
  title: string;
  desc?: string;
  items: {
    name: string;
    description: string;
    price: number;
  }[];
}) {
  return (
    <div className="w-full">
      <div className="pb-10 border-gray-500/50 border-b-[1px] ">
        <div className="flex items-center ">
          <span className="inline-block w-1.5 h-1.5 mr-1 duration-300 rounded-full bg-theme-accent"></span>
          <span className="inline-block w-3 h-3 mr-3 duration-300 rounded-full bg-theme-accent"></span>
          <h2 className="text-5xl font-semibold capitalize menu-font text-theme-paragraphs">
            {title}
          </h2>
        </div>
        <p className="mt-3 text-gray-400">{desc}</p>
      </div>
      <table className="w-full">
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td className="text-lg lg:text-2xl pt-5 pb-5 border-b-[1px] border-dotted border-gray-500/50  text-theme-paragraphs">
                {item.name.toLowerCase()}
              </td>
              <td className="pt-5 pb-5 pr-10 text-gray-500 border-b-[1px] border-gray-500/50  border-dotted">
                {item.description.toLowerCase()}
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
