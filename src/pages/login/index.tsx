import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    // Redirect to home if already logged in
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Attempt to sign in
    signIn("keycloak", { callbackUrl: "/" }); // Use the correct ID for your provider
  };

  return (
    <>
      {!session && (
        <div className="flex items-center justify-center h-screen">
          <div className="page-login">
            <div className="ui centered grid container">
              <div className="five wide column">
                <div className="ui fluid card items-center">
                  <form
                    className="ui form"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <div className="field">
                      <button className="ui button" type="submit">
                        Entrar com Keycloak
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
