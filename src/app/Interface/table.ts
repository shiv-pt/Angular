import { CurrentAddress } from "./current-address"
import { EducationInfo } from "./education-info"
import { FatherInfo } from "./father-info"
import { HostelInfo } from "./hostel-info"
import { MotherInfo } from "./mother-info"
import { PermanentAddress } from "./permanent-address"
import { TransportInfo } from "./transport-info"

export interface Table {
    _id: string
    registrationNumber: string
    className: string
    section: string
    medium: string
    stream: string
    schoolDocId: string
    classDocId: string
    rollNumber: string
    dummyAADHAR: boolean
    AADHAR: string
    gender: string
    firstName: string
    middleName: string
    lastName: string
    DOB: string
    community: string
    category: string
    fatherInfo: FatherInfo
    motherInfo: MotherInfo
    currentAddress: CurrentAddress
    permanentAddress: PermanentAddress
    educationInfo: EducationInfo[]
    mobileNumber: string
    email: string
    profilePic: string
    parentDocId: string
    hostelInfo: HostelInfo
    transportationFeeCode: string
    transportInfo: TransportInfo
    admissionDate: string
    dues: number
    isUpdated: boolean
    _class: string
    isDuesCleared: boolean
    documentInfo: any[] 
}
