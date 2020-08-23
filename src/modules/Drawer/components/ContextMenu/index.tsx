import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const ContextMenu = ({ position, onOptionSelected }: any) => {
    return (
        <div
            style={{
                position: "absolute",
                left: position.x + 10,
                top: position.y
            }}
        >
            <div onClick={() => {onOptionSelected("delete")}}>
                <BsFillTrashFill />
            </div>
        </div>
    );
};

export default ContextMenu;
