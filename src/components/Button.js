export const Button = (props) => {
    return (
        <button className="bg-[#7C0F82] text-white uppercase rounded py-2 px-10 md:ml-[50px] hover:bg-[#bf2ec7] duration-500">
            {props.children}
        </button>
    )
}