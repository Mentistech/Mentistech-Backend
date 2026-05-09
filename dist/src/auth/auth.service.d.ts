import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { AuthResponseDto } from './dto/auth-response.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<AuthResponseDto>;
    login(dto: LoginDto): Promise<AuthResponseDto>;
    me(usuarioId: string): Promise<{
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
    atualizarPerfil(usuarioId: string, dto: UpdatePerfilDto): Promise<{
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
    private gerarToken;
}
