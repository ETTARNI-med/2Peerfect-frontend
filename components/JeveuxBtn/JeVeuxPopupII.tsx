import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { SubItem } from "@/lib/menu";

interface JeVeuxPopupIIProps {
  items: SubItem[];
  title: string;
  onClose: () => void;
}

function JeVeuxPopupII({ items, title, onClose }: JeVeuxPopupIIProps) {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <div className="relative ">
      {/* <button onClick={onClose} className="absolute top-2 right-2">X</button> */}
      {/* <p className="text-xl mb-4">{title}</p> */}
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-between my-2 cursor-pointer"
          onClick={() => handleClick(index)}
        >
          <p className="text-base">{item.title}</p>
          {item.subItems && <ChevronRight size={19} strokeWidth={2} />}
        </div>
      ))}
      {openSubMenu !== null && items[openSubMenu].subItems && (
        <div className="absolute  bg-white p-7 rounded-[17px] w-64 shadow-lg ml-60 -translate-y-[403px]">
          <JeVeuxPopupII
            items={items[openSubMenu].subItems}
            title={items[openSubMenu].title}
            onClose={() => setOpenSubMenu(null)}
          />
        </div>
      )}
    </div>
  );
}

export default JeVeuxPopupII;
