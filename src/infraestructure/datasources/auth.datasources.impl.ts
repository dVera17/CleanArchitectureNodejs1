import { UserModel } from "../../data/mongodb";
import { AuthDatasource, RegisterUserDto, CustomError, User } from "../../domain";

export class AuthDatasourceImpl implements AuthDatasource {

    async register(registerUserDto: RegisterUserDto): Promise<User> {
        const { name, email, password } = registerUserDto;

        try {

            const emailExist = await UserModel.findOne({ email });
            if (emailExist) throw CustomError.badRequest('User already exist');

            const user = new UserModel  

            return new User(
                '1',
                name,
                email,
                password,
                ['ADMIN_ROLE'],
            );
        } catch (error) {
            if (error instanceof CustomError) throw error;
            throw CustomError.internalServerError();
        }

    }

}