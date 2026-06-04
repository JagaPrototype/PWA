import { createContext, useContext, useReducer, useCallback, useMemo } from "react";
import type {
  RouterState,
  RouterContextType,
  NavAction,
  ScreenId,
  TabId,
} from "./types";
import { TAB_ROOTS } from "./types";

// ─── Context ──────────────────────────────────────────────────────────────────

const RouterContext = createContext<RouterContextType | null>(null);

export function useRouter(): RouterContextType {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter must be used inside AppRouter");
  return ctx;
}

// ─── Reducer ──────────────────────────────────────────────────────────────────

function routerReducer(state: RouterState, action: NavAction): RouterState {
  switch (action.type) {
    case "push":
    case "modal":
      return { ...state, stack: [...state.stack, action.to] };

    case "replace": {
      const next = [...state.stack];
      next[next.length - 1] = action.to;
      return { ...state, stack: next };
    }

    case "tab_switch":
      return {
        stack: [action.to as ScreenId],
        activeTab: action.to as TabId,
      };

    case "back":
      if (state.stack.length <= 1) return state;
      return { ...state, stack: state.stack.slice(0, -1) };

    default:
      return state;
  }
}

// ─── Provider ─────────────────────────────────────────────────────────────────

interface AppRouterProps {
  children: React.ReactNode;
  initialScreen?: ScreenId;
}

export function AppRouter({
  children,
  initialScreen = "splash",
}: AppRouterProps) {
  const [state, rawDispatch] = useReducer(routerReducer, {
    stack: [initialScreen],
    activeTab: TAB_ROOTS.includes(initialScreen)
      ? (initialScreen as TabId)
      : "home",
  });

  const dispatch = useCallback((action: NavAction) => {
    rawDispatch(action);
  }, []);

  const screen = state.stack[state.stack.length - 1];
  const canGoBack = state.stack.length > 1;

  const value = useMemo<RouterContextType>(
    () => ({ screen, activeTab: state.activeTab, canGoBack, dispatch }),
    [screen, state.activeTab, canGoBack, dispatch]
  );

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
}
