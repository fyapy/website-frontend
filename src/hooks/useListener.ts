import { useEffect, RefObject } from 'react'

interface UseListenerParams {
    event: string
    target: RefObject<HTMLElement | Window> | null
    listener: (this: HTMLElement | Window, ev: any) => any
}

export const useListener = ({
    target,
    event,
    listener,
}: UseListenerParams) => useEffect(() => {
    target?.current?.addEventListener(event, listener)
    return () => target?.current?.removeEventListener(event, listener)
}, [target, listener, event])
