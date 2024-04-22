
const InputOne = ({name,type}) => {
    return (
        <div>
            <label className="block text-gray-700">{name}</label>
            <input type={type} id={name} name={name} placeholder={`Enter your ${name}`} className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
        </div>
    );
};

export default InputOne;