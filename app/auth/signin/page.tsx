import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div className="">
      <div className="flex justify-center">
        <Image
          className="rounded-full mx-2 object-cover"
          width={700}
          height={700}
          src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/yvbOx5two0W.png"
          alt="Profile Picture"
        />
      </div>

      <SignInComponent providers={providers}/>
    </div>
  );
};

export default SignInPage;
