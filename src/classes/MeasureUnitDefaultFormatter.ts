import {IMeasureUnitFormatter} from '../interfaces/IMeasureUnitFormatter'

export class MeasureUnitDefaultFormatter implements IMeasureUnitFormatter {
	public format(value: number): string {
		return String(value)
	}
}