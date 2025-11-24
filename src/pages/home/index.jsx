import { useMemo } from "react";
import HomeMain from "../../components/home";
import {FiAlertCircle} from 'react-icons/fi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  }
});

export default function HomeIndex(){
    
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

    const hasQuery = useMemo(()=> window.location.search !== "",[window.location])

    if(hasQuery){
        return(
            <QueryClientProvider client={queryClient}>
                <HomeMain/>
            </QueryClientProvider>
        )
    }
    
    return (
        <EmptyState/>
    )
}