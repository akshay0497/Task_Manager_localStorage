import React from "react";

const UsersList = () => {
    return (
        <div>
            <h4>
                Email :{" "}
                {localStorage.getItem("email")
                    ? localStorage.getItem("email")
                    : "NA"}
            </h4>
        </div>
    );
};

export default UsersList;


