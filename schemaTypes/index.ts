import {blogTypes} from './blog'
import {portfolioTypes} from './portfolio'
import {reviewTypes} from './review'
import {serviceTypes} from './service'

export const schemaTypes = [...portfolioTypes, ...blogTypes, ...reviewTypes, ...serviceTypes]
