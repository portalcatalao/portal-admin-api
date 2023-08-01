import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    signIn(email: any, pass: any): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
        };
        access_token: string;
    }>;
}
