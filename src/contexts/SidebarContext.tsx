import { createContext, useCallback, useMemo, useState } from 'react';

import { ProviderType } from 'components/types';

type SidebarContextType = {
  isOpen: boolean;
  handleClose: () => void;
};

export const SidebarContext = createContext({} as SidebarContextType);

export const SidebarProvider = ({ children }: ProviderType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const memoizedContext = useMemo(() => {
    return { isOpen, handleClose };
  }, [isOpen, handleClose]);

  return (
    <SidebarContext.Provider value={memoizedContext}>
      {children}
    </SidebarContext.Provider>
  );
};
