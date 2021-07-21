
function HeaderItem({ Icon, title }) {
    return (
        <div>
            <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white hover:scale-125 left-1 ml-1">
            <Icon className="h-7 mb-1 group-hover:animate-bounce ml-1" />
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
            </div>
        </div>
    )
}

export default HeaderItem;
