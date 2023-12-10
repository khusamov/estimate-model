import {IMeasureUnitFormatter} from './IMeasureUnitFormatter'
import {IMeasureUnitBasicAttributes} from './IMeasureUnitBasicAttributes'

export interface IMeasureUnitOptions {
	readonly attributes?: IMeasureUnitBasicAttributes
	readonly formatter?: IMeasureUnitFormatter
}