function Button(props) {
  return <button {...props} className="bg-slate-400 hover:bg-slate-500 p-2 rounded-md cursor-pointer">
    {   props.children}
    </button>;
}

export default Button;