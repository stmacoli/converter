const Label = ({children, ...props }) => {
    return (
        <label {...props} className="block text-lg mb-2 text-left">
                {children}
        </label>
    )
}
export default Label;