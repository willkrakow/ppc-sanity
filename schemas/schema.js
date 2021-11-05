// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import author from './author'
import blockContent from './blockContent'
import callToAction from './callToAction'
import category from './category'
import gridItem from './gridItem'
import hero from './hero'
import imageGrid from './imageGrid'
import menuItem from './menuItem'
import page from './page'
import post from './post'
import split from './split'
import settings from './settings'
import youtube from './youtube'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    author,
    blockContent,
    callToAction,
    category,
    gridItem,
    hero,
    imageGrid,
    menuItem,
    page,
    post,
    split,
    settings,
    youtube,
  ]),
})
