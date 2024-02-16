import { AuthGuard } from "../guards/auth-guard";

export const WithAuthGuard = (Component) => {
  return function withAuthGuard(props) {
    return (
      <AuthGuard>
        <Component {...props} />
      </AuthGuard>
    );
  };
};
