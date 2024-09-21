
const Buttons = ({ children, handleChange, id, value, identity }) => {
    return (
        <button className="rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" id={id} onClick={handleChange} value={value} data-entity={identity}>
            {children}
        </button>
    )
}

export default Buttons