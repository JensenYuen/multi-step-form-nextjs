export interface pageContextType {
  formInfo: formInfo,
  emergencyInfo: emergencyInfo
}

export interface formInfo {
  date: string,
  peopleCount: number,
  cooking: boolean,
  camping: boolean
}

export interface emergencyInfo {
  name: string,
  email: string,
  contactNum: string
}
