import { Button, Text } from "@chakra-ui/react";
import useShowToast from "../hooks/useShowToast";
import useLogout from "../hooks/useLogout";

export const SettingsPage = () => {
	const showToast = useShowToast();
	const logout = useLogout();

	const disableAccount = async () => {
		if (!window.confirm("Are you sure you want to disable your account?")) return;

		try {
			const res = await fetch("/api/users/disable", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();

			if (data.error) {
				return showToast("Error", data.error, "error");
			}
			if (data.success) {
				await logout();
				showToast("Success", "Your account has been frozen", "success");
			}
		} catch (error) {
			showToast("Error", error.message, "error");
		}
	};

	return (
		<>
			<Text my={1} fontWeight={"bold"}>
				Disable Your Account
			</Text>
			<Text my={1}>You can enable your account anytime by logging in.</Text>
			<Button size={"sm"} colorScheme='red' onClick={disableAccount}>
				Disable
			</Button>
		</>
	);
};
