import { RegisterUserDto } from "../dtos/auth/registerUser.dto";
import { User } from "../entities/user.entity";

export abstract class AuthDatasource {

    abstract register(registerUserDto: RegisterUserDto): Promise<User>

}