import type { TMenuItem } from "../types"

type TMeniItemProps = {
    item: TMenuItem
}

export default function MenuItem({item} : TMeniItemProps) {
  return (
    <button className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between">
        <p>{item.name}</p>
        <p className=" font-black">${item.price}</p>
    </button>
  )
}
