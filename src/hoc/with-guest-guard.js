import { GuestGuard } from "../guards/guest-guard";

export const WithGuestGuard = (Component) => {
  return function withGuestGuard(props) {
    return (
      <GuestGuard>
        <Component {...props} />
      </GuestGuard>
    );
  };
};
