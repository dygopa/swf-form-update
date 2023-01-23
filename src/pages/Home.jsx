import React, {useEffect, useState} from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import Form from './Form'

function Home() {

    const [hasQuery, setHasQuery] = useState(false)
    const [loadedEntity, setLoadedEntity] = useState(false)

    const EmptyState = () => {
        return(
            <div className='bg-white w-full h-screen'>
                <div className="w-full h-full gap-5 flex flex-col justify-center items-center text-center">
                    <div className="text-red-600 text-[5rem]">
                        <FiAlertCircle/>
                    </div>
                    <p className='text-red-600 font-semibold text-4xl'>Cuidado</p>
                    <p className='text-slate-900 font-normal text-lg'>Se necesita los datos necesarios para el acceso</p>
                </div>
            </div>
        )
    }

    function loadEntity(){
        let query = window.location.search
        setHasQuery(query ? true : false)
        setLoadedEntity(true)
    }

    useEffect(() => {
        loadEntity()
    }, [loadedEntity])

    return (
        hasQuery ?
        <Form/> :
        <EmptyState/>
    )
}

export default Home