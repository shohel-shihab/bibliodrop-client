import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";

export const metadata = {
  title: "Register | BiblioDrop",
};

export default function RegisterPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50 py-16">
      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-violet-300/30 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-300/30 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center justify-center px-5">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">
          {/* Left Side */}
          <div className="hidden flex-col justify-center bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-700 p-12 text-white lg:flex">
            <span className="mb-4 inline-block w-fit rounded-full bg-white/20 px-4 py-2 text-sm">
              Welcome to BiblioDrop
            </span>

            <h1 className="text-5xl font-extrabold leading-tight">
              Join Our Reading Community
            </h1>

            <p className="mt-6 text-lg leading-8 text-violet-100">
              Discover books from local libraries, request doorstep delivery,
              manage your reading journey, and connect with independent book
              owners—all in one place.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-white"></div>
                <p>Thousands of books available</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-white"></div>
                <p>Fast doorstep delivery</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-white"></div>
                <p>Manage your reading list</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-800">
                Create Account
              </h2>

              <p className="mt-2 text-gray-500">
                Register to start your reading journey.
              </p>
            </div>

            {/* Register Form */}
            <RegisterForm />

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-violet-600 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}