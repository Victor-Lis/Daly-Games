interface LabelProps{
    name: String
}

export function Label({name}: LabelProps){
    return(
        <div className="flex-grow sm:flex-grow-0 py-1 px-3 bg-slate-200 text-black text-center rounded-lg hover:font-bold cursor-pointer duration-300">
            {name}
        </div>
    )
}