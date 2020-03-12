export type Noop = () => void
export const noop: Noop = () => {}

export const delay = (time: number) => new Promise(
    resolve => setTimeout(() => resolve(), time)
)
