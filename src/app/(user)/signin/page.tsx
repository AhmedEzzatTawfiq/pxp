import { auth, signIn } from "@/auth";
import Container from "@/components/Container";
import googleImage from "@/assets/Google-Image.png";
import githubImage from "@/assets/githubImage.png";
import Image from "next/image";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <Container className="pb-24 pt-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Sign In
        </h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Choose a method to log in to your account.
        </p>
        <div className="space-y-6">
          {/* Google Sign-In */}
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/" });
            }}
            className="flex items-center justify-center gap-3 border border-blue-500 font-semibold bg-white px-6 py-4 rounded-lg transition duration-300 ease-in-out cursor-pointer hover:bg-blue-50 hover:text-black"
          >
            <Image src={googleImage} alt="Google" width={32} height={32} />
            <button type="submit" className="text-lg font-medium">
              Sign in with Google
            </button>
          </form>
          {/* GitHub Sign-In */}
          <form
            action={async () => {
              "use server";
              await signIn("github", { redirectTo: "/" });
            }}
            className="flex items-center justify-center gap-3 border border-gray-500 font-semibold bg-white px-6 py-4 rounded-lg transition duration-300 ease-in-out cursor-pointer hover:bg-gray-50 hover:text-black"
          >
            <Image src={githubImage} alt="GitHub" width={32} height={32} />
            <button type="submit" className="text-lg font-medium">
              Sign in with GitHub
            </button>
          </form>
        </div>
        {/* <SignInForm /> */}
      </div>
    </Container>
  );
};

export default SignInPage;
