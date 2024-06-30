import {Menu, MenuButton, MenuItem, MenuList, Portal} from "@chakra-ui/react";
import {Box, Flex, Link, Text} from "@chakra-ui/react";
import {BsInstagram} from "react-icons/bs";
import React from "react";
import {CgMoreO} from "react-icons/cg";
import {useToast} from "@chakra-ui/toast";

export const SocialLinks = ({ user }) => {
    const toast = useToast()
    const copyURL = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL).then(() => {
            toast({
                title: "Success.",
                status: "success",
                description: "Profile link copied.",
                duration: 3000,
                isClosable: true,
            });
        });
    };
    return (
        <Flex w={"full"} justifyContent={"space-between"}>
            <Flex gap={2} alignItems={"center"}>
                <Text color={"gray.light"}>{user.followers.length} followers</Text>
                <Box w='1' h='1' bg={"gray.light"} borderRadius={"full"}></Box>
                <Link color={"gray.light"}>instagram.com</Link>
            </Flex>
            <Flex>
                <Box className='icon-container'>
                    <BsInstagram size={24} cursor={"pointer"} />
                </Box>
                <Box className='icon-container'>
                    <Menu>
                        <MenuButton>
                            <CgMoreO size={24} cursor={"pointer"} />
                        </MenuButton>
                        <Portal>
                            <MenuList bg={"blue.300"}>
                                <MenuItem bg={"blue.300"} onClick={copyURL}>
                                    Copy link
                                </MenuItem>
                            </MenuList>
                        </Portal>
                    </Menu>
                </Box>
            </Flex>
        </Flex>
    );
};