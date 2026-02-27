import { logUserEvent } from "./UserLogEvent";

export const useUIBackNavigationLogger = () => {
  const logBackNavigation = (fromScreen, toScreen) => {
    logUserEvent("ui_back_navigation", "UI Navigation", {
      from_screen: fromScreen,
      to_screen: toScreen,
    });
  };

  return { logBackNavigation };
};
