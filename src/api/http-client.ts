const BASE_URL=import.meta.env.VITE_API_URL || 'https://dummyjson.com'
export async function http<T>(path:string, options:RequestInit={}, retry=true):Promise<T>{
 const token=localStorage.getItem('accessToken'); const headers=new Headers(options.headers); headers.set('Content-Type','application/json'); if(token) headers.set('Authorization',`Bearer ${token}`)
 const response=await fetch(`${BASE_URL}${path}`,{...options,headers})
 if(response.status===401 && retry && localStorage.getItem('refreshToken')){ const refreshed=await fetch(`${BASE_URL}/auth/refresh`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({refreshToken:localStorage.getItem('refreshToken'),expiresInMins:30})}); if(refreshed.ok){const data=await refreshed.json();localStorage.setItem('accessToken',data.accessToken);return http<T>(path,options,false)} }
 if(!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`); return response.json() as Promise<T>
}
