import LoginForm from "@/components/auth/LoginForm";
import RegisterHero from "@/components/auth/RegisterHero";
import Link from "next/link";

export const metadata = {
  title: "Login | BiblioDrop",
};

export default function LoginPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50 py-16">
      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-violet-300/30 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-300/30 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center justify-center px-5">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">

          {/* Left Side */}
          <RegisterHero />

          {/* Right Side */}
          <div className="flex items-center justify-center p-8 md:p-12">
            <div className="w-full max-w-md">
              <div className="mb-8">
                <span className="rounded-full bg-violet-100 px-4 py-1 text-sm font-medium text-violet-700">
                  Welcome Back 👋
                </span>

                <h2 className="mt-4 text-4xl font-bold text-gray-800">
                  Sign In
                </h2>

                <p className="mt-2 text-gray-500">
                  Login to continue your reading journey.
                </p>
              </div>

              {/* Login Form */}
              <LoginForm />

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    href="/register"
                    className="font-semibold text-violet-600 transition hover:text-violet-700 hover:underline"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}