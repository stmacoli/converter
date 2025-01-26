const Contact = ({ name, href, logo, ...props }) => {
    return (
        <div {...props} className="flex items-center space-x-2">
            <a href={href} className="flex items-center space-x-2">
                <img src={logo} alt={`${name} logo`} className="w-10" />
                <span>{name}</span>
            </a>
        </div>
    );
};

export default Contact;
