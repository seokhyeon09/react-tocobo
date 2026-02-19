import React,{useCallback} from 'react'

export const useSmoothScroll = () => {

    const scrollTo = useCallback((id)=>{

     const el =document.getElementById(id)

        if(el){
            el.scrollIntoView({
                behavior:'smooth',
                block:'start'
            })
        }

    },[])

  return scrollTo
}