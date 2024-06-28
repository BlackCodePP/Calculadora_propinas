export type TMenuItem = {
    id: number,
    name: string,
    price: number
}

export type TOrdetItem = TMenuItem & {
    quantity: number
}