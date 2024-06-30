import useFollowUnfollow from "../../../hooks/useFollowUnfollow.js";
import {Button} from "@chakra-ui/react";
import React from "react";

export const FollowButton = ({ user }) => {
    const { handleFollowUnfollow, following, updating } = useFollowUnfollow(user);

    return (
        <Button size="sm" colorScheme="blue" onClick={handleFollowUnfollow} isLoading={updating}>
            {following ? "Unfollow" : "Follow"}
        </Button>
    );
};
