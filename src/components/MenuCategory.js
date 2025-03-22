import React from "react";
import CategoryItem from "./CategoryItem";

const MenuCategory = ({ menuCategory, showCategoryItems, onCategoryClick }) => {
  return (
    <div className="mx-0 my-0.5 py-2">
      <div
        className="text-lg font-bold mb-1 bg-gray-200 rounded-lg p-2 flex justify-between cursor-pointer"
        onClick={onCategoryClick}
      >
        {menuCategory.category}
        <span className="pr-2">{showCategoryItems ? <>⬆</> : <>⬇</>}</span>
      </div>
      {showCategoryItems && (
        <div className="border rounded-lg solid border-gray-300 ">
          {menuCategory.items.map((item) => {
            return <CategoryItem key={item.id} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
