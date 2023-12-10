export interface IMeasureUnitBasicAttributes {
	/**
	 * Сокращенное название единицы измерения.
	 * Например $ для долларов или 'шт.' для Штук.
	 * По умолчанию равно label.
	 */
	readonly shorthand?: string
}