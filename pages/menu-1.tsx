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

export default function menu() {
  return (
    <div className="p-5 lg:p-10 bg-theme-dark">
      <div className="flex justify-between ">
        <h1 className="flex-1 heading text-theme-accent text-[10vw] leading-[98%]">
          MENU
        </h1>
        <p className="flex-1 p-5 text-gray-500 border-l-[1px] border-gray-500/50">
          Eget vestibulum dignissim enim, vel nunc. Orci, vel urna vel viverra
          sed suscipit lorem nunc. Tellus convallis.
        </p>
      </div>
      <div className="w-full h-1 border-t-[1px] border-b-[1px] border-gray-500/50 mt-8"></div>
      <div className="mt-10 space-y-10">
        <Menu title="LUNCH MENU" items={items} />
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
    <div>
      <div className="flex items-center border-b-[1px] border-gray-500/50 pb-10">
        <span className="inline-block w-1.5 h-1.5 mr-1 duration-300 rounded-full bg-theme-accent"></span>
        <span className="inline-block w-3 h-3 mr-3 duration-300 rounded-full bg-theme-accent"></span>
        <h2 className="text-4xl font-semibold text-theme-paragraphs">
          {title}
        </h2>
      </div>
      <table>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td className="pt-5 pb-5 border-b-[1px] border-dotted border-gray-500/50  text-theme-paragraphs">
                {item.name}
              </td>
              <td className="pt-5 pb-5 pr-10 text-gray-500 border-b-[1px] border-gray-500/50  border-dotted">
                {item.description}
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
