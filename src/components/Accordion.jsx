import { useState } from "react";
import "./Accordion.css";

const USPItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="usp-item">
            <div className="usp-header" onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <span>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && <div className="usp-content">{content}</div>}
        </div>
    );
};

const USP = () => {
    const items = [
        { title: "✅ 100% Live Trainings", content: "Learn through interactive, real-time sessions designed for hands-on experience." },
        { title: "✅ 100% Job Guaranteed in Digital Marketing", content: "We ensure a guaranteed job in SEO and Digital Marketing upon successful completion." },
        { title: "✅ Learn from Professionals", content: "Gain insights from industry experts with years of global experience." },
        { title: "✅ Work on International Projects", content: "Get hands-on experience with projects from the US, UK, AUS, CAN, and IND." },
        { title: "✅ Flexible Timings", content: "Schedule your learning around your convenience with our flexible timings." },
        { title: "✅ Weekend Batches", content: "Special weekend batches designed for working professionals." }
    ];

    return (
        <div className="usp-container">
            <h2 className="usp-title">Why <span class="efg">Choose Us?</span></h2>
            <div className="usp">
                {items.map((item, index) => (
                    <USPItem key={index} title={item.title} content={item.content} />
                ))}
            </div>
        </div>
    );
};

export default USP;
