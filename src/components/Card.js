import { Link } from "react-router-dom"
import Button from "./Button"

const Card = ({ product, handleClick }) => {
  const { name, image, price, id } = product
  return (
    <article className="relative block bg-white border border-grey-300">
      <Link to={`/${id}`}>
        <img
          loading="lazy"
          alt={name}
          className="object-contain w-64 h-56 lg:h-72"
          src={image}
        />
      </Link>
      <div className="p-6">
        {/* <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
        Promo
      </span> */}

        <h5 className="mt-4 text-lg font-bold">{name}</h5>

        <p className="mt-2 text-sm font-medium text-gray-600">
          {price / 100} €
        </p>

        <Button
          name="add"
          type="button"
          text="Add to Cart"
          handleClick={() => handleClick(id)}
        />
      </div>
    </article>
  )
}

export default Card
