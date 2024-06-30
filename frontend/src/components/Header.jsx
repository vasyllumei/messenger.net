import { Button, Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../hooks/useLogout";
import authScreenAtom from "../atoms/authAtom";
import { MdOutlineSettings } from "react-icons/md";
import Dark from '../assets/dark.svg'
import Light from '../assets/light.svg'
import Home from '../assets/home.svg';
import {BiChat} from "react-icons/bi";
const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const user = useRecoilValue(userAtom);
	const logout = useLogout();
	const setAuthScreen = useSetRecoilState(authScreenAtom);

	return (
		<Flex justifyContent={"space-between"} mt={6} mb='12'>
			{user && (
				<Link as={RouterLink} to='/'>
					<Image
						cursor={"pointer"}
						alt='logo'
						w={6}
						src={Home}
					/>
				</Link>
			)}
			{!user && (
				<Link as={RouterLink} to={"/auth"} onClick={() => setAuthScreen("login")}>
					Login
				</Link>
			)}



			{user && (
				<Flex  bg={"blue.200"} alignItems={"center"} borderRadius="lg" gap={5} p={2}>
					<Link as={RouterLink} to={`/${user.username}`}>
						<RxAvatar size={24} />
					</Link>

					<Link as={RouterLink} to={`/chat`}>
						<BiChat size={23} />
					</Link>
					<Link as={RouterLink} to={`/settings`}>
						<MdOutlineSettings size={20} />
					</Link>
					<Image
						cursor={"pointer"}
						alt='logo'
						w={5}
						src={colorMode === "dark" ? Dark : Light}
						onClick={toggleColorMode}
					/>
					<Button size={"xs"} colorScheme={"blue.300"} onClick={logout}>
						<FiLogOut  size={20} />
					</Button>
				</Flex>
			)}

			{!user && (
				<Link as={RouterLink} to={"/auth"} onClick={() => setAuthScreen("signup")}>
					Sign up
				</Link>
			)}
		</Flex>
	);
};

export default Header;
