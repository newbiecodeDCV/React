import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DataContext1 = createContext();
const DataContext2 = createContext();
export const DataProvider1 = ({ children }) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const setAndRedirect = (newData) => {
    setData(newData);
    navigate('/peePage/page1/func4');
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
      navigate('/peePage/page1/func2');
      
    }
  return (
      <DataContext2.Provider value={{ name,apartmentId,setAndRedirect}}>
        {children}
      </DataContext2.Provider>
    );
  };

export const useData1 = () => {
    const context = useContext(DataContext1);
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