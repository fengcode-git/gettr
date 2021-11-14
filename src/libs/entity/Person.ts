import RoleType from "../enums/RoleType"

class Person {
    id: string = ''
    account_name: string = ''
    nickname:string = ''
    password: string = ''
    avatar: string = ''
    create_time: Date = new Date()
    role: RoleType = RoleType.user
}
export default Person