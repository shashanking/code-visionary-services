import {blogTypes} from './blog'
import {portfolioTypes} from './portfolio'
import {reviewTypes} from './review'

export const schemaTypes = [...portfolioTypes, ...blogTypes, ...reviewTypes]
