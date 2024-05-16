// src/api.d.ts

export declare function login(email: string, password: string): Promise<{ token: string }>;
export declare function getProfile(token: string): Promise<any>; // Altere 'any' para corresponder ao tipo de retorno esperado
