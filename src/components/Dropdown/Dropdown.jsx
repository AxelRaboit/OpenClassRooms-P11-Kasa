import style from './dropdown.module.scss';
import { useState } from 'react';

export const Dropdown = ({ title, content, className }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const display = isOpen ? 'block' : 'none';
    const arrowDirection = isOpen ? 'down' : 'up';

    return (
        <div className={`${style.dropdownContainer} ${className}`}>
            <div className={style.dropdownWrap} onClick={toggleDropdown}>
                <div className={style.dropdownHeader}>
                    <span>{title}</span>
                    <i className={`fa-solid fa-chevron-${arrowDirection}`} />
                </div>
                <div className={style.dropdownContainerContent} style={{ display }}>
                    <span className={style.dropdownContent}>{content}</span>
                </div>
            </div>
        </div>
    )
}