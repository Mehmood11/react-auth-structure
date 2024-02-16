import * as React from "react";
import NProgress from "nprogress";

function CustomNProgress() {
  React.useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleAnchorClick = (event) => {
      const targetUrl = event.currentTarget.href;
      const currentUrl = window.location.href;
      if (targetUrl !== currentUrl) {
        NProgress.start();
      }
    };

    const handleMutation = () => {
      const anchorElements = document.querySelectorAll("a[href]");

      anchorElements.forEach((anchor) => {
        anchor.addEventListener("click", handleAnchorClick);
      });
    };

    const mutationObserver = new MutationObserver(handleMutation);

    mutationObserver.observe(document, { childList: true, subtree: true });

    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argArray) => {
        NProgress.done();
        target.apply(thisArg, argArray);
      },
    });
  });

  return null;
}

export { CustomNProgress as NProgress };
