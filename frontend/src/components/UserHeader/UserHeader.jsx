import React from "react";
import {  Flex, Link, Text, VStack, Button } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import userAtom from "../../atoms/userAtom.js";
import { Link as RouterLink } from "react-router-dom";
import {SocialLinks} from "./components/SocialLinks/SocialLinks.jsx";
import {FollowButton} from "./components/FollowButton.jsx";
import {ProfileDetails} from "./components/ProfileDetails.jsx";
import {AvatarComponent} from "./components/AvatarComponent.jsx";

const UserHeader = ({ user }) => {
	const currentUser = useRecoilValue(userAtom);

	return (
		<VStack gap={4} alignItems="start">
			<Flex justifyContent="space-between" w="full">
				<ProfileDetails user={user} />
				<AvatarComponent user={user} />
			</Flex>
			<Text>{user.bio}</Text>
			{currentUser?._id === user._id && (
				<Link as={RouterLink} to="/update">
					<Button colorScheme="blue" size="sm">
						Update Profile
					</Button>
				</Link>
			)}
			{currentUser?._id !== user._id && <FollowButton user={user} />}
			<SocialLinks user={user} />
			<Flex w="full">
				<Flex
					flex={1}
					borderBottom="1.5px solid white"
					justifyContent="center"
					pb="3"
					cursor="pointer"
				>
					<Text fontWeight="bold"> Board</Text>
				</Flex>
				<Flex
					flex={1}
					borderBottom="1px solid gray"
					justifyContent="center"
					color="gray.light"
					pb="3"
					cursor="pointer"
				>
					<Text fontWeight="bold"> Replies</Text>
				</Flex>
			</Flex>
		</VStack>
	);
};

export default UserHeader;
