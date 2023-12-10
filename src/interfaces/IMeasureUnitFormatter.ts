/**
 * Объект для форматирования строки с числом и единицей измерения.
 * Для форматирования можно использовать Intl.NumberFormat.
 * @link https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
export interface IMeasureUnitFormatter {
	/**
	 * Значение статьи расхода.
	 * @param value
	 * @return Отформатированная строка для вывода на экран.
	 */
	format(value: number): string
}