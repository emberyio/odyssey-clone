import { GetStaticProps } from "next";
import React from "react";
import { parse } from "csv-parse";
import fs from "fs";
import Link from "next/link";

interface MenuItem {
  name: string;
  description: string;
  price: number | string;
}
interface Menu {
  title: string;
  items: MenuItem[];
}

export default function MenuPage({ menus }: { menus: Menu[] }) {
  return (
    <div className="p-5 lg:p-10 bg-theme-dark">
      <div className="flex items-center justify-between ">
        <h1 className="flex-1 heading text-theme-accent text-[30vw] lg:text-[10vw] leading-[98%]">
          Dine In
        </h1>
        <div className="flex-1 p-5 flex flex-col gap-10 border-l-[1px] border-gray-500/50">
          <p className="text-gray-500 ">
            Vegetarian & gluten free options available
            <br />
            Please notify your waitstaff of any food intolerances or allergies.
          </p>
          <Link href="/Luigis-New-Dine-In-Menu-27922.pdf">
            <a className="px-8 py-4 font-semibold duration-300 rounded-full bg-theme-accent hover:bg-white">
              DOWNLOAD MENU
            </a>
          </Link>
        </div>
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
  desc,
}: {
  title: string;
  desc?: string;
  items: {
    name: string;
    description: string;
    price: number | string;
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
              <td className="pt-5 whitespace-nowrap text-right pb-5 border-b-[1px] border-dotted border-gray-500/50  text-theme-paragraphs">
                {item.price > 0 ||
                (typeof item.price == "string" && item.price != "")
                  ? `$${item.price}`
                  : ""}
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
