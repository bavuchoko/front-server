import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const ScrollDropDown = () => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    return (
        <div className="dropdown"
            onMouseEnter={(e) => {
                e.preventDefault();
                openDropdownPopover();
            }}
            onMouseLeave={(e) => {
                e.preventDefault();
                closeDropdownPopover()
            }}
        >
            <Link
                className=""
                to="/board/java"
                ref={btnDropdownRef}

            >
                두루마리
            </Link>
            <div
                className={
                    (dropdownPopoverShow ? "block drop-menu" : "hidden ") +
                    ""
                }
            >

                <Link
                    to="/board/java"
                    className={
                        (dropdownPopoverShow ? "dropdown-menu hover-drop" : "hidden ")}
                >
                    JAVA
                </Link>
                <Link
                    to="/admin/settings"
                    className={
                        (dropdownPopoverShow ? "dropdown-menu hover-drop" : "hidden ")}
                >
                    Spring boot
                </Link>
                <Link
                    to="/admin/tables"
                    className={
                        (dropdownPopoverShow ? "dropdown-menu hover-drop" : "hidden ")}
                >
                    Data Base
                </Link>
            </div>
        </div>
    );
};

export default ScrollDropDown;
