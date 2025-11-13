
export default function FormLabel({ htmlFor, displayValue }) {
    return (
        <label
            className="block text-sm font-medium text-gray-700"
            htmlFor={htmlFor}
        >
            {displayValue}
        </label>
    )
}
