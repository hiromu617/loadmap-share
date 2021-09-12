import { FC, createContext, useState, Dispatch, SetStateAction } from "react";

const LoginModalContext = createContext(
  {} as {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }
);

const LoginModalProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LoginModalContext.Provider
      value={{ isOpen: isOpen, setIsOpen: setIsOpen}}
    >
      {children}
    </LoginModalContext.Provider>
  );
};

export { LoginModalContext, LoginModalProvider };
