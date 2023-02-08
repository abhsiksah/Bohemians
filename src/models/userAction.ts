export interface AppAction <T,P> {
    type: T,
    payload?: Partial<P>
} 

