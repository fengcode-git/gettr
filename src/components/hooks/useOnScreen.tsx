import React from "react"

const useOnScreen = (ref: React.RefObject<HTMLDivElement>) => {
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        const callback: IntersectionObserverCallback = ([entry]) => {
            //   console.log(entry.isIntersecting)
            setShow(entry.isIntersecting)
        }
        const observer = new IntersectionObserver(callback, options)
        if (ref.current) {
            observer.observe(ref.current)
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [ref])
    return show
}

export default useOnScreen