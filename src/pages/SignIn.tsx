import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn 
        path="/sign-in" 
        routing="path" 
        fallbackRedirectUrl={`${baseUrl}/manuals`}
      />
    </div>
  );
};

export default SignInPage;
