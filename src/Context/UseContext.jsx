import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DataContext1 = createContext();
const DataContext2 = createContext();
const DataContext3 = createContext();
const DataContext4 = createContext();
const DataContext5 = createContext();
const DataContext6 = createContext();
export const DataProvider1 = ({ children }) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const setAndRedirect = (newData) => {
    setData(newData);
    navigate('/feePage/charity/fund');
    if (data !== null){
        console.log("Đã truyền thành công",data)
    }
  }
return (
    <DataContext1.Provider value={{setData, data,setAndRedirect}}>
      {children}
    </DataContext1.Provider>
  );
};

export const DataProvider2 = ({ children }) => {
    const [name, setName] = useState('');
    const [apartmentId,setApartmentId] = useState('')
    const navigate = useNavigate();
  
    const setAndRedirect = (name,apartmentId) => {
      setName(name);
      setApartmentId(apartmentId);
      navigate('/feePage/charity/addDonate');
      
    }
  return (
      <DataContext2.Provider value={{ name,apartmentId,setAndRedirect}}>
        {children}
      </DataContext2.Provider>
    );
  };
  export const DataProvider3 = ({ children }) => {
    const [apartmentId,setApartmentId] = useState('')
    const [month,setMonth] = useState('')
    const [year,setYear] = useState('')
    const navigate = useNavigate();
  
    const setAndRedirect = (apartmentId,month,year) => {
      setApartmentId(apartmentId);
      setMonth(month)
      setYear(year)
      navigate('/feePage/fee/billOfApartment');
      
    }
  return (
      <DataContext3.Provider value={{ apartmentId,month,year,setAndRedirect}}>
        {children}
      </DataContext3.Provider>
    );
  };
  export const DataProvider4 = ({ children }) => {
    const [month,setMonth] = useState('')
    const [year,setYear] = useState('')
    const navigate = useNavigate();
  
    const setAndRedirect = (month,year) => {
      setMonth(month)
      setYear(year)
      navigate('/feePage/fee/listBill');
      
    }
  return (
      <DataContext4.Provider value={{ month,year,setAndRedirect}}>
        {children}
      </DataContext4.Provider>
    );
  };
  export const DataProvider5 = ({ children }) => {
    const [apartmentId, setApartmentId] = useState('');
    const [citizenId,setCitizenId] = useState('')
    const navigate = useNavigate();
  
    const setAndRedirect = (apartmentId,citizenId) => {
      setApartmentId(apartmentId);
      setCitizenId(citizenId)
      navigate('');
    }
  return (
      <DataContext5.Provider value={{apartmentId, citizenId,setAndRedirect}}>
        {children}
      </DataContext5.Provider>
    );
  };
  export const DataProvider6 = ({ children }) => {
    const [data,setData] = useState('')

    const navigate = useNavigate();
  
    const setAndRedirect = (data) => {
      setData(data)
      navigate('/display');
      
    }
  return (
      <DataContext6.Provider value={{data,setAndRedirect}}>
        {children}
      </DataContext6.Provider>
    );
  }


export const useData6 = () => {
    const context = useContext(DataContext6);
    if (!context) {
      throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

export const useData2 = () => {
    const context = useContext(DataContext2);
    if (!context) {
      throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
export const useData3 = () => {
  const context = useContext(DataContext3);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
export const useData4 = () => {
  const context = useContext(DataContext4);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
export const useData5 = () => {
  const context = useContext(DataContext5);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

const UserContext = createContext({ email: '', auth: false ,role:''});
const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ email: '', auth: false,role:'' });

  // Login updates the user data with a name parameter
  const loginContext = (email,accessToken,role) => {
    setUser((user) => ({
      email: email,
      auth: true,
      role:role
    }));
    localStorage.setItem("accessToken",accessToken)
    localStorage.setItem("email",email)
    localStorage.setItem("role",role)
  };

  // Logout updates the user data to default
  const logout = (email,role) => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("email")
    localStorage.removeItem("role")
    setUser(() => ({
      email: email,
      auth: false,
      role: role
    }));
  };

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export {UserContext,UserProvider}