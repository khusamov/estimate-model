import {MeasureUnit} from '../classes/MeasureUnit'

describe('MeasureUnit', () => {
	test('.label', () => {
		const measureUnit = new MeasureUnit('Российский рубль')
		expect<string>(measureUnit.label).toEqual('Российский рубль')
	})
})