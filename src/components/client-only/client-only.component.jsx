import React, {useState, useEffect} from 'react'

const ClientOnly = ({children}) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
   
    if(!isMounted) return null;

    return children;
}

export default ClientOnly
