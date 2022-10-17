import { parse } from "csv-parse";
import { GetStaticProps } from "next";
import React from "react";
import fs from "fs";

interface MenuItem {
  name: string;
  description: string;
  price: number;
}
interface Menu {
  title: string;
  items: MenuItem[];
}

export default function MenuPage({ menus }: { menus: Menu[] }) {
  return (
    <div className="p-5 lg:p-10 bg-theme-dark">
      <div className="flex items-center justify-between ">
        <div className="flex-1 ">
          <h1 className="heading text-theme-accent text-[20vw] lg:text-[10vw] leading-[98%]">
            TAKEAWAY
          </h1>
        </div>
        <div className="border-l-[1px] p-5 flex-1 border-gray-500/50">
          <p className="text-gray-500 ">
            VEGETARIAN & GLUTEN FREE OPTION AVAILABLE. PLEASE NOTIFY US OF ANY
            FOOD INTOLERANCES OR ALLERGIES
            <br />
            YOU CAN CONTACT US TO PLACE AN ORDER OR SIMPLY USE OUR ONLINE
            SERVICE BY CLICKING THE LINK BELOW. WE ALSO OFFER DELIVERY SERVICES
            VIA INHOUSE. MENULOG OR UBEREATS.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center pt-5">
        <a
          href="/book-now"
          className="px-5 py-2 text-lg text-red-500 uppercase duration-300 border-2 border-red-500 hover:text-white hover:bg-red-500 "
        >
          ORDER NOW
        </a>
      </div>
      <div className="w-full h-1 border-t-[1px] border-b-[1px] border-gray-500/50 mt-8"></div>
      <div className="mt-10 space-y-10">
        {menus.map((menu) => (
          <Menu key={menu.title} {...menu} />
        ))}
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

              <td className="pt-5 pb-5 text-right border-b-[1px] border-dotted border-gray-500/50  text-theme-paragraphs">
                ${item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync("./data/dinein");
  const menus: Menu[] = await Promise.all(
    files.map(async (file) => {
      const data = fs.readFileSync(`./data/dinein/${file}`, "utf8");
      const records = await new Promise((resolve, reject) => {
        parse(data, { columns: true }, (err, records) => {
          if (err) reject(err);
          resolve(records);
        });
      });
      const titleRaw = file.replace(".csv", "").split("_");
      titleRaw.shift();
      const title = titleRaw.join(" ");

      return {
        title,
        items: records as MenuItem[],
      };
    })
  );
  return {
    props: {
      menus,
    },
  };
};
