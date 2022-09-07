const CardCart = ({ name, vendor, image, price }) => {
  return (
    <div className="flex items-start pt-8 pb-12 border-solid border border-black p-5">
      <img className="object-cover w-16 h-16 rounded-lg" src={image} alt="" />

      <div className="ml-4">
        <h3 className="text-sm">{name}</h3>

        <dl className="mt-1 text-xs text-gray-500 space-y-1">
          <div>
            <dt className="inline">Price:</dt>
            <dd className="inline">{price}</dd>
          </div>

          <div>
            <dt className="inline">Vendor:</dt>
            <dd className="inline">{vendor}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default CardCart;
