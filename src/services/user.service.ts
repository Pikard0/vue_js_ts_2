import {http} from '@/api/http-client'; import type {User,UsersResponse,CreateUserDto,UpdateUserDto} from '@/types/user'; import type {Readable,Creatable,Editable,Deletable} from './interfaces'
export class UserService implements Readable<User>,Creatable<User,CreateUserDto>,Editable<User,UpdateUserDto>,Deletable{
 async getAll({limit=10,skip=0,q=''}={}){const d=await http<UsersResponse>(q?`/users/search?q=${encodeURIComponent(q)}&limit=${limit}&skip=${skip}`:`/users?limit=${limit}&skip=${skip}`);return d.users}
 getById(id:number){return http<User>(`/users/${id}`)} create(data:CreateUserDto){return http<User>('/users/add',{method:'POST',body:JSON.stringify(data)})} update(id:number,data:UpdateUserDto){return http<User>(`/users/${id}`,{method:'PUT',body:JSON.stringify(data)})} async delete(id:number){await http(`/users/${id}`,{method:'DELETE'})}
}
