
export default function InputField({ type, id, name, placeholder }) {
    return (
        <input
            className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            required
        />
    )
}
