import { AuthService } from './auth.service';
import { AuthResponseDto } from './dto/auth-response.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<AuthResponseDto>;
    login(dto: LoginDto): Promise<AuthResponseDto>;
    me(user: {
        usuarioId: string;
    }): Promise<{
        perfilColaborador: {
            departamento: string | null;
            cargo: string | null;
            id: string;
        } | null;
        perfilPsicologo: {
            crp: string | null;
            especialidade: string | null;
            id: string;
        } | null;
        email: string;
        nome: string;
        papel: import("@prisma/client").$Enums.PapelUsuario;
        id: string;
        criadoEm: Date;
    }>;
    atualizarPerfil(user: {
        usuarioId: string;
    }, dto: UpdatePerfilDto): Promise<{
        perfilColaborador: {
            departamento: string | null;
            cargo: string | null;
            id: string;
        } | null;
        perfilPsicologo: {
            crp: string | null;
            especialidade: string | null;
            id: string;
        } | null;
        email: string;
        nome: string;
        papel: import("@prisma/client").$Enums.PapelUsuario;
        id: string;
        criadoEm: Date;
    }>;
}
