import {Box, Flex, Text, useColorModeValue} from "@chakra-ui/react";
import React from "react";

export const ProfileDetails = ({ user }) => {
    const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

    return (
        <Box>
            <Text fontSize="2xl" fontWeight="bold">
                {user.name}
            </Text>
            <Flex gap={2} alignItems="center">
                <Text fontSize="sm">{user.username}</Text>
                <Text
                    fontSize="xs"
                    bg="blue.300"
                    color={textColor}
                    px={2}
                    py={1}
                    borderRadius="full"
                >
                    messenger.net
                </Text>
            </Flex>
        </Box>
    );
};
