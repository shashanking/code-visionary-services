import {blogTypes} from './blog'
import {clientTypes} from './client'
import {faqTypes} from './faq'
import {portfolioTypes} from './portfolio'
import {reviewTypes} from './review'
import {serviceTypes} from './service'
import {teamTypes} from './team'
import {techStackTypes} from './techStack'

export const schemaTypes = [
  ...portfolioTypes,
  ...blogTypes,
  ...reviewTypes,
  ...serviceTypes,
  ...clientTypes,
  ...teamTypes,
  ...techStackTypes,
  ...faqTypes,
]
