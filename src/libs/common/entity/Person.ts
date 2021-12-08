import RoleType from "@/libs/common/enums/RoleType"
import StringHelper from "@/libs/common/utils/StringHelper"

class Person {
    id: string = ''
    account_name: string = ''
    nickname:string = ''
    password: string = ''
    avatar: string = ''
    create_time: string = StringHelper.getNowString()
    role: RoleType = RoleType.user
}
export default Person