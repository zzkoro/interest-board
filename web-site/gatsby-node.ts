import type { GatsbyNode } from 'gatsby'
import { resolve } from 'path'

export const createPages: GatsbyNode['createPages'] = ({ actions }) => {
  const { createPage } = actions
  const dataSource = { thirdSlideTittle: '세번째 타이틀' }

  createPage({
    path: '/home',
    component: resolve('src/templates/single-page.tsx'),
    context: { dataSource },
  })
}
