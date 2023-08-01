import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(body: LoginDto): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
        };
        access_token: string;
    }>;
}
