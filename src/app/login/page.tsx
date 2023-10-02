import Image from "next/image";
import { getProviders } from "next-auth/react";
import React from "react";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import Link from 'next/link';



export const metadata = {
	title: "Sign In",
	description: "Sign In",
};


  
export default async function Login(): Promise<React.JSX.Element> {
	const providers = await getProviders();
	// const router = useRouter();
	
	return (
        <div className="h-screen overflow-hidden bg-black">
            <div className="flex h-full flex-col items-center justify-center">
				<Image src="/laowudiFish.png" width={200} height={200} alt={"Logo"} />

                <div className="flex flex-col items-center justify-center space-y-8">
                    
                    <h1 className="text-4xl font-bold text-white">Welcome to Sign In Page</h1>
                    
                    <ul className="space-y-2">
						<li className="mb-3 last:mb-0">
							<button 
							data-testid="google-login" 
							className="flex items-center px-4 py-2 border border-gray-600 hover:border-gray-200 text-gray-100 transition-colors duration-200 w-[260px] rounded-full"
							>
							<AiFillGoogleCircle className="mr-2"></AiFillGoogleCircle>
							{`Continue with Google`}
							</button>
						</li>
                        <li className="mb-3 last:mb-0">
							<button 
							data-testid="facebook-login" 
							className="flex items-center px-4 py-2 border border-gray-600 hover:border-gray-200 text-gray-100 transition-colors duration-200 w-[260px] rounded-full"
							>
							<AiFillFacebook className="mr-2"></AiFillFacebook>
							{`Continue with Facebook`}
							</button>
						</li>
                    </ul>

                    <div className="h-[0.1px] bg-gray-100 opacity-30 w-full"></div>

                    {/* Username and Password Input Fields */}
                    <div className="flex flex-col space-y-2">
						<label className="text-white text-xs">Email or username</label>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            className="p-2 w-64 text-white rounded border border-gray-600 hover:border-gray-200 bg-gray-900 placeholder-gray-400"
                        />
						<label className="text-white text-xs">Password</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="p-2 w-64  text-white rounded border border-gray-600 hover:border-gray-200 bg-gray-900 placeholder-gray-400"
                        />
                    </div>

                    {providers &&
                        // Object.values(providers).map((provider) => (
                        //     <ProviderButton key={provider.name} id={provider.id} name={provider.name} callback={"/"} />
                        // ))
						<Link href="/">
							<button
								key="login_button"
								className="rounded-full bg-green-500 px-20 py-2 text-xl font-semibold text-black shadow-lg shadow-gray-800 transition duration-300 hover:bg-white hover:text-black hover:scale-105"
								/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
								// onClick={async (): Promise<void> => void (await signIn(id, { callbackUrl: callback }))}
							>
								Sign in
							</button>
						</Link>
					}

                    <div className="h-[0.1px] bg-gray-100 opacity-30 w-full"></div>

                    {/* Assuming you'll be adding a "Sign in" button here */}

                </div>
            </div>
        </div>
	);
}
