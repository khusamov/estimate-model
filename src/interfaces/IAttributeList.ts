import {IAttributeListReadonly} from './IAttributeListReadonly'

export interface IAttributeList<M> extends IAttributeListReadonly<M> {
	setAttribute<A extends keyof M>(name: A, value: M[A]): void
}