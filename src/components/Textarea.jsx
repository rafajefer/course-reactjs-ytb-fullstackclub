function Textarea(props) {
  return (
    <textarea
        className="w-full p-2 border border-gray-300 outline-slate-400 rounded-md px-4 py-2"
        {...props}
    ></textarea>
  );
}

export default Textarea;