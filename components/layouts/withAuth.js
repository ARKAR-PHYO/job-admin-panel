import { isLoggedIn } from "../../services/auth";
import redirectTo from "../../services/redirect-to";
import { AuthProvider } from "../../wrapper/global";

// ******************************
// THE DEFAULT ONE

// TO FIX THIS ERROR -> https://nextjs.org/docs/messages/gssp-component-member

const withAuth = (Component) => {
  const AuthComponent = (props) => {
    return (
      <AuthProvider>
        <Component {...props} />
      </AuthProvider>
    );
  };

  AuthComponent.getInitialProps = (context) => {
    const isUserLoggedIn = isLoggedIn(context?.req?.headers?.cookie || "");

    if (!isUserLoggedIn) {
      redirectTo("/auth/login", context);
    }
    return { user: { isLoggedIn: isUserLoggedIn } };
  };

  return AuthComponent;
};

export default withAuth;

// ******************************
