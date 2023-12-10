import {IAttributeListReadonly} from './IAttributeListReadonly'
import {IMeasureUnitBasicAttributes} from './IMeasureUnitBasicAttributes'

/**
 * Единица измерения товара/услуги/цены.
 */
export interface IMeasureUnit<T extends IMeasureUnitBasicAttributes> {
	/**
	 * Название единицы измерения.
	 */
	readonly label: string

	/**
	 * Дополнительные аттрибуты единицы измерения.
	 */
	readonly attributes: IAttributeListReadonly<T>

	/**
	 * Отформатировать число для вывода на экран.
	 * Например 123456.789 -> 123 456,79 руб.
	 * Дополнительные сведения см. интерфейс IMeasureUnitFormatter.
	 * @param value
	 */
	format(value: number): string
}