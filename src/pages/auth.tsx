import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { TextField } from "src/components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useAuth } from "src/hooks/useAuth";
const Auth = () => {
  const [auth, setAuth] = useState<"signup" | "signin">("signin");
  const { error, isLoading, signpIn, signpUp, user, setIsLoading } = useAuth();
  const router = useRouter();
  if (user) router.push("/");
  if (isLoading) return <h1>Loading...</h1>;
  const toggleAuth = (state: "signup" | "signin") => {
    setAuth(state);
  };
  const onSubmit = async (formData: { email: string; password: string }) => {
    if (auth === "signup") {
      setIsLoading(true);
      const response = await fetch("/api/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      await response.json();

      signpUp(formData.email, formData.password);
    } else {
      signpIn(formData.email, formData.password);
    }
  };
  const validation = Yup.object({
    email: Yup.string().email("Enter valid email").required("Email is required"),
    password: Yup.string().min(6, "6 minimum character").required("Password is required"),
  });
  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center bg-black md:bg-transparent">
      <Head>
        <title>Diyorbek Movies | Auth</title>
        <meta name="description" content="For watching movies you should sign to app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" as="image" />
      </Head>
      <Image src={"https://rb.gy/p2hphi"} alt="bg" fill className="object-cover -z-10 !hidden sm:!inline opacity-60" />
      <Image src="/logo.svg" alt="logo" width={100} height={100} priority className="absolute top-4 left-4 cursor-pointer object-contain" />
      <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit} validationSchema={validation}>
        <Form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
          <h1 className="text-4xl font-semibold">{auth === "signup" ? "Sign Up" : "Sign In"}</h1>
          {error && <p className="text-red-500 font-semibold text-center">{error}</p>}
          <div className="space-y-4">
            <TextField name="email" placeholder="Email" type="email" />
            <TextField name="password" placeholder="Password" type="password" />
          </div>
          <button type="submit" disabled={isLoading} className="w-full bg-[#E10856] py-4 rounded mt-4 font-semibold">
            {isLoading ? "Loading..." : auth === "signin" ? "Sign In" : "Sign Up"}
          </button>
          {auth === "signin" ? (
            <div className="text-[gray]">
              Not yet account?{" "}
              <button type="button" className="text-white hover:underline" onClick={() => toggleAuth("signup")}>
                Sign Up Now
              </button>
            </div>
          ) : (
            <div className="text-[gray]">
              Already have account?{" "}
              <button type="button" className="text-white hover:underline" onClick={() => toggleAuth("signin")}>
                Sign In
              </button>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default Auth;
