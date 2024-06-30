import { useRecoilValue } from "recoil";
import LoginForm from "../components/LoginForm.jsx";
import SignupForm from "../components/SignupForm.jsx";
import authScreenAtom from "../atoms/authAtom.js";

const AuthPage = () => {
	const authScreenState = useRecoilValue(authScreenAtom);

	return <>{authScreenState === "login" ? <LoginForm /> : <SignupForm />}</>;
};

export default AuthPage;
