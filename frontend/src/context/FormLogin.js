import React, {createContext, useState, useContext} from "react";

const FormLoginContext = createContext();

export default function FormLoginProvider({children}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  return(
    <FormLoginContext.Provider
    value={{
      email,
      setEmail,
      password,
      setPassword
      }}>

      {children}

    </FormLoginContext.Provider>
  );

}

export function useFormLogin(){
  const context = useContext(FormLoginContext);
  const {email, setEmail, password, setPassword} = context;
  return {email, setEmail, password, setPassword};
}