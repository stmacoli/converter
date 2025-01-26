const Select = ({options, ...props}) => {
    return (
        <select {...props} className="w-full px-4 py-2 mb-4 border border-sky-500 rounded-lg">
        {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    )
}
export default Select;