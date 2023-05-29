import React, { createContext, useContext,useState, useEffect } from 'react';
import axios from "axios";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [exercise, setExercise] = useState([]);
    const [nutrition, setNutrition] = useState([]);
    const [sleep, setSleep] = useState([]);
    const [authCred, setAuthCred] = useState({'email':'', 'password':""})
    const [isFetching, setIsFetching] = useState(false)
    const [eror, setError] = useState();
    const [isFetch, setisFetch] = useState(false)


   

     const Logout = ()=>{
      setSleep([]);
      setNutrition([]);
      setExercise([]);
      setUser({})
     } 
    
     
    const fetchUser= async () => {
      setIsFetching(true);  
      if(!authCred) throw new Error("pls add email and pass")
      try {
        const res = await axios.post("http://localhost:3005/auth/login",
          authCred
        );
        if (res) {
         await  setUser(res.data.user);
        } else {
          setError("Error fetching products.");
        }
      } catch (err) {
        console.log(err);
        const message = err?.response?.data?.error?.message;
        setError(message ?? String(err));
      } finally {
        setIsFetching(false);
      }
    };

    const fetchExercise= async () => {
      setIsFetching(true);  
      if(!user) throw new Error("pls add email and pass")
      try {
        const res = await axios.post("http://localhost:3005/exercise/list",
          user
        );
        if (res) {
         await  setExercise(res.data.user);
        } else {
          setError("Error fetching exersise");
        }
      } catch (err) {
        console.log(err);
        const message = err?.response?.data?.error?.message;
        setError(message ?? String(err));
      } finally {
        setIsFetching(false);
      }
    };

    

    
  

  const value = {user,exercise,nutrition,sleep,setUser,setExercise,setNutrition,setSleep,authCred, setAuthCred,fetchUser, isFetch, setisFetch,fetchExercise,Logout};

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};



export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};


