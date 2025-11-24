import Form from './components/form'
import FormProvider from './components/form/context/context'

function HomeMain() {
    return(
        <div className="w-full min-h-screen h-full flex flex-col justify-start items-center relative gap-2 px-[15%] py-[30px] bg-slate-50">
            <FormProvider>
                <Form/>
            </FormProvider>
        </div>
    )
}

export default HomeMain