import Input from "@/components/input";
import React, { useCallback } from "react";
import { useState } from "react";

const auth = () => {
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [variant, setVariant] = useState("login");

	const toggleVariant = useCallback(() => {
		setVariant((currentVariant) =>
			currentVariant == "login" ? "register" : "login"
		);
	}, []);
	return (
		<div className=" relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
			<div className="bg-black w-full h-full lg:bg-opacity-50">
				<nav className="px-12 py-5">
					<img src="/images/logo.png" alt="logo" className="h-12" />
				</nav>
				<div className="flex justify-center">
					<div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md round-md w-full">
						<h2 className="text-white text-4xl mb-8 font-semibold">
							{variant == "login" ? "Sign in" : "Register"}
						</h2>
						<div className="flex flex-col gap-4">
							{variant == "register" && (
								<Input
									label="Email"
									onChange={(event: any) => {
										setEmail(event.target.value);
									}}
									id="email"
									type="email"
									value={email}
								/>
							)}
							<Input
								label="Username"
								onChange={(event: any) => {
									setUserName(event.target.value);
								}}
								id="name"
								value={userName}
							/>
							<Input
								label="Password"
								onChange={(event: any) => {
									setPassword(event.target.value);
								}}
								id="password"
								type="password"
								value={password}
							/>
							<button className=" bg-red-600 py-3 text-white rounded-nd w-full mt-10 hover:bg-red-700 transition">
								{variant == "login" ? "Login" : "Sign up"}
							</button>
							<p className="text-neutral-500 mt012">
								{variant == "login"
									? "First time using Netflix?"
									: "Already have an account?"}
								<span
									onClick={toggleVariant}
									className="text-white ml-1 hover:underline cursor-pointer"
								>
									{variant == "login" ? "Create an account" : "Log in"}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default auth;
