
const PricingCard = ({p}) => {
  return (
    <div className="h-[410px] w-[250px] xl:h-[470px] xl:w-[300px] py-7 px-3 gap-7 rounded-2xl hover:scale-105 duration-200 bg-[#202020] hover:bg-white hover:text-black select-none outline-1 outline-white">
        <div className="text-xl xl:text-3xl text-center mb-7 px-4">{p.name}</div>
        <div className="text-center text-base xl:text-xl mb-7">{p.price} {p.billing}</div>
        <div className="px-4 py-4 text-sm xl:text-base flex flex-col border-t-2">
          <div className="font-semibold mb-2">Features:</div>
          <ul className="list-disc ml-6">
            {p.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default PricingCard
