import React, { createContext, ReactNode, useContext, useState } from 'react';
import { emergencyInfo, formInfo, pageContextType } from '../types/page';

const date = new Date().toISOString().split('T')[0];
const initFormInfo: formInfo = {
  date,
  peopleCount: 1,
  cooking: false,
  camping: false
}
const initEmergencyInfo: emergencyInfo = {
  name: '',
  email: '',
  contactNum: ''
}
const PageContextDefaultValues: pageContextType = {
  formInfo: initFormInfo,
  emergencyInfo: initEmergencyInfo
};

const PageContext = createContext<pageContextType>(PageContextDefaultValues);

export const usePage = () => useContext(PageContext);

interface Props {
  childern?: ReactNode;
}

export const PageContextProvider = ({ childern }: Props) => {
  const [formInfo, setFormInfo] = useState<formInfo>(initFormInfo)
  const [emergencyInfo, setEmergencyInfo] = useState<emergencyInfo>(initEmergencyInfo)

  const value = {
    formInfo,
    emergencyInfo
  }

  return(
    <>
      <PageContext.Provider value={value}>
        {childern}
      </PageContext.Provider>
    </>
  )
}

export default PageContext;
