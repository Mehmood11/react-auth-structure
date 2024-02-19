import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function AuthGuard(props) {
  const { children } = props;
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isChecked, setIsChecked] = useState(false);

  const check = useCallback(() => {
    if (!isAuthenticated) {
      const searchParams = new URLSearchParams({
        returnTO: window.location.pathname,
      }).toString();
      const href = `/?${searchParams}`;
      navigate(href);
    } else {
      setIsChecked(true);
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    check();
  }, [check]);

  if (!isChecked) {
    return null;
  }

  return <>{children}</>;
}
