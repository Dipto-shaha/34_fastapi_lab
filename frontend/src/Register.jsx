import InputOne from "./Component/InputOne";

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
                <form>
                <div className="mb-4">
                    <InputOne type={"text"} name={"name"}></InputOne>
                </div>
                <div className="mb-6">
                    <InputOne type={"password"} name={"password"}></InputOne>
                </div>
                    <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Register;