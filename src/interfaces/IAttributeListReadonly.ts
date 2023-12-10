export interface IAttributeListReadonly<M> {
	getAttribute<A extends keyof M>(name: A): M[A] | undefined
	getAttribute<A extends keyof M>(name: A, defaultValue: M[A]): M[A]
}