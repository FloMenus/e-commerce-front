import React from "react";

const CardCart = ({ name, vendor, image, price }) => {
  return (
    <div class="flex items-start pt-8 pb-12 border-solid border border-black p-5">
      <img
        class="object-cover w-16 h-16 rounded-lg"
        src={image}
        alt="Item image"
      />

      <div class="ml-4">
        <h3 class="text-sm">{name}</h3>

        <dl class="mt-1 text-xs text-gray-500 space-y-1">
          <div>
            <dt class="inline">Price:</dt>
            <dd class="inline">{price}</dd>
          </div>

          <div>
            <dt class="inline">Vendor:</dt>
            <dd class="inline">{vendor}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default CardCart;
