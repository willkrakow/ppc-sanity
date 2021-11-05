// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas

import test from './test'
import blockContent from './blockContent'
import page from './page'
import post from './post'
import category from './category'
import callToAction from './callToAction'
import gridItem from './gridItem'
import hero from './hero'
import menuItem from './menuItem'
import imageGrid from './imageGrid'
import split from './split'
import settings from './settings'
import author from './author'
import youtube from './youtube'
import form from './form'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    test,
    blockContent,
    page,
    post,
    category,
    callToAction,
    gridItem,
    hero,
    menuItem,
    imageGrid,
    split,
    settings,
    author,
    youtube,
    form
  ]),
})
