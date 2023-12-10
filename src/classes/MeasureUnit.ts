import type {IMeasureUnit} from '../interfaces/IMeasureUnit'
import type {IMeasureUnitFormatter} from '../interfaces/IMeasureUnitFormatter'
import type {IMeasureUnitOptions} from '../interfaces/IMeasureUnitOptions'
import type {IAttributeListReadonly} from '../interfaces/IAttributeListReadonly'
import type {IMeasureUnitBasicAttributes as IBasicAttributes} from '../interfaces/IMeasureUnitBasicAttributes'

import {MeasureUnitDefaultFormatter} from './MeasureUnitDefaultFormatter'
import {AttributeListReadonly} from './AttributeListReadonly'

/**
 * Реализация единицы измерения.
 */
export class MeasureUnit<T extends IBasicAttributes = IBasicAttributes> implements IMeasureUnit<T> {
	/**
	 * Объект для форматирования строки с числом и единицей измерения.
	 * @private
	 */
	private readonly formatter: IMeasureUnitFormatter

	/**
	 * Название единицы измерения.
	 */
	public readonly label: string

	/**
	 * Дополнительные аттрибуты единицы измерения.
	 */
	public readonly attributes: IAttributeListReadonly<T>

	/**
	 * Конструктор единицы измерения.
	 * @param label Название единицы измерения.
	 * @param options Настройки единицы изменения.
	 */
	public constructor(label: string, {attributes, formatter}: IMeasureUnitOptions = {}) {
		this.label = label
		this.attributes = new AttributeListReadonly(attributes)
		this.formatter = formatter ?? new MeasureUnitDefaultFormatter
	}

	/**
	 * Отформатировать значение единицы измерения.
	 * @param value
	 */
	public format(value: number): string {
		return this.formatter.format(value)
	}
}