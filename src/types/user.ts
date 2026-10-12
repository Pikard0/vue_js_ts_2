export interface User { id:number; firstName:string; lastName:string; maidenName?:string; age:number; gender:string; email:string; phone:string; username:string; password?:string; image?:string; address?:{address:string; city:string; state:string; postalCode:string}; company?:{name:string; title:string} }
export type CreateUserDto = Omit<User,'id'|'image'|'address'|'company'>
export type UpdateUserDto = Partial<CreateUserDto>
export interface UsersResponse { users:User[]; total:number; skip:number; limit:number }
export interface AuthResponse extends User { accessToken:string; refreshToken:string }
