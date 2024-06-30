import React from "react";
import {Avatar, Box} from "@chakra-ui/react";

export const AvatarComponent = ({ user }) => {
    return (
        <Box>
            {user.profilePic ? (
                <Avatar
                    name={user.name}
                    src={user.profilePic}
                    size={{
                        base: "md",
                        md: "xl",
                    }}
                />
            ) : (
                <Avatar
                    name={user.name}
                    src="https://bit.ly/broken-link"
                    size={{
                        base: "md",
                        md: "xl",
                    }}
                />
            )}
        </Box>
    );
};
