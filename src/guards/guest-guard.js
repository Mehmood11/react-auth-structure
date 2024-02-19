import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function GuestGuard(props) {
  const { children } = props;
  const router = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (isAuthenticated) {
      router("/dashboard");
    } else {
      setChecked(true);
    }
  }, [isAuthenticated, router]);

  // Only check on mount, this allows us to redirect the user manually when auth state changes
  useEffect(() => {
    check();
  }, [check]);

  if (!checked) {
    return null;
  }
  // If got here, it means that the redirect did not occur, and that tells us that the user is authorized.
  return <>{children}</>;
}
