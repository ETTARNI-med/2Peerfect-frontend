import { ChevronRight } from "lucide-react";
import { useState } from "react";
import JeVeuxPopupII from "./JeVeuxPopupII";
import { MenuItem, SubItem } from "@/lib/menu";

interface JeveuxPopupProps {
  items: MenuItem[];
  onClose: () => void;
}
function JeveuxPopup({ items, onClose }: JeveuxPopupProps) {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };
  return (
    <div className="flex items-start ">
      <div className="  bg-white  p-7 rounded-[17px] w-64 shadow-lg text-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between my-2 cursor-pointer "
            onClick={() => handleClick(index)}
          >
            <p className="text-base">{item.title}</p>{" "}
            <ChevronRight size={19} strokeWidth={2} />
          </div>
        ))}
      </div>

      {openSubMenu !== null && (
        <div className=" bg-white p-7 rounded-[17px] w-64 shadow-lg ml-3 ">
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

export default JeveuxPopup;
