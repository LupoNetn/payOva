
import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp path="/sign-up" routing="path"  fallbackRedirectUrl={`/manuals`}/>
    </div>
  );
};

export default SignUpPage;
