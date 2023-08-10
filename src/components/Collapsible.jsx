import React, { useState } from "react";

function Collapsible({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(prevState => !prevState);
    
    const renderContent = () => {
        if (Array.isArray(content)) {
            return (
                <ul>
                    {content.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            );
        }
        return <p>{content}</p>;
    };

    return (
        <div className="collapsible">
            <div className="collapsible-header" onClick={handleToggle}>
                <h3>{title}</h3>
                <span className={`arrow ${isOpen ? "open" : "closed"}`}></span>
            </div>
            {isOpen && <div className="collapse-content">{renderContent()}</div>}
        </div>
    );
}

export default Collapsible;
