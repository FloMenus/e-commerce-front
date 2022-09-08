import Button from "./Button"

const CardCart = ({ product, handleClick }) => {
  const { name, price, image, vendor } = product
  return (
    <div className="flex items-start pt-8 pb-12 border-solid border border-black p-5">
      <img className="object-cover w-16 h-16 rounded-lg" src={image} alt="" />

      <div className="ml-4 w-4/5">
        <h3 className="text-sm">{name}</h3>

        <dl className="mt-1 text-xs text-gray-500 space-y-1">
          <div>
            <dt className="inline">Price : </dt>
            <dd className="inline">{price / 100} €</dd>
          </div>

          <div>
            <dt className="inline">Vendeur : </dt>
            <dd className="inline">{vendor}</dd>
          </div>
        </dl>
      </div>
      <Button
        type="button"
        text="Retirer du panier"
        handleClick={handleClick}
      />
    </div>
  )
}

export default CardCart
