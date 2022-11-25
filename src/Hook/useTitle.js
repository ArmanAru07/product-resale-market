import { useEffect } from "react"

const useTitle=(title)=>{

    useEffect(()=>{

        document.title=`Bike-Hunter-${title}`

    },[title])
}

export default useTitle;