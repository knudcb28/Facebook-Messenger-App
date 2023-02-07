"use client";
import { getProviders } from "next-auth/react";
import React from "react";

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

const SignInComponent = ({ providers }: Props) => {

  return <div>
    {Object.values(providers!).map((provider) => (
        <div key={provider.name}>
            <button>
                Sign in with {provider.name}
            </button>
        </div>
    ))}
  </div>;
};

export default SignInComponent;
