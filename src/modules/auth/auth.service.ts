import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
    ) { }

    async signIn(email, pass) {
        if (process.env.USER_PASSWORD !== pass || process.env.USER_EMAIL != email) {
            throw new UnauthorizedException();
        }
        const payload = { sub: process.env.USER_ID, email: process.env.USER_EMAIL, name: process.env.USER_NAME };
        return {
            user: {
                id: process.env.USER_ID,
                name: process.env.USER_NAME,
                email: process.env.USER_EMAIL,
            },
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
