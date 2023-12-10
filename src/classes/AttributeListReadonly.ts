import {IAttributeListReadonly} from '../interfaces/IAttributeListReadonly'

export class AttributeListReadonly<M> implements IAttributeListReadonly<M> {
	protected values = new Map<keyof M, any>

	public constructor(values?: Partial<M>, defaultValues?: Partial<M>) {
		if (values) {
			values = Object.assign({}, defaultValues ?? {}, values)
			for (const name in values) {
				this.values.set(name as keyof M, values[name])
			}
		}
	}

	public getAttribute<A extends keyof M>(name: A): M[A] | undefined
	public getAttribute<A extends keyof M>(name: A, defaultValue: M[A]): M[A]
	public getAttribute<A extends keyof M>(name: A, defaultValue?: M[A]): M[A] {
		const value = this.values.get(name)
		return (
			value === undefined
				? defaultValue
				: value
		)
	}
}