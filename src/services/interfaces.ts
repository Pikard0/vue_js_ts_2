export interface Readable<T>{getAll(params?:{limit?:number;skip?:number;q?:string}):Promise<T[]>;getById(id:number):Promise<T>}
export interface Creatable<T,C>{create(data:C):Promise<T>}
export interface Editable<T,U>{update(id:number,data:U):Promise<T>}
export interface Deletable{delete(id:number):Promise<void>}
